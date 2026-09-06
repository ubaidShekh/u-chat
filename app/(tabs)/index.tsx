import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
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

  //stories
<FlatList 
data={stories}
keyExtractor={(item) => item.id}
horizontal
showsHorizontalScrollIndicator={false}
bounces={false}
style={{ height: 120 }}

renderItem={({item}) => (
<>
<View style={{padding:10,position: 'relative'}}>
  <Image source={{ uri: item.image }} style={{ width: 70, height: 70, borderRadius: 35,  borderWidth: item.hasStory ? 2 : 0, borderColor: item.hasStory ? '#ff8501' : 'transparent',}} />
  {item.isLive && (
    <View style={{  backgroundColor: '#a83b3b', borderRadius: 4, paddingHorizontal: 5, paddingVertical: 2, marginTop:-10,position: 'absolute', right: 30, top: 75, }}>
      <Text style={{ color: '#fff', fontSize: 10 }}>Live</Text>
    </View>
  )}
  <Text style={{ fontSize: 12, marginTop: 10 }}>{item.username}</Text>
 
</View>
 

</>

)}
/>
<View style={{height: 0.5,backgroundColor:'#bbb',marginBottom:585}}/>


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
