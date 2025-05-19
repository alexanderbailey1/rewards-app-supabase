// app/(tabs)/home.tsx
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { supabase } from '../../lib/supabaseClient';
import { YStack, Spinner } from 'tamagui';

export default function HomeScreen() {
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserProfile() {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error('Failed to get user:', userError);
        return;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('name')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error.message);
      } else {
        setUserName(data?.name ?? 'Friend');
      }

      setLoading(false);
    }

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="#7e22ce">
        <Spinner size="large" color="white" />
      </YStack>
    );
  }

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="#7e22ce" padding={24} space>
      <Text style={{ color: 'white', fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
        Hey {userName}! 👋
      </Text>
      <Text style={{ color: 'white', fontSize: 18, marginTop: 12, textAlign: 'center' }}>
        Welcome to your rewards dashboard!
      </Text>
    </YStack>
  );
}
