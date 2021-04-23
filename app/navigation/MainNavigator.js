import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { theme } from '../config';
import { CoursesScreen, HomeScreen, ProjectScreen } from '../screens';

const Tab = createBottomTabNavigator();

const { getFont, space } = theme;

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ size, color }) => {
    let icon;
    if (route.name === 'Home') icon = 'home';

    if (route.name === 'Courses') icon = 'albums';

    if (route.name === 'Project') icon = 'folder';

    return <Ionicons name={icon} color={color} size={size} />;
  },
});

const MainNavigator = () => (
  <Tab.Navigator
    // initialRouteName="Home"
    {...{ screenOptions }}
    tabBarOptions={{
      labelStyle: {
        fontFamily: getFont(2),
        marginBottom: space.s1,
      },
    }}
  >
    <Tab.Screen name="Project" component={ProjectScreen} />
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Courses" component={CoursesScreen} />
  </Tab.Navigator>
);

export default MainNavigator;
