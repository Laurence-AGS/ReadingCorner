import React, { useState } from "react";
import { FlatList, Image, TouchableOpacity, ViewToken, Text, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useRouter } from "expo-router";

const zoomIn: Animatable.CustomAnimation = {
    from: {
        transform: [{ scale: 0.85 }],
    },
    to: {
        transform: [{ scale: 1 }],
    },
};

const zoomOut: Animatable.CustomAnimation = {
    from: {
        transform: [{ scale: 1 }],
    },
    to: {
        transform: [{ scale: 0.85 }],
    },
};

const TrendingItem = ({ activeItem, item }: { activeItem: string; item: any }) => {
    const router = useRouter();
    return (
        <Animatable.View style={styles.trendingItem} animation={activeItem === item.id ? zoomIn : zoomOut} duration={500}>
            <TouchableOpacity
                style={styles.bookContainer}
                activeOpacity={0.7}
                onPress={() => router.push({ pathname: "./book", params: { book: JSON.stringify(item) } })}
            >
                <Image source={item.image} style={styles.bookImage} resizeMode="cover" />
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookAuthor}>{item.author}</Text>
            </TouchableOpacity>
        </Animatable.View>
    );
};

const Trending = ({ books }: { books: any[] }) => {
    const [activeItem, setActiveItem] = useState(books[1].id);

    const viewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
        if (viewableItems.length > 0) {
            setActiveItem(viewableItems[0].item.id);
        }
    };

    const getItemLayout = (data: any, index: number) => ({
        length: 220,
        offset: 180 * index,
        index,
    });

    const onScrollToIndexFailed = (info: { index: number; highestMeasuredFrameIndex: number; averageItemLength: number }) => {
        const wait = new Promise((resolve) => setTimeout(resolve, 500));
        wait.then(() => {
            flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
        });
    };

    const flatListRef = React.useRef<FlatList<any>>(null);

    return (
        <View style={styles.container}>
            <Text style={styles.containerTitle}>Trending Books</Text>
            <FlatList
                ref={flatListRef}
                data={books}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <TrendingItem activeItem={activeItem} item={item} />}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
                initialScrollIndex={1}
                getItemLayout={getItemLayout}
                onScrollToIndexFailed={onScrollToIndexFailed}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={<View style={{ width: 50 }} />}
                ListFooterComponent={<View style={{ width: 50 }} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        paddingHorizontal: 16,
    },
    containerTitle: {
        fontSize: 25,
        fontFamily: "Poppins-SemiBold",
        color: "#705C53",
        marginBottom: 16,
    },
    trendingItem: {
        marginRight: 20,
    },
    bookContainer: {
        alignItems: "center",
    },
    bookImage: {
        width: 200,
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
    bookAuthor: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: "#705C53",
        textAlign: "center",
    },
});

export default Trending;
