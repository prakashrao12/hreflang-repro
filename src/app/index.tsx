import type { Metadata } from 'expo-router/server';
import { Text, View } from 'react-native';

export function generateMetadata(): Metadata {
  return {
    title: 'Home',
    alternates: {
      canonical: 'https://example.com/',
      languages: { en: 'https://example.com/', ja: 'https://example.com/ja' },
    },
  };
}

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
