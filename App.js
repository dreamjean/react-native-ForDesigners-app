import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { decode, encode } from "base-64";
import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";

import { client as ApolloClient } from "./app/api/client";
import AuthContext from "./app/auth/context";
import { Theme } from "./app/components";
import { auth } from "./app/firebase";
import useLoadAssets from "./app/hooks/useLoadAssets";
import { AppNavigator, AuthNavigator, navigationTheme } from "./app/navigation";

if (!global.btoa) global.btoa = encode;

if (!global.atob) global.atob = decode;

if (Platform.OS === "android")
  LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

export default function App() {
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onAuthStateChanged = (user) => {
    if (user) setUser(user);
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
