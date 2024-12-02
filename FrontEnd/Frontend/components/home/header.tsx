import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
        <View>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.userName}>Laurence</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "row",
        padding: 16,
    },
    welcomeText: {
        fontFamily: "Poppins-Medium",
        fontSize: 14,
        color: "#7B7B8B",
    },
    userName: {
        fontSize: 24,
        fontFamily: "Poppins-SemiBold",
        color: "#705C53",
    },
});
