import { AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { theme } from '../constants';
import { CoursesScreen, HomeScreen, ProjectScreen } from '../screens';

const Tab = createBottomTabNavigator();

const { getFont, size } = theme;

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, size, color }) => {
    let iconName;
    let Icon = FontAwesome5;
    if (route.name === 'Home') {
      Icon = focused ? FontAwesome5 : AntDesign;
      iconName = 'home';
    }
    if (route.name === 'Courses') {
      Icon = focused ? FontAwesome5 : Ionicons;
      iconName = focused ? 'jedi' : 'ios-albums';
    }

    if (route.name === 'Project') {
      Icon = FontAwesome;
      iconName = focused ? 'folder-open' : 'folder-o';
    }
    return <Icon name={iconName} color={color} size={size} />;
  },
});

const MainNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    {...{ screenOptions }}
    tabBarOptions={{
      labelStyle: {
        fontFamily: getFont(2),
        fontSize: size.s1,
      },
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Courses" component={CoursesScreen} />
    <Tab.Screen name="Project" component={ProjectScreen} />
  </Tab.Navigator>
);

export default MainNavigator;
