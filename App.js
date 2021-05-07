import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React from 'react';

import { client as ApolloClient } from './app/api/client';
import { Theme } from './app/components';
import useLoadAssets from './app/hooks/useLoadAssets';
import { AuthNavigator, navigationTheme } from './app/navigation';

export default function App() {
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();

  if (!assetsLoaded)
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setAssetsLoaded(true)}
        onError={console.warn}
      />
    );

  return (
    <ApolloProvider client={ApolloClient}>
      <Theme>
        <NavigationContainer theme={navigationTheme}>
          <AuthNavigator />
          {/* <AppNavigator /> */}
        </NavigationContainer>
      </Theme>
    </ApolloProvider>
  );
}
