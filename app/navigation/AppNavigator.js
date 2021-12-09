import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import {
  NotificationsScreen,
  SectionScreen,
  SettingsScreen,
  VideoScreen,
} from "../screens";
import MainNavigator from "./MainNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={({ route, navigation }) => ({
      cardOverlayEnabled: true,
      presentation: "modal",
      headerShown: false,
      headerStatusBarHeight:
        navigation.getState().routes.findIndex((r) => r.key === route.key) > 0
          ? 0
          : undefined,
    })}
  >
    <Stack.Screen name="Main" component={MainNavigator} />
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ ...TransitionPresets.ModalPresentationIOS }}
    />
    <Stack.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    />
    <Stack.Screen
      name="Section"
      component={SectionScreen}
      options={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
    />
    <Stack.Screen
      name="Video"
      component={VideoScreen}
      options={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
