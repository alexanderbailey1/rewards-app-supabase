// app/(auth)/welcome.tsx
import React from 'react';
import { YStack, Text, Button, Theme } from 'tamagui'
import { useRouter } from 'expo-router'

export default function WelcomeScreen() {
  const router = useRouter()

  return (
    <Theme name="dark">
      <YStack flex={1} backgroundColor="$purple8" justifyContent="center" alignItems="center" padding="$4">
        <Text color="white" fontSize="$9" fontWeight="bold">
          Rewards Await
        </Text>

        <Text color="$gray6" fontSize="$5" textAlign="center">
          Claim exclusive offers, win big.
        </Text>

        <YStack width="100%" gap="$4">
          <Button
            backgroundColor="white"
            color="$purple8"
            onPress={() => router.push('/sign-in')}
            size="$5"
            borderRadius="$10"
          >
            <Text>Sign In</Text>
          </Button>

          <Button
            backgroundColor="transparent"
            borderColor="white"
            borderWidth={1}
            color="white"
            onPress={() => router.push('/sign-up')}
            size="$5"
            borderRadius="$10"
          >
            <Text>Sign Up</Text>
          </Button>
        </YStack>
      </YStack>
    </Theme>
  )
}
