
import { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
export default function Liked(){

  const {width} = useWindowDimensions()
  interface TabType {
    id:string,
    Tab:string
  }
  const Tab:TabType[] = [
    {
      id:"Following",
      Tab:"Following",
    },
    {
      id:"You",
      Tab:"You"
    }
    , 
  ]

const stories = {
    id: '1',
    image: 'https://i.pravatar.cc/150?img=12',
    post: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e',
    userName:'im_ubaid_shekh'
   
  }
 

  

  const [activeTab,setActiveTab] = useState<string>("You")
  return(
    <>
    <View style={{ paddingTop:60,}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    
      <FlatList
      data = {Tab}
      keyExtractor={(item)=>item.id}
      horizontal
      style={{}}
      contentContainerStyle={{justifyContent:'space-between',flex:1,}}
      renderItem={({item})=>(
        <>
         <TouchableOpacity  style={{width:width/2}} activeOpacity={0.9} onPress={()=>{setActiveTab(item.Tab)}}>
          <Text style={{fontWeight:'600',color:item.id ===activeTab?'#111':'#777',letterSpacing:0.3,marginLeft:width/6,fontSize:16}} >{item.Tab}</Text>
           <View style={{height:1.5,backgroundColor:item.id===activeTab?'#777':'#ddd',width:'100%',marginTop:10,}}/>

        </TouchableOpacity>
        </>
      )}
      />
     </View>
       
 {activeTab==="You" && (
  <>
      

        <Text style={{padding:16,color:'#555', fontWeight:'600',letterSpacing:0.3}}>Follow Requests</Text>
         <View style={{height:0.5,backgroundColor:'#ddd'}}/>
         <Text style={{fontWeight:'700',color:'#222',letterSpacing:0.3,padding:15}}>New</Text>

         <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:15}}>
         <Image
         source={{uri:stories.image}} style={{height:50,width:50,borderRadius:25}}/>
         <Text style={{fontWeight:'700',color:'#222',fontSize:13}}>{stories.userName}<Text style={{fontWeight:'400',}}> liked your photos</Text> <Text style={{fontWeight:'300'}}>1h</Text></Text>
         <Image source={{uri:stories.post}} style={{height:50,width:50}}/>
         </View>
         <View style={{height:1,backgroundColor:'#ddd'}}/>
         <View>
          <Text style={{fontWeight:'700',color:'#222',letterSpacing:0.3,padding:15}}>Today</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:15}}>
         <Image
         source={{uri:stories.image}} style={{height:40,width:40,borderRadius:20}}/>
         <Image
         source={{uri:stories.image}} style={{height:40,width:40,borderRadius:20,marginLeft:-55,marginBottom:-15}}/>
         <View style={{width:width/2}}>
          <Text style={{fontWeight:'700',color:'#222',fontSize:13,}}>{stories.userName} and 26 others<Text style={{fontWeight:'400',}}> liked your photos</Text> <Text style={{fontWeight:'300'}}>1h</Text></Text>
         </View>
         <Image source={{uri:stories.post}} style={{height:50,width:50,}}/>
         
         </View>
         <View style={{height:1,backgroundColor:'#ddd'}}/>

<Text style={{fontWeight:'700',color:'#222',letterSpacing:0.3,padding:15}}>This Week</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:15}}>
         <Image
         source={{uri:stories.image}} style={{height:40,width:40,borderRadius:20}}/>
     
         <View style={{width:width/2}}>
          <Text style={{fontWeight:'700',color:'#222',fontSize:13,}}>{stories.userName}<Text style={{fontWeight:'400',}}> mentioned you in comment :@jaob_w exactly.. 2d</Text> </Text>
         </View>
         <Image source={{uri:stories.post}} style={{height:50,width:50,}}/>
         
         </View>
        
         </View>



         {/*Following */}

            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:15}}>
         <Image
         source={{uri:stories.image}} style={{height:40,width:40,borderRadius:20}}/>
     
         <View style={{width:width/2}}>
          <Text style={{fontWeight:'700',color:'#222',fontSize:13,}}>martin_rond<Text style={{fontWeight:'400',}}> started following you. 2d</Text> </Text>
         </View>
         <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:5,borderWidth:1,borderColor:'#ddd'}} activeOpacity={0.9}>
          <Text style={{fontWeight:'600'}}>
            Message
          </Text>
         </TouchableOpacity>
         
         </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:15}}>
         <Image
         source={{uri:stories.image}} style={{height:40,width:40,borderRadius:20}}/>
     
         <View style={{width:width/2}}>
          <Text style={{fontWeight:'700',color:'#222',fontSize:13,}}>maxjacobson<Text style={{fontWeight:'400',}}> started following you. 2d</Text></Text>
         </View>
         <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:5,borderWidth:1,borderColor:'#ddd'}} activeOpacity={0.9}>
          <Text style={{fontWeight:'600'}}>
            Message
          </Text>
         </TouchableOpacity>
         
         </View>


          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:15}}>
         <Image
         source={{uri:stories.image}} style={{height:40,width:40,borderRadius:20}}/>
     
         <View style={{width:width/2}}>
          <Text style={{fontWeight:'700',color:'#222',fontSize:13,}}>mis_potter<Text style={{fontWeight:'400',}}> started following you. 2d</Text></Text>
         </View>
         <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:5,backgroundColor:'#0095F6',borderRadius:2}} activeOpacity={0.9}>
          <Text style={{fontWeight:'600',color:'#eee',}}>
           Follow
          </Text>
         </TouchableOpacity>
         
         </View></>
 )}

         {activeTab==="Following" &&(
          <>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:15}}>
         <Image
         source={{uri:stories.image}} style={{height:40,width:40,borderRadius:20}}/>
     
         <View style={{width:width/2}}>
          <Text style={{fontWeight:'700',color:'#222',fontSize:13,}}>martin_rond<Text style={{fontWeight:'400',}}> started following you. 2d</Text> </Text>
         </View>
         <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:5,borderWidth:1,borderColor:'#ddd'}} activeOpacity={0.9}>
          <Text style={{fontWeight:'600'}}>
            Message
          </Text>
         </TouchableOpacity>
         
         </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:15}}>
         <Image
         source={{uri:stories.image}} style={{height:40,width:40,borderRadius:20}}/>
     
         <View style={{width:width/2}}>
          <Text style={{fontWeight:'700',color:'#222',fontSize:13,}}>maxjacobson<Text style={{fontWeight:'400',}}> started following you. 2d</Text></Text>
         </View>
         <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:5,borderWidth:1,borderColor:'#ddd'}} activeOpacity={0.9}>
          <Text style={{fontWeight:'600'}}>
            Message
          </Text>
         </TouchableOpacity>
         
         </View>


          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:15}}>
         <Image
         source={{uri:stories.image}} style={{height:40,width:40,borderRadius:20}}/>
     
         <View style={{width:width/2}}>
          <Text style={{fontWeight:'700',color:'#222',fontSize:13,}}>mis_potter<Text style={{fontWeight:'400',}}> started following you. 2d</Text></Text>
         </View>
         <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:5,backgroundColor:'#0095F6',borderRadius:2}} activeOpacity={0.9}>
          <Text style={{fontWeight:'600',color:'#eee',}}>
           Follow
          </Text>
         </TouchableOpacity>
         
         </View></>
         )}
    </View>

    </>
  );

}