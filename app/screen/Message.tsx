import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Stack } from 'expo-router';
import { Text, TextInput, View } from 'react-native';

export default function Message() {

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, paddingTop: 50, }}>
        <Feather name="arrow-left" size={24} color="black" />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>jackkob_w</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
        <AntDesign name="plus" size={24} color="black" />

      </View>
      <View style={{ height: 1, backgroundColor: '#ddd', }} />

      <TextInput placeholder='Search' placeholderTextColor={'#666'} style={{ fontWeight: '500', letterSpacing: 0.2, padding: 10, borderWidth: 0.5, borderColor: '#666', margin: 16, borderRadius: 4, backgroundColor: '#eee' }} />
    </>
  );
}