import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#EDDFE0]">
      <Link href="/profile" className='text-blue-800'>
      <StatusBar/>
      <Text className='text-3xl text-[#705C53]'>Go to profile</Text>
      </Link>
      </SafeAreaView>
  );
}
