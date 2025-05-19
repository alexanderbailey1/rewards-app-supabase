// app/(auth)/_layout.tsx
import { Slot } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'tamagui';

export const unstable_settings = {
  initialRouteName: '(auth)/welcome',
};

export default function AuthLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View flex={1} backgroundColor="$background">
        <Slot />
      </View>
    </SafeAreaView>
  );
}
