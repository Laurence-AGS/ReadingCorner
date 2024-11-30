import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";

import { icons } from "../constants";

interface SearchInputProps {
  initialQuery?: string;
}

const SearchInput = ({ initialQuery }: SearchInputProps) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="flex-row items-center space-x-4 w-full h-16 px-4 bg-secondary rounded-2xl border-2 border-Dark focus:border-secondary">
      <TextInput
        className="text-base mt-0.5 text-Dark flex-1 font-pregular bg-gray-100"
        value={query}
        placeholder="Search a book"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="w-5 h-5 color-Dark" resizeMode="contain"/>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;