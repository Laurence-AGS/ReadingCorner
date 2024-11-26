import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerToggleButton } from '@react-navigation/drawer';
import Home from "./index";
import Explore from "./explore";


const Drawer = createDrawerNavigator();

export default function Layout() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        headerLeft: () => null,
        headerRight: () => (
          <View style={{ transform: [{ scaleX: -1 }] }}>
            <DrawerToggleButton />
          </View>
        ),
      }}
    > 
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Explore" component={Explore} />
    </Drawer.Navigator>
  );
}