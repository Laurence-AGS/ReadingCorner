import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#F5F5F7]">
      <Link href="/profile">
      <StatusBar/>
      <Text className='text-3xl text-[#705C53] font-pbold'>Go to profile</Text>
      </Link>
      </SafeAreaView>
  );
}
