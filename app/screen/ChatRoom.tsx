import Feather from '@expo/vector-icons/Feather';
import { Stack, useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';


export default function chatRoom() {
  const router = useRouter();
  const image = 'https://i.pravatar.cc/150?img=12';
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, paddingTop: 50, }}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => { router.back() }}><Feather name="arrow-left" size={24} color="black" /></TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: image }} style={{ height: 40, width: 40, marginLeft: 30, borderRadius: 20 }} />
          <View style={{ marginLeft: 10 }}>
            <Text>jackkob_w</Text>
            <Text style={{ color: '#555', fontWeight: 400 }}>mohammad ubaid</Text>
          </View>
          {/* <MaterialIcons name="keyboard-arrow-down" size={24} color="black" /> */}
        </View>
        {/*<AntDesign name="plus" size={24} color="black" /> */}

      </View>

    </>
  )

}