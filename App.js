import "react-native-gesture-handler";

import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { decode, encode } from "base-64";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";

import authApi from "./app/api/auth";
import { client as ApolloClient } from "./app/api/client";
import usersApi from "./app/api/users";
import AuthContext from "./app/auth/context";
import { Theme } from "./app/components";
import useLoadAssets from "./app/hooks/useLoadAssets";
import { AppNavigator, AuthNavigator, navigationTheme } from "./app/navigation";

if (!global.btoa) global.btoa = encode;

if (!global.atob) global.atob = decode;

if (Platform.OS === "android")
  LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

// 消除AsyncStorage的黄色警告
LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
]);

export default function App() {
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();
  const [user, setUser] = useState();

  useEffect(() => {
    fetchUser();
  }, [user]);

  const fetchUser = () => {
    authApi.checkUser(async (user) => {
      if (user) {
        try {
          const docSnap = await usersApi.getUser(user.uid);
          if (docSnap.exists()) setUser(docSnap.data());
          else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  if (!assetsLoaded)
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setAssetsLoaded(true)}
        onError={console.warn}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <ApolloProvider client={ApolloClient}>
        <Theme>
          <NavigationContainer theme={navigationTheme}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </Theme>
      </ApolloProvider>
    </AuthContext.Provider>
  );
}
