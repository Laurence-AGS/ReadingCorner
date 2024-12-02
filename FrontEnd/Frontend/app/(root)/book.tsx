import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Pressable, Linking } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { books } from "@/constants/mockdata";
import { useState } from "react";

export default function BookDetails() {
    const { book } = useLocalSearchParams();
    const bookDetails = JSON.parse(Array.isArray(book) ? book[0] : book);
    const router = useRouter();
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [descriptionLines, setDescriptionLines] = useState(bookDetails.description.split('\n').slice(0, 5));
    const similarBooks = books.filter((b) => b.category === bookDetails.category && b.id !== bookDetails.id);
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
        setDescriptionLines(showFullDescription ? bookDetails.description : bookDetails.description.split('\n').slice(0, 5).join('\n'));
    };


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={bookDetails.image} style={styles.bookImage} resizeMode="cover" />
            <Text style={styles.bookTitle}>{bookDetails.title}</Text>
            <Text style={styles.bookDescription}>{descriptionLines}</Text>
            {bookDetails.description.split('\n').length > 5 && (
                <TouchableOpacity onPress={toggleDescription}>
                    <Text style={styles.readMoreText}>{showFullDescription ? "Read Less" : "Read More"}</Text>
                </TouchableOpacity>
            )}
            <View style={styles.detailsContainer}>
                <Text style={styles.bookDetails}>Language: <Text style={styles.bookSubDetails}>{bookDetails.language}</Text></Text>
                <Text style={styles.bookDetails}>Category: <Text style={styles.bookSubDetails}>{bookDetails.category}</Text></Text>
                <Text style={styles.bookDetails}>Author: <Text style={styles.bookSubDetails}>{bookDetails.author}</Text></Text>
                <Text style={styles.bookDetails}>publisher: <Text style={styles.bookSubDetails}>{bookDetails.publisher}</Text></Text>
                <Text style={styles.bookDetails}>publishing Number: <Text style={styles.bookSubDetails}>{bookDetails.publishingNumber}</Text></Text>
                <Text style={styles.bookDetails}>publishing Year: <Text style={styles.bookSubDetails}>{bookDetails.publishingYear}</Text></Text>
                <Text style={styles.bookDetails}>ISBN: <Text style={styles.bookSubDetails}>{bookDetails.ISBN}</Text></Text>
            </View>
            <View style={styles.actionButtons}>
                <Pressable
                    style={styles.previewButton}
                    onPress={() => {
                        Linking.openURL(bookDetails.url);
                    }}
                >
                    <Text style={styles.buttonText}>Preview PDF</Text>
                </Pressable>
                <Pressable
                    style={styles.cartButton}
                    onPress={() => {
                        Linking.openURL(bookDetails.url);
                    }}
                >
                    <Text style={styles.buttonText}>C</Text>
                </Pressable>
                </View>
                {
                    similarBooks.length > 0 && (
                        <View style={styles.similarBooksContainer}>
                <Text style={styles.similarBooksTitle}>Similar Books</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {similarBooks.map((similarBook) => (
                        <TouchableOpacity
                            key={similarBook.id}
                            style={styles.similarBookItem}
                            onPress={() => router.push({ pathname: "./book", params: { book: JSON.stringify(similarBook) } })}>
                            <Image source={similarBook.image} style={styles.similarBookImage} resizeMode="cover" />
                            <Text style={styles.similarBookTitle}>{similarBook.title}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>)
                }
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: "#F5F5F7",
        alignItems: "center",
    },
    bookImage: {
        width: "100%",
        height: 400,
        borderRadius: 8,
        marginBottom: 16,
    },
    bookTitle: {
        fontSize: 28,
        fontFamily: "Poppins-Bold",
        color: "#705C53",
        textAlign: "center",
        marginBottom: 8,
    },
    bookDescription: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: "#705C53",
        textAlign: "center",
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    detailsContainer: {
        width: "100%",
        paddingHorizontal: 16,
    },
    bookDetails: {
        fontSize: 15,
        fontFamily: "Poppins-SemiBold",
        color: "#705C53",
        textAlign: "left",
        marginBottom: 4,
        marginLeft:-20
    },
    bookSubDetails: {
        fontSize: 15,
        fontFamily: "Poppins-Regular",
        color: "#705C53",
        textAlign: "left",
        marginBottom: 4,
    },
    similarBooksContainer: {
        width: "100%",
        marginTop: 32,
    },
    similarBooksTitle: {
        fontSize: 20,
        fontFamily: "Poppins-SemiBold",
        color: "#705C53",
        marginBottom: 16,
    },
    similarBookItem: {
        marginRight: 16,
        alignItems: "center",
    },
    similarBookImage: {
        width: 100,
        height: 150,
        borderRadius: 8,
    },
    similarBookTitle: {
        marginTop: 8,
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: "#705C53",
        textAlign: "center",
    },
    actionButtons:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
        width: "100%",
    },
    previewButton: {
        backgroundColor: "#EDDFE0",
        padding: 5,
        borderRadius: 8,
        marginTop: 10,
        width: "80%",
    },
    cartButton: {
        backgroundColor: "#EDDFE0",
        padding: 5,
        borderRadius: 8,
        marginTop: 10,
        width: "15%",
    },
    readMoreText: {
        fontSize: 16,
        fontFamily: "Poppins-SemiBold",
        color: "#007BFF",
        textAlign: "center",
        marginBottom: 16,
    },
    buttonText:{
        fontSize: 20,
        fontFamily: "Poppins-Bold",
        color: "#7B7B8B",
        textAlign: "center",
        marginBottom: 8,
    }
});
