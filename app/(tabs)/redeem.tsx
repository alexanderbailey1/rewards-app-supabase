// app/(tabs)/redeem.tsx
import React, { useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { supabase } from '../../lib/supabaseClient';
import { YStack, Button, Spinner, XStack } from 'tamagui';

export default function RedeemScreen() {
  const [points, setPoints] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserPoints() {
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
        .select('points')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching points:', error.message);
      } else {
        setPoints(data?.points ?? 0);
      }

      setLoading(false);
    }

    fetchUserPoints();
  }, []);

  if (loading) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="#7e22ce">
        <Spinner size="large" color="white" />
      </YStack>
    );
  }

  const deals = [
    { id: 1, title: '💜 Free Joint', cost: 100 },
    { id: 2, title: '☕ Free Coffee', cost: 200 },
    { id: 3, title: '🎟️ 5% Off Coupon', cost: 300 },
    { id: 4, title: '🎁 Mystery Box', cost: 500 },
    { id: 5, title: '🌟 VIP Membership (1 Week)', cost: 1000 },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#7e22ce', paddingHorizontal: 16 }}>
      <YStack marginTop={32} alignItems="center">
        <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold', marginBottom: 16 }}>
          Points: {points}
        </Text>

        <YStack space="$4" width="100%" marginTop={16}>
          {deals.map((deal) => (
            <Button
              key={deal.id}
              backgroundColor="white"
              borderRadius="$4"
              paddingVertical="$1"
              onPress={() => alert(`You clicked on ${deal.title}!`)}
            >
              <XStack justifyContent="space-between" alignItems="center" width="100%">
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{deal.title}</Text>
                <Text style={{ color: '#7e22ce', fontWeight: 'bold' }}>{deal.cost} pts</Text>
              </XStack>
            </Button>
          ))}
        </YStack>
      </YStack>
    </ScrollView>
  );
}
