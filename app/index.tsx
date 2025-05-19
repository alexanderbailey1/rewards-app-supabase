// app/index.tsx

import { Stack, YStack, Text, Button } from 'tamagui'
import { MotiView, MotiText } from 'moti'
import { Link } from 'expo-router'
import React from 'react';

export default function HomeScreen() {
  return (
    <Stack
      flex={1}
      alignItems="center"
      justifyContent="center"
      padding="$6"
      backgroundColor="#7e22ce"
    >
      <MotiView
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 1500 }}
      >
        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1000, duration: 2000 }}
          style={{ fontSize: 28, fontWeight: 'bold', color: 'white', textAlign: 'center' }}
        >
          <Text>🌟 Unlock Rewards Like Magic 🌟</Text>
        </MotiText>
      </MotiView>

      <YStack space="$4" width="100%" marginTop="$6">
        <Link href="/sign-in" asChild>
          <Button
            backgroundColor="white"
            color="$purple9"
            pressStyle={{ backgroundColor: '$purple5' }}
            borderRadius="$8"
            size="$5"
          >
            <Text>Sign In</Text>
          </Button>
        </Link>

        <Link href="/sign-up" asChild>
          <Button
            backgroundColor="$purple9"
            color="white"
            pressStyle={{ backgroundColor: '$purple10' }}
            borderRadius="$8"
            size="$5"
          >
            <Text>Sign Up</Text>
          </Button>
        </Link>
      </YStack>
    </Stack>
  )
}
