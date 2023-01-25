import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteTeamScreen from "../screens/FavoriteTeamScreen/FavoriteTeamScreen";
import TeamScreen from "../screens/TeamsScreen/TeamScreen";

const Stack = createNativeStackNavigator();

const FavoriteStackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorito" component={FavoriteTeamScreen} />
      <Stack.Screen name="TeamScreen" component={TeamScreen} />
    </Stack.Navigator>
  );
};

export default FavoriteStackScreens;
