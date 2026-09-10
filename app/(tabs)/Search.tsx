import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';




export default function Search() {



const iconColor= "#666";
  const topBottun = [
    {
      id: '1',
      iconColor: '#666',
      icon:'tv-sharp',
      title: 'IGTV',
    },
      {
      id: '2',
      iconColor: '#666',
      icon:'shopping-bag',
      title: 'Shop',
    },
     {
      id: '3',
      iconColor: '#666',     
      title: 'Style',
    },
     {
      id: '4',
      iconColor: '#666',     
      title: 'Sports',
    },
     {
      id: '5',
      iconColor: '#666',     
      title: 'Auto',
    },


    
  ]


const explorePosts = [
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
  <StatusBar style="auto" />

  //header

<View style={styles.titleContainer}>
  


  <View style={{flexDirection:'row',alignItems:'center',gap:20}}>
    <TextInput
      placeholder="Search"
      
      style={{
        backgroundColor: '#eee',padding:15,borderColor:'#ddd',borderWidth:1,width:'88%',borderRadius:4,fontSize:14,}}
    />
    <FontAwesome5 name="qrcode" size={24} color={iconColor} />
    
  </View>

 
 
 </View>



  <View style={{paddingHorizontal:10,flexDirection:'row', justifyContent:'space-between'}}>
    {
      topBottun.map((item, index)=>(
        <>
       <TouchableOpacity 
       key={item.id}
        style={{paddingHorizontal:15,borderWidth:0.5,borderColor:'#ccc',margin:5,flexDirection:'row',paddingVertical:'6',borderRadius:4,marginBottom:10}}
        activeOpacity={0.9}
        
        >
     
       
          <Text style={{fontWeight:'600',}}>{item.title}</Text>
       
       </TouchableOpacity>
                                                           
        
        </>
      )
    )
    }
  </View>
 
 <FlatList
  data={explorePosts}
  numColumns={3}
  renderItem={({ item }) => (
   
   <>
 
    <Image
      source={{ uri: item.image }}
      style={{
        width: '33.33%',
        height: 125,
       
      }}
    />
   </>

  )}
/>
</>






  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
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
