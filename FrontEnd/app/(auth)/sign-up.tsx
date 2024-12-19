import { useState } from "react";
import { Alert, TextInput, Pressable, Image, View, Text, ScrollView, SafeAreaView, StyleSheet, AppState } from "react-native";
import { Link, useRouter } from "expo-router";
import { supabase } from "@/lib/supabase";

AppState.addEventListener("change", (state) => {
    if (state === "active") {
        supabase.auth.startAutoRefresh();
    } else {
        supabase.auth.stopAutoRefresh();
    }
});

export default function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [loading, setLoading] = useState(false);

    async function signUpWithEmail() {
        if (password !== passwordConfirmation) {
            Alert.alert("Passwords do not match");
            return;
        }

        setLoading(true);
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) Alert.alert(error.message);
        if (!session) router.replace("./sign-in");
        setLoading(false);
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require("@/assets/images/logo.png")} />
                <Text style={styles.title}>Create New Account</Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder="Enter your email"
                        placeholderTextColor={"#667085"}
                        autoCapitalize={"none"}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={true}
                        placeholder="••••••••"
                        placeholderTextColor={"#667085"}
                        autoCapitalize={"none"}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput
                        onChangeText={(text) => setPasswordConfirmation(text)}
                        value={passwordConfirmation}
                        secureTextEntry={true}
                        placeholder="••••••••"
                        placeholderTextColor={"#667085"}
                        autoCapitalize={"none"}
                        style={styles.input}
                    />

                    <Pressable style={[styles.button, loading && styles.buttonDisabled]} disabled={loading} onPress={signUpWithEmail}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account? </Text>
                <Link push href="./sign-in" style={styles.footerLink}>
                    Sign In
                </Link>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
    },
    header: {
        marginTop: 48,
    },
    logo: {
        width: 100,
        height: 72,
        marginTop: 40,
        alignSelf: "center",
        resizeMode: "contain",
    },
    title: {
        fontWeight: "600",
        fontSize: 24,
        alignSelf: "center",
        marginTop: 40,
        color: "#705C53",
    },
    dividerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    divider: {
        borderColor: "#E6E6E6",
        borderWidth: 1,
        width: 176,
    },
    dividerText: {
        color: "#475467",
    },
    form: {
        padding: 16,
    },
    label: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 4,
        color: "#705C53",
    },
    input: {
        backgroundColor: "#EDDFE0",
        borderColor: "#705C53",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        padding: 16,
        fontSize: 16,
        color: "#705C53",
    },
    rememberContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24,
        marginTop: 8,
    },
    rememberCheckbox: {
        width: 20,
        height: 20,
        borderColor: "#705C53",
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 8,
    },
    rememberText: {
        color: "#705C53",
        fontSize: 14,
        fontWeight: "500",
    },
    button: {
        alignItems: "center",
        borderRadius: 8,
        padding: 16,
        backgroundColor: "#EDDFE0",
    },
    buttonDisabled: {
        backgroundColor: "#eddfe0",
    },
    buttonText: {
        color: "#705C53",
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    footerText: {
        fontSize: 18,
        color: "#705C53",
    },
    footerLink: {
        fontSize: 18,
        fontWeight: "600",
        color: "#705C53",
    },
});
