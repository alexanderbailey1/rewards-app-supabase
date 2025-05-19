// App.tsx (root)
import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TamaguiProvider } from 'tamagui'
import { config } from './tamagui.config'

export default function App() {
  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config}>
        <StatusBar style="light" />
        <Stack />
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}
