
import { SafeAreaView, } from 'react-native-safe-area-context';
import { Text, View, Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import images from '@/constants/images';
import SearchInput from '@/components/ui/SearchInput';

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-1'>
          <Image source={images.logoSmall} resizeMode='contain' className='w-[40px] h-[45px]'/>
          <SearchInput/>
        </View>
      </ScrollView>

      {/* <Text className='text-3xl text-[#705C53]'>{query}</Text> */}
    </SafeAreaView>
  );
}
