import { View, Text, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import {images} from '../../constants';


const Search = () => {
  const{query} = useLocalSearchParams();


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
      <View className='w-full justify-center h-full px-4 my-1'>
          <Image source={images.logoSmall} resizeMode='contain' className='w-[40px] h-[45px]'/>
          <Text className='font-pbold'>Reading Corner</Text>
        </View>
      </ScrollView>
      <Text className='text-3xl text-[#705C53]'>{query}</Text>
    </SafeAreaView>
  )
}

export default Search