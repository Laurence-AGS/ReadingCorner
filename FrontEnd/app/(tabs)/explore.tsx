
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#EDDFE0]">
      <Text className='text-3xl text-[#705C53]'> Explore Expo</Text>
      </SafeAreaView>
  );
}
