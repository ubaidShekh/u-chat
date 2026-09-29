import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Stack, useRouter } from 'expo-router';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Message() {
  const router = useRouter();
  const messages: messageType[] = [
    {
      id: '1',
      username: 'joshua_l',
      profileImage: 'https://i.pravatar.cc/150?img=12',
      message: 'Have a nice day, bro!',
      time: 'now',
    },
    {
      id: '2',
      username: 'karenne',
      profileImage: 'https://i.pravatar.cc/150?img=47',
      message: 'I heard this is a good movie, s...',
      time: 'now',
    },
    {
      id: '3',
      username: 'martini_rond',
      profileImage: 'https://i.pravatar.cc/150?img=11',
      message: 'See you on the next meeting!',
      time: '15m',
    },
    {
      id: '4',
      username: 'andrewww_',
      profileImage: 'https://i.pravatar.cc/150?img=13',
      message: 'Sounds good 😂😂😂',
      time: '20m',
    },
    {
      id: '5',
      username: 'kieron_d',
      profileImage: 'https://i.pravatar.cc/150?img=14',
      message: 'The new design looks cool, b...',
      time: '1m',
    },
    {
      id: '6',
      username: 'maxjacobson',
      profileImage: 'https://i.pravatar.cc/150?img=15',
      message: 'Thank you, bro!',
      time: '2h',
    },
    {
      id: '7',
      username: 'jamie.franco',
      profileImage: 'https://i.pravatar.cc/150?img=16',
      message: "Yeah, I'm going to travel in To...",
      time: '4h',
    },
    {
      id: '8',
      username: 'm_humphrey',
      profileImage: 'https://i.pravatar.cc/150?img=17',
      message: 'Instagram UI is pretty good',
      time: '5h',
    },
    {
      id: '9',
      username: 'alex_morgan',
      profileImage: 'https://i.pravatar.cc/150?img=18',
      message: 'Are you free tonight?',
      time: '6h',
    },
    {
      id: '10',
      username: 'sophia_lee',
      profileImage: 'https://i.pravatar.cc/150?img=19',
      message: 'Let me know when you arrive.',
      time: '8h',
    },
  ];

  interface messageType {
    id: string,
    username: string,
    profileImage: string,
    message: string,
    time: string,
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, paddingTop: 50, }}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => { router.back() }}><Feather name="arrow-left" size={24} color="black" /></TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>jackkob_w</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
        <AntDesign name="plus" size={24} color="black" />

      </View>
      <View style={{ height: 1, backgroundColor: '#ddd', }} />

      <TextInput placeholder='Search' placeholderTextColor={'#666'} style={{ fontWeight: '500', letterSpacing: 0.2, padding: 10, borderWidth: 0.5, borderColor: '#666', margin: 16, borderRadius: 4, backgroundColor: '#eee' }} />

      // message
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <View>
              <Image source={{ uri: item.profileImage }} style={{ height: 100, width: 100, borderRadius: 50 }} />
              <Text>{item.username}</Text>
              <Text>{item.message}</Text>
              <Text>{item.time}</Text>
            </View>
          </>
        )}
      />
    </>
  );
}