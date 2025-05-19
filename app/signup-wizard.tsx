'use client'
// app/signup-wizard.tsx
import { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'expo-router'

export default function SignupWizard() {
  const router = useRouter()

  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [favoriteStrain, setFavoriteStrain] = useState('')
  const [loading, setLoading] = useState(false)

  const questions = [
    {
      question: "What's your name?",
      value: name,
      setter: setName,
    },
    {
      question: "What's your address?",
      value: address,
      setter: setAddress,
    },
    {
      question: "What's your favorite strain?",
      value: favoriteStrain,
      setter: setFavoriteStrain,
    },
  ]

  const handleNext = async () => {
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setLoading(true)
      const user = (await supabase.auth.getUser()).data.user
      if (!user) {
        alert('No user found.')
        setLoading(false)
        return
      }

      const { error } = await supabase
        .from('profiles')
        .insert([
          {
            id: user.id,
            email: user.email,
            name,
            address,
            favorite_strain: favoriteStrain,
            points: 0,
          },
        ])

      setLoading(false)

      if (error) {
        console.error(error)
        alert('Error saving profile.')
      } else {
        router.replace('/(tabs)/home')
      }
    }
  }

  const handleSkip = () => {
    questions[step].setter('') // set current field to empty string
    handleNext()
  }

  const { question, value, setter } = questions[step]

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>{question}</Text>

      <TextInput
        value={value}
        onChangeText={setter}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 8,
          marginBottom: 20,
        }}
        placeholder="Type your answer..."
      />

      <Button title={step === questions.length - 1 ? 'Finish' : 'Next'} onPress={handleNext} disabled={loading} />

      <View style={{ height: 10 }} />

      <Button title="Skip" onPress={handleSkip} disabled={loading} color="gray" />
    </View>
  )
}
