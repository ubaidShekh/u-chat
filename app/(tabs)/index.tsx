import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';




export default function HomeScreen() {
const  iconColor = '#666';
const stories = [
  {
    id: '1',
    username: 'Your Story',
    image: 'https://i.pravatar.cc/150?img=12',
    isYourStory: true,
    hasStory: true,
  },
  {
    id: '2',
    username: 'karenne',
    image: 'https://i.pravatar.cc/150?img=47',
    hasStory: true,
    isLive: true,
  },
  {
    id: '3',
    username: 'zackjohn',
    image: 'https://i.pravatar.cc/150?img=11',
    hasStory: true,
    isLive: true,
  },
  {
    id: '4',
    username: 'kieron_d',
    image: 'https://i.pravatar.cc/150?img=13',
    hasStory: true,
  },
  {
    id: '5',
    username: 'craig_',
    image: 'https://i.pravatar.cc/150?img=33',
    hasStory: true,
  },
  {
    id: '6',
    username: 'sophia',
    image: 'https://i.pravatar.cc/150?img=44',
    hasStory: true,
  },
  {
    id: '7',
    username: 'alex_01',
    image: 'https://i.pravatar.cc/150?img=52',
    hasStory: true,
  },
  {
    id: '8',
    username: 'john_doe',
    image: 'https://i.pravatar.cc/150?img=56',
    hasStory: true,
  },
];

const posts = [
  {
    id: '1',
    username: 'joshua_l',
    profileImage: 'https://i.pravatar.cc/150?img=12',
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
    likes: 44686,
    likedBy: 'craig_love',
    caption: 'The game in Japan was amazing and I want to share some photos',
  },

  {
    id: '2',
    username: 'karenne',
    profileImage: 'https://i.pravatar.cc/150?img=47',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e',
    likes: 28341,
    likedBy: 'zackjohn',
    caption: 'Beautiful places and unforgettable moments.',
  },

  {
    id: '3',
    username: 'zackjohn',
    profileImage: 'https://i.pravatar.cc/150?img=11',
    location: 'California, USA',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    likes: 15782,
    likedBy: 'joshua_l',
    caption: 'Nothing better than watching the sunset.',
  },
];


  return (
  <>
  <StatusBar style="auto" />

  //header
 <View style={styles.titleContainer}>
  
  <Feather name="camera" size={24} color={iconColor} />
  <Image source={require('@/assets/images/title.png')} style={{width: 110, height: 30, alignSelf: 'center'}}/>
  <View style={{flexDirection:'row',alignItems:'center',gap:20}}>
    <Feather name="heart" size={24} color={iconColor} style={{ position: 'absolute',right:50}} />
    <MaterialIcons name="send" size={24} color={iconColor} />
  </View>
 
 </View>
  <View style={{height:0.5,backgroundColor:'#ccc',}}/>



// posts
<FlatList
data={posts}
keyExtractor={(item) => item.id}
showsVerticalScrollIndicator={false}
bounces={false}
ListHeaderComponent={<>
  //stories
<FlatList 
data={stories}
keyExtractor={(item) => item.id}
horizontal
showsHorizontalScrollIndicator={false}
bounces={false}



renderItem={({item}) => (
<>
<View style={{padding:10,position: 'relative',}}>
  <Image source={{ uri: item.image }} style={{ width: 70, height: 70, borderRadius: 35,  borderWidth: item.hasStory ? 2 : 0, borderColor: item.hasStory ? '#ff8501' : 'transparent',}} />
  {item.isLive && (
    <View style={{  backgroundColor: '#a83b3b', borderRadius: 4, paddingHorizontal: 5, paddingVertical: 2, marginTop:-10,position: 'absolute', right: 30, top: 75, }}>
      <Text style={{ color: '#fff', fontSize: 10 }}>Live</Text>
    </View>
  )}
  <Text style={{ fontSize: 12, marginTop: 10 }}>{item.username}</Text>
  
  
</View>

 <View style={{height:1,backgroundColor:'#bbb',}}/>

</>

)}
/>

</>}
renderItem={({ item }) => (<>
<View>
<View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
  <View style={{flexDirection:'row',}}>
  <Image source={{uri:item.profileImage}} height={40} width={40} style={{borderRadius:20}}/>
<View style={{marginLeft:6}}>
  <Text style={{fontWeight:'600'}}>{item.username}</Text>
  <Text style={{fontSize:11}}>{item.location}</Text>

</View>

</View>
<AntDesign name="ellipsis" size={22} color="black" />

</View>

<View>
<Octicons name="heart" size={24} color="black" />
<AntDesign name="message" size={24} color="black" />
 <MaterialIcons name="send" size={24} color={iconColor} />
</View>


<Image source={{uri:item.image}} style={{height:400,width:'100%'}}/>
<Text>{item.caption}</Text>
<Text>{item.likes} likes</Text>
<Text>Liked by {item.likedBy}</Text></View>
</>)}
/>


 </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 52,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
