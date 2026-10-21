import { Stack } from 'expo-router';
import { Text } from 'react-native';

export default function Saved() {

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>This is saved pagess</Text>
    </>
  )
}