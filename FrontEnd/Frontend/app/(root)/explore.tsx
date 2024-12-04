import { View, TextInput,SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '@/components/home/header'
import ExploreBooks from '@/components/home/exploreBooks'
import ExploreHeder from '@/components/home/ExploreHeder'

const explore = () => {
  return (
    <SafeAreaView>
        <ExploreHeder />
        <TextInput
            style={styles.searchInput}
            placeholderTextColor={"#705C53"}
            placeholder="👀 Look for books, authors...."
            // value={searchQuery}
            // onChangeText={setSearchQuery}
            />
    </SafeAreaView>
  )
}

export default explore

const styles = StyleSheet.create({
    searchInput: {
        color: "#705C53",
        backgroundColor: "#B7B7B7",
        borderColor:"#705C53",
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        margin: 16,
        fontSize: 16,
    },
})