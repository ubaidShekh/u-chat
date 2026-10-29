import { Feather } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';


export default function Saved() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const filterButtons: string[] = ["All", "Collections", "Series", "Reels", "Posts", "Audio",]
  const collections: collectionType[] = [
    {
      id: "1",
      name: "Audio",
      coverImage: "https://i.pravatar.cc/150?img=12",
      privacy: "private",
      owner: null,
    },
    {
      id: "2",
      name: "Mohammad ubaid",
      coverImage: "https://i.pravatar.cc/150?img=47",
      privacy: "public",
      owner: "ubaid",
    },
    {
      id: "3",
      name: "A",
      coverImage: "https://i.pravatar.cc/150?img=11",
      privacy: "public",
      owner: "ubaid",
    },
  ];

  const posts: postType[] = [
    {
      id: "1",
      type: "reel",
      thumbnail: "https://i.pravatar.cc/150?img=13",
      caption: "Life by the river",
      isPinned: false,
    },
    {
      id: "2",
      type: "reel",
      thumbnail: "https://i.pravatar.cc/150?img=33",
      caption: "Traditional outfit",
      isPinned: false,
    },
    {
      id: "3",
      type: "reel",
      thumbnail: "https://i.pravatar.cc/150?img=44",
      caption: "Reel with family moments",
      isPinned: false,
    },
    {
      id: "4",
      type: "reel",
      thumbnail: "https://i.pravatar.cc/150?img=44",
      caption: "Beautiful moments",
      isPinned: false,
    },
    {
      id: "5",
      type: "post",
      thumbnail: "https://i.pravatar.cc/150?img=52",
      caption: "Humse chalaki na karein, aap jeet jaayenge",
      isPinned: false,
    },
    {
      id: "6",
      type: "reel",
      thumbnail: "https://i.pravatar.cc/150?img=56",
      caption: "Galti se apni best friend ko I love you bol diya",
      isPinned: false,
    },
    {
      id: "7",
      type: "reel",
      thumbnail: "https://example.com/post-7.jpg",
      caption: "Ya Khwaja, raahat mein karna hota hai",
      isPinned: false,
    },
    {
      id: "8",
      type: "reel",
      thumbnail: "https://example.com/post-8.jpg",
      caption: "That one girl",
      isPinned: false,
    },
    {
      id: "9",
      type: "post",
      thumbnail: "https://example.com/post-9.jpg",
      caption: "Islamic quotes",
      isPinned: false,
    },
  ];

  interface collectionType {
    id: string,
    name: string,
    coverImage: string,
    privacy: "public" | "private",
    owner: string | null
  }

  interface postType {
    id: string,
    type: "post" | "reel",
    thumbnail: string,
    caption: string,
    isPinned: boolean
  }

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

      <ScrollView horizontal={true} alwaysBounceHorizontal={false} style={{ padding: 10, height: 40 }}
        showsHorizontalScrollIndicator={false}
      >
        {
          filterButtons.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={{ padding: 6, paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'center', height: 30, borderWidth: 1, borderColor: '#ddd', borderRadius: 20, margin: 5, alignItems: 'center', backgroundColor: '#eee' }}

                activeOpacity={0.9}
              >

                <Text style={{ fontWeight: '600', letterSpacing: 0.2, color: '#000', marginLeft: 12, fontSize: 12 }}>{item}</Text>

              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
      <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: '500' }}>Collections</Text>
        <Text style={{ fontWeight: '500', color: "#5d76f7" }}>See all</Text>
      </View>

      <FlatList
        data={posts}
        numColumns={3}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => {
          return (
            <>
              <Image source={{ uri: item?.thumbnail }} style={{ height: 150, width: width / 3 }} />

            </>
          )
        }}
        ListEmptyComponent={() => {
          return (
            <>
              <ActivityIndicator size={'small'} />
            </>
          )
        }}
      />


    </>
  )
}