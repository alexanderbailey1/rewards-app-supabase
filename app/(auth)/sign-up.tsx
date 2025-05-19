import React, { useState } from 'react'
import { Stack, Text, Button, YStack } from 'tamagui'
import { TextInput } from 'react-native'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'expo-router'

export default function SignUpScreen() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignUp() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    setLoading(false)

    if (error) {
      alert(error.message)
    } else {
      router.push('/signup-wizard')
    }
  }

  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#6b21a8"
      padding={24}
      gap={16}
    >
      <Text fontSize={24} fontWeight="bold" color="white">
        Join Us!
      </Text>

      <Stack
        width="100%"
        borderRadius={8}
        backgroundColor="white"
        paddingHorizontal={12}
        paddingVertical={8}
      >
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{ color: 'black' }}
        />
      </Stack>

      <Stack
        width="100%"
        borderRadius={8}
        backgroundColor="white"
        paddingHorizontal={12}
        paddingVertical={8}
      >
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={{ color: 'black' }}
        />
      </Stack>

      <Button
        size="$4"
        width="100%"
        borderRadius={8}
        backgroundColor="white"
        onPress={handleSignUp}
        disabled={loading}
      >
        <Text color="#6b21a8">
          {loading ? 'Loading...' : 'Continue'}
        </Text>
      </Button>
    </YStack>
  )
}
