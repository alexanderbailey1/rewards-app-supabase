'use client'
// app/(tabs)/profile.tsx
import { useEffect, useState } from 'react'
import { Text, YStack, Button, Spinner } from 'tamagui'
import { supabase } from '../../lib/supabaseClient'
import type { Profile } from '../../lib/types'
import { useRouter } from 'expo-router'

export default function ProfileScreen() {
  const router = useRouter()
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const user = (await supabase.auth.getUser()).data.user
      if (!user) {
        router.replace('/')
        return
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (error) {
        console.error(error)
      } else {
        setProfile(data as Profile)
      }
    }

    fetchProfile()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.replace('/')
  }

  if (!profile) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="#2D033B" padding="$4">
        <Spinner size="large" color="white" />
        <Text color="white" fontSize="$5" marginTop="$4">Loading profile...</Text>
      </YStack>
    )
  }

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="#2D033B" padding="$6" gap="$4">
      <YStack backgroundColor="#3D1766" borderRadius="$6" padding="$6" gap="$4" width="90%" maxWidth={400}>

        <Text fontSize="$8" fontWeight="700" color="white" textAlign="center" marginBottom="$4">
          Profile
        </Text>

        <Text color="white" fontSize="$5">Name: {profile.name || 'Not set'}</Text>
        <Text color="white" fontSize="$5">Address: {profile.address || 'Not set'}</Text>
        <Text color="white" fontSize="$5">Favorite Strain: {profile.favorite_strain || 'Not set'}</Text>
        <Text color="white" fontSize="$5">Points: {profile.points ?? 0}</Text>

        <Button 
          onPress={handleLogout} 
          backgroundColor="#810CA8" 
          marginTop="$4" 
          borderRadius="$4"
          pressStyle={{ backgroundColor: '#5D0E9D' }}
        >
          Log Out
        </Button>
      </YStack>
    </YStack>
  )
}
