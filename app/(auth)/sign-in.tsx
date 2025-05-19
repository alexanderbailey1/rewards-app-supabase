// app/sign-in.tsx
import React, { useState } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import { YStack, Button } from 'tamagui';
import { supabase } from '../../lib/supabaseClient';
import { router } from 'expo-router';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Sign in error:', error.message);
      alert(error.message);
    } else {
      router.replace('/(tabs)/home');
    }
  }

  function goToSignUp() {
    router.replace('/sign-up');
  }

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="#7e22ce" padding={24} space>
      <Text style={{ color: 'white', fontSize: 32, fontWeight: 'bold', marginBottom: 32 }}>
        Welcome Back!
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          width: '100%',
          backgroundColor: 'white',
          padding: 16,
          marginBottom: 16,
          borderRadius: 8,
          color: 'black',
        }}
        placeholderTextColor="#999"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          width: '100%',
          backgroundColor: 'white',
          padding: 16,
          marginBottom: 24,
          borderRadius: 8,
          color: 'black',
        }}
        placeholderTextColor="#999"
      />

      <Button
        backgroundColor="white"
        width="100%"
        paddingVertical={1}
        borderRadius={8}
        onPress={handleSignIn}
      >
        <Text style={{ color: '#7e22ce', fontWeight: 'bold', fontSize: 18 }}>
          Sign In
        </Text>
      </Button>

      <Pressable onPress={goToSignUp} style={{ marginTop: 24 }}>
        <Text style={{ color: 'white', textDecorationLine: 'underline' }}>
          Don't have an account? Sign up here!
        </Text>
      </Pressable>
    </YStack>
  );
}
