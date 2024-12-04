import { Stack } from "expo-router";

export default function _layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="sign-in" />
            <Stack.Screen name="sign-up" />
        </Stack>
    );
}
