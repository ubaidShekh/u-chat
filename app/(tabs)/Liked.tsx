
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
export default function Liked(){
  const Tab = [
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

  const [activeTab,setActiveTab] = useState<string>("You")
  return(
    <>
    <View style={{ paddingTop:60,}}>
     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
       {Tab.map((item,intex)=>(
        <>
        <TouchableOpacity key = {item.id} style={{padding:16,paddingHorizontal:40}} activeOpacity={0.9} onPress={()=>{setActiveTab(item.Tab)}}>
          <Text style={{fontWeight:'600',color:item.id ===activeTab?'#111':'#777',letterSpacing:0.3}} >{item.Tab}</Text>

        </TouchableOpacity>
      
       
        </>
      ))}
      
     </View>
        <View style={{height:1.5,backgroundColor:'#ddd'}}/>

        <Text style={{padding:16,color:'#555', fontWeight:'600',letterSpacing:0.3}}>Follow Requests</Text>
         <View style={{height:0.5,backgroundColor:'#ddd'}}/>
    </View>

    </>
  );

}