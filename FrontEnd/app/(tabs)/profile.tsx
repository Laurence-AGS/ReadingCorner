import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function Profile() {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-[#EDDFE0]'>
      <Text className='text-3xl text-[#705C53]'>Welcome to profile</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})