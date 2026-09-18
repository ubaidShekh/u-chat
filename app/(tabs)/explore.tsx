import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FlatList, StyleSheet, Text, View } from 'react-native';


export default function TabTwoScreen() {

 const profileData:profileDataTypes[] = [
  {
    id:1,
    profileImage:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    totalPost:54,
    followers:834,
    following:162,
    name:'jacob West',
    bio:'Digital goodies designer @pixsellz Everything is designed',
    hightlight:[
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
      ,'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470'


    ],
    posts:[
      'https://images.unsplash.com/photo-1519681393784-d120267933ba',
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e',
      'https://images.unsplash.com/photo-1500534623283-312aade485b7',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b',

    ]


  }
 ]
 interface profileDataTypes{
  id:number,
  profileImage:string,
  totalPost:number,
  followers:number,
  following:number,
  name:string,
  bio:string,
  hightlight:string[],
  posts:string[]

 }



  return (
   <>
   <View style={{padding:16,paddingTop:60}}>
  <View style={{flexDirection:'row',justifyContent:'space-between',}}>
     <Text style={{fontWeight:'100',fontSize:1}}>blank</Text>
   <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
     <FontAwesome name="lock" size={16} color="black" style={{marginRight:5}} />
     <Text style={{fontWeight:'600'}}>Jacob_w</Text>
    <AntDesign name="down" size={16} color="black" />

   </View>
   <AntDesign name="menu" size={24} style={{fontWeight:'600'}} />
  </View>

  <FlatList
  data={profileData}

 renderItem={({item})=>(
  <>
  <View>
    <Text>hdello from ubaid</Text>
  </View>
  </>
 )}
  />
   </View>
   </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
