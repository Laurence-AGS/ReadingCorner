import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import { Image, View } from 'react-native';
import { images } from '../../constants';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending';



export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-primary">
      <View className='justify-center items-start flex-row '>
        <View>
          <Text className='font-pmedium text-sm text-gray-200'>
            Welcome Back
          </Text>
          <Text className='text-2xl font-psemibold text-Dark'>
            Laurence
          </Text>
        </View>
      </View>
      <SearchInput/>
      <View className='w-full flex-1 pt-5 pd-8'>
        <Text className='text-gray-200 text-lg font-pregular mb-3 left-2'>
          Trending Books
        </Text>
        <View className='left-2 w-[46px] h-[46px] rounded-lg border border-secondary-100 justify-center items-center p-0.5'>
          <Image source={images.profile} className='w-full h-full rounded-lg' resizeMode='cover'/>
        </View>
      </View>
      {/* <Link href="/profile">
      <StatusBar/>
      <Text className='text-3xl text-[#705C53] font-pbold'>Go to profile</Text>
      </Link> */}
      </ScrollView>
  );
}
