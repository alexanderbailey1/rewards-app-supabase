// app/_layout.tsx
import { Slot } from 'expo-router'
import { TamaguiProvider, Theme } from 'tamagui'
import { config } from '../tamagui.config'
import { YStack, Text } from 'tamagui'

export default function Layout() {
  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <YStack flex={1}>
          {/* If you want a welcome message, wrap it in Text */}
          {/* <Text>Welcome to Rewards App</Text> */}
          <Slot />
        </YStack>
      </Theme>
    </TamaguiProvider>
  )
}

