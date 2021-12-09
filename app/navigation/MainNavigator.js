import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CoursesScreen, HomeScreen, ProjectScreen } from "../screens";

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ size, color }) => {
    let icon;
    if (route.name === "Home") icon = "home";

    if (route.name === "Courses") icon = "albums";

    if (route.name === "Project") icon = "folder";

    return <Ionicons name={icon} color={color} size={size} />;
  },
});

const MainNavigator = () => (
  <Tab.Navigator initialRouteName="Home" {...{ screenOptions }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Courses" component={CoursesScreen} />
    <Tab.Screen name="Project" component={ProjectScreen} />
  </Tab.Navigator>
);

export default MainNavigator;
