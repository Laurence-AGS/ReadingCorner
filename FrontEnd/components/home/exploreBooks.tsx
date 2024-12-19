import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function ExploreBooks({books}:any) {
    const router = useRouter();

    return (
        <>
            <Text style={styles.exploreTitle}>Explore Books</Text>
                <View style={styles.booksContainer}>
                    {books.map((book:any) => (
                        <TouchableOpacity
                            key={book.id}
                            style={styles.bookItem}
                            onPress={() => router.push({ pathname: "./book", params: { book: JSON.stringify(book) } })}>
                            <Image source={book.image} style={styles.bookImage} resizeMode="cover" />
                            <Text style={styles.bookTitle}>{book.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
        </>
    );
}

const styles = StyleSheet.create({
    booksContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 16,
    },
    bookItem: {
        width: "48%",
        marginBottom: 16,
        alignItems: "center",
    },
    bookImage: {
        width: "100%",
        height: 250,
        borderRadius: 8,
    },
    bookTitle: {
        marginTop: 8,
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: "#705C53",
        textAlign: "center",
    },
    exploreTitle: {
        fontSize: 25,
        fontFamily: "Poppins-SemiBold",
        color: "#705C53",
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 16,
    },
});
