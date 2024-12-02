import { useState } from "react";
import { Alert, TextInput, Pressable, Image, View, Text, ScrollView, SafeAreaView, StyleSheet, AppState } from "react-native";
import { Link, useRouter } from "expo-router";
import OtherProviders from "@/components/OtherProviders";
import { supabase } from "@/lib/supabase";

AppState.addEventListener("change", (state) => {
    if (state === "active") {
        supabase.auth.startAutoRefresh();
    } else {
        supabase.auth.stopAutoRefresh();
    }
});

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
        setLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) Alert.alert(error.message);
        else if (data.user) router.replace("/(root)");
        setLoading(false);
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require("@/assets/images/logo.png")} />
                <Text style={styles.title}>Log in to your account</Text>

                <OtherProviders />

                <View style={styles.dividerContainer}>
                    <View style={styles.divider}></View>
                    <Text style={styles.dividerText}> OR </Text>
                    <View style={styles.divider}></View>
                </View>

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

                    <View style={styles.rememberContainer}>
                        <View style={styles.rememberCheckbox}></View>
                        <Text style={styles.rememberText}>Remember for 30 days</Text>
                    </View>

                    <Pressable style={[styles.button, loading && styles.buttonDisabled]} disabled={loading} onPress={() => signInWithEmail()}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account? </Text>
                <Link push href="./sign-up" style={styles.footerLink}>
                    Sign Up
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
    },
    input: {
        backgroundColor: "#FFF",
        borderColor: "#D0D5DD",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        padding: 16,
        fontSize: 16,
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
        borderColor: "#D0D5DD",
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 8,
    },
    rememberText: {
        color: "#344054",
        fontSize: 14,
        fontWeight: "500",
    },
    button: {
        alignItems: "center",
        borderRadius: 8,
        padding: 16,
        backgroundColor: "#eddfe0",
    },
    buttonDisabled: {
        backgroundColor: "#ccc",
    },
    buttonText: {
        color: "#fff",
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
    },
    footerLink: {
        fontSize: 18,
        fontWeight: "600",
    },
});
