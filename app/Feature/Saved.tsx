import { Feather } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Saved() {
  const router = useRouter();

  const filterButtons: string[] = ["All", "Collections", "Series", "Reels", "Posts", "Audio",]

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, paddingTop: 50, }}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => { router.back() }}><Feather name="arrow-left" size={24} color="black" /></TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontWeight: '600', letterSpacing: 0.2, marginLeft: 16 }}>Saved</Text>

        </View>
      </View>
      <View style={{ height: 1, backgroundColor: '#ddd', }} />
    </>
  )
}