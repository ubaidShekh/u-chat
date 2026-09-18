import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function TabTwoScreen() {

 const profileData:profileDataTypes[] = [
  {
    id:1,
    profileImage:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    totalPost:54,
    followers:834,
    following:162,
    name:'jacob West',
    bio:'Digital goodies designer @pixsellz Everything is designed.',
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
    <FlatList
    data={profileData}
    keyExtractor={(item)=>item.id.toString()}
    renderItem={({item})=>(
      <>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
      <View style={{padding:2,width:89.5,borderRadius:44.7,backgroundColor:'#ccc',}}>
         <View style={{padding:2,width:86,borderRadius:43,backgroundColor:'#fff',}}>
        <Image source={{uri:item.profileImage}} style={{height:80,width:80,borderRadius:40,alignItems:'center',alignContent:'center'}}/>
       </View>
      </View>

      <View style={{alignItems:'center'}}>
        <Text style={{fontWeight:'800'}}>
          {item.totalPost}
        </Text>
        <Text style={{fontSize:12,}}>Posts</Text>
      </View>


       <View style={{alignItems:'center'}}>
        <Text style={{fontWeight:'800'}}>
          {item.followers}
        </Text>
        <Text style={{fontSize:12,}}>Followers</Text>
      </View>

       <View style={{alignItems:'center',marginRight:30}}>
        <Text style={{fontWeight:'800'}}>
          {item.following}
        </Text>
        <Text style={{fontSize:12,}}>Following</Text>
      </View>
      </View>
      <View style={{width:'60%',marginTop:5}}>
        <Text style={{fontSize:12,fontWeight:'700'}}>{item.name}</Text>
        <Text style={{fontWeight:'400',fontSize:12}}>{item.bio}</Text>
        
      </View>

      <TouchableOpacity style={{borderWidth:1,borderColor:'#bbb',padding:5,alignItems:'center',marginTop:20,borderRadius:4,}} activeOpacity={0.9}>
        <Text style={{fontSize:12,fontWeight:'700'}}>Edite Profile</Text>
      </TouchableOpacity>
      </>
    )}
    />
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
