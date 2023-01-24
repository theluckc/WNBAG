import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GameScreen from "../screens/GameScreen/GameScreen";
import FavoriteStackScreens from "./FavoriteStackScreens";

const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Jogos"
        component={GameScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="basketball-hoop-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={FavoriteStackScreens}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="star-outline"
              size={28}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabScreens;
