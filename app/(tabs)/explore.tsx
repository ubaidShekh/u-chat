import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';





export default function TabTwoScreen() {
  const [posttab,setPostTab] = useState<string>("av-icon-grid")
  const {width} = useWindowDimensions();

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


 const postTab = ["av-icon-grid","user-square"];
 
 
 interface PostType{
    id:string,
    image:string,
    multiple?:boolean
  }

const explorePosts:PostType[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e',
    multiple: true,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    multiple: true,
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    multiple: true,
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    multiple: true,
  },
  {
    id: '9',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
  },
  {
    id: '10',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
  },
  {
    id: '11',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e',
    multiple: true,
  },
  {
    id: '12',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2',
  },
  {
    id: '13',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
  },
  {
    id: '14',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    multiple: true,
  },
  {
    id: '15',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    multiple: true,
  },
  {
    id: '16',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
  },
  {
    id: '17',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  },
  {
    id: '18',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    multiple: true,
  },
  {
    id: '19',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
  },
  {
    id: '0',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
  },
];



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
      
     <ScrollView
  style={{ marginTop: 15 }}
  horizontal
  showsHorizontalScrollIndicator={false}
>
  {item.hightlight.map((Item, index) => (
    <View
      key={index}
      style={{
        height: 70,
        width: 70,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      }}
    >
      <Image
        source={{ uri: Item }}
        style={{
          height: 60,
          width: 60,
          borderRadius: 30,
        }}
      />
    </View>
  ))}
</ScrollView>
 
      
      </>
    )}
    />
  </View>
  </>
 )}
  />
   </View>
   <View style={{height:0.7,backgroundColor:"#ddd",width:'100%',marginBottom:10}}/>

  <View
  style={{
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  }}
>
  {postTab.map((item, index) => (
    <TouchableOpacity key={index} style={{width:'50%',justifyContent:'center',alignItems:'center'}} onPress={()=>{
      setPostTab(item);
    }}
    activeOpacity={0.9}
    >
      {index === 0 ? (
        <Feather name="grid" size={26} style={{color:item===posttab?"#222":"#999"}} />
      ) : (
        <MaterialCommunityIcons
          name="account-box-outline"
          size={26}
           style={{color:item===posttab?"#222":"#999"}}
        />
      )}
      <View style={{height:1,backgroundColor:item===posttab?"#222":"#999",width:'100%',marginTop:5}}/>
    </TouchableOpacity>
    
  ))}
  
</View>

<View style={{marginTop:2}}>
  <FlatList
  data={explorePosts}
  keyExtractor={(item)=>item.id}

  renderItem={({item})=>(
    <>
    <Image 
    source={{uri:item.image}}
    style={{height:150,width:width/3,}}

    />
    </>
  )}
    numColumns={3}
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
