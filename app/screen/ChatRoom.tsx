import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function chatRoom() {
  const [chatArray, setChatArray] = useState<string[]>([]);
  const [chat, setChat] = useState<string>("");
  const router = useRouter();
  const image = 'https://i.pravatar.cc/150?img=12';
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
    >
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

      <View>
        {chatArray.map((item, index) => {
          return (
            <>
              <View key={index}>
                <Text>
                  {item}
                </Text>
              </View>
            </>
          )
        })}
      </View>


      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={{ justifyContent: 'flex-end', flexDirection: 'column', margin: 16, padding: 10, paddingVertical: 0, borderWidth: 1, borderColor: '#666', borderRadius: 25, backgroundColor: '#eee', }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity>
                <Entypo name="camera" size={20} color="black" />
              </TouchableOpacity>
              <TextInput
                placeholder='enter your Message'
                multiline
                value={chat}
                onChangeText={setChat}
                style={{ marginLeft: 10 }}

              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <MaterialIcons name="keyboard-voice" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <FontAwesome name="photo" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <AntDesign name="plus-circle" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 10 }}
                onPress={() => {

                  setChatArray([...chatArray, chat])
                  console.log(chatArray);
                }}>
                <Feather name="send" size={20} color="black" />
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </View>
    </KeyboardAvoidingView>
  )

}