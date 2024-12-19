import { Pressable, Image, View, StyleSheet } from "react-native";

export default function OtherProviders() {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <Image style={styles.icon} source={require("../assets/images/Google-Icon.png")} />
            </Pressable>
            <Pressable style={styles.button}>
                <Image style={styles.icon} source={require("../assets/images/Apple-Icon.png")} />
            </Pressable>
            <Pressable style={styles.button}>
                <Image style={styles.icon} source={require("../assets/images/Facebook-Icon.png")} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
    },
    button: {
        width: "30%",
        borderWidth: 1,
        borderColor: "#D0D5DD",
        alignItems: "center",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
});
