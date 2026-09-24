import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text, TextInput, View } from 'react-native';

export default function Setings(){
  return(
    <>
     <View style={{padding:16}}>
    <TextInput placeholder='Search ' style={{borderRadius:4,borderWidth:0.5,borderColor:'#ccc',paddingHorizontal:10,backgroundColor:'#eee'}}/>
    </View>

    <View style={{paddingHorizontal:16,}}>
      <Text style={{fontWeight:600,color:'#666',fontSize:12,letterSpacing:0.2}}>Your account</Text>
    </View>
    // your account
    <View style={{padding:16,flexDirection:'row',justifyContent:'space-between',alignContent:'center'}}>
     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
       <MaterialIcons name="account-circle" size={24} color="black" />
      <View style={{paddingHorizontal:16,paddingRight:40}}>
        <Text style={{fontWeight:'600',letterSpacing:0.2,color:'#111'}}>Accounts Center</Text>
        <Text style={{fontSize:12,fontWeight:'500',color:'#666'}}>Password,security, personal details, connected experience, ad preferences</Text>
      </View>
     </View>
      <AntDesign name="right" size={20} color="#666" />
    </View>
    
    </>
  )
}