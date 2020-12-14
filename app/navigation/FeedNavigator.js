import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';

import { NotificationsScreen, SettingsScreen } from '../screens';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    initialRouteName="Main"
    mode="modal"
    screenOptions={({ route, navigation }) => ({
      headerShown: false,
      cardOverlayEnabled: true,
      headerStatusBarHeight:
        navigation.dangerouslyGetState().routes.findIndex((r) => r.key === route.key) > 0
          ? 0
          : undefined,
      ...TransitionPresets.ModalPresentationIOS,
    })}
  >
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
    <Stack.Screen name="Main" component={MainNavigator} />
  </Stack.Navigator>
);

export default FeedNavigator;
