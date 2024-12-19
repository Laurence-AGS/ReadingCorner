import React, { useState } from "react";
import { Text, StyleSheet, TextInput, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { books } from "@/constants/mockdata";
import { trendingBooks } from "@/constants/mockdata";
import Trending from "@/components/Trending";
import Header from "@/components/home/header";
import ExploreBooks from "@/components/home/exploreBooks";

export default function HomeScreen() {
    const [searchMode, setSearchMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const handelSearch = (query: string) => {
        setSearchQuery(query);
        query.length > 0 ? setSearchMode(true) : setSearchMode(false);
    };
    const filteredBooks = books.filter(
        (book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <ScrollView>
                <Header />
                <TextInput
                    style={styles.searchInput}
                    placeholderTextColor={"#705C53"}
                    placeholder="👀 Look for books, authors...."
                    value={searchQuery}
                    onChangeText={(text) => {
                        handelSearch(text);
                    }}
                />
                {!searchMode && <Trending books={trendingBooks} />}
                {filteredBooks.length > 0 ? <ExploreBooks books={filteredBooks} /> : <Text style={styles.notFoundText}>No books are found</Text>}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F7",
    },
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
    searchInput: {
        color: "#705C53",
        backgroundColor: "#B7B7B7",
        borderColor: "#705C53",
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        margin: 16,
        fontSize: 16,
    },
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
    notFoundText: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: "#705C53",
        textAlign: "center",
        marginTop: 16,
    },
});
