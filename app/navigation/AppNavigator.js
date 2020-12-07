import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CoursesScreen, HomeScreen, ProjectScreen } from '../screens'

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator initialRouteName='Home' screenOptions={{
    headerShown: false,
  }}>
    <Tab.Screen name='Home' component={HomeScreen} />
    <Tab.Screen name='Courses' component={CoursesScreen} />
    <Tab.Screen name='Project' component={ProjectScreen} />
  </Tab.Navigator>
)

export default AppNavigator
