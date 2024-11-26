import React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";


export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    drawerPosition: "right",
                    headerLeft: () => null,
                    headerRight: () => (
                        <View style={{ transform: [{ scaleX: -1 }] }}>
                            <DrawerToggleButton />
                        </View>
                    ),
                }}
            >
                <Drawer.Screen
                    name="index"
                    options={{
                        drawerLabel: "Home",
                        title: "Home",
                    }}
                />
                <Drawer.Screen
                    name="explore"
                    options={{
                        drawerLabel: "Explore",
                        title: "Explore",
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}