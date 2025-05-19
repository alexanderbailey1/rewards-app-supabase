'use client'
// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { TamaguiProvider } from 'tamagui'
import { config } from '../../tamagui.config'
import { YStack } from 'tamagui'

export default function TabsLayout() {
  return (
    <TamaguiProvider config={config}>
      <YStack flex={1}>
        <Tabs
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName: any

              if (route.name === 'home') {
                iconName = 'home-outline'
              } else if (route.name === 'redeem') {
                iconName = 'gift-outline'
              } else if (route.name === 'profile') {
                iconName = 'person-outline'
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: '#A020F0',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: '#2D033B',
              borderTopColor: 'transparent',
            },
            headerShown: false,
          })}
        />
      </YStack>
    </TamaguiProvider>
  )
}
