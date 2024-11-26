
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView>
      <ThemedText style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to Expo</ThemedText>
      </ThemedView>
  );
}
