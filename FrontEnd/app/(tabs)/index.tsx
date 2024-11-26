import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ThemedView>
      <Link href="/profile">
      <ThemedText style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to Expo</ThemedText>
      </Link>
      </ThemedView>
  );
}
