import React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";



export default function Layout() {
//     const [fontsLoaded, error] = useFonts({"Poppins": require("../assets/fonts/Poppins-Black.ttf"),
//         "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
//         "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
//         "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
//         "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
//         "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
//         "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
//         "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
//         "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
//         "RougeScript": require("../assets/fonts/RougeScript-Regular.ttf"),
// });
    return (
        <GestureHandlerRootView className="flex-1 color-[#705C53]">
            <Drawer 
                screenOptions={{
                    drawerPosition: "right",
                    headerStyle: { backgroundColor: "#EDDFE0" },
                    headerLeft: () => null,
                    headerRight: () => (
                        <View className="scale-x-[-1] bg-[#EDDFE0]">
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
    )}