import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
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
    <View style={{padding:16,flexDirection:'row',alignItems:'center'}}>
      <MaterialIcons name="account-circle" size={24} color="black" />
     <View style={{flexDirection:'row'}}>
       
      <View style={{paddingHorizontal:16,width:320}}>
        <Text style={{fontWeight:'600',letterSpacing:0.2,color:'#111'}}>Accounts Center</Text>
        <Text style={{fontSize:12,fontWeight:'500',color:'#666'}}>Password,security, personal details, connected experience,</Text>
      </View>
     </View>
      <AntDesign name="right" size={20} color="#666" />
    </View>
{/*// devider */}
    <View style={{height:4,backgroundColor:'#e9e9e9'}}/> 

    {/*how you use u-chat */}
    <View style={{padding:16}}>
      <Text  style={{fontWeight:600,color:'#666',fontSize:12,letterSpacing:0.2,}}>How you use u-chat</Text>
      <View style={{paddingTop:16,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Feather name="save" size={24} color="black" />
<Text  style={{fontWeight:'600',letterSpacing:0.2,color:'#111',marginLeft:16}}>Saved</Text>
</View>

      <AntDesign name="right" size={20} color="#666" />

      </View>

      <View style={{paddingTop:16,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<EvilIcons name="archive" size={24} color="black" />
<Text  style={{fontWeight:'600',letterSpacing:0.2,color:'#111',marginLeft:16}}>Archive</Text>
</View>

      <AntDesign name="right" size={20} color="#666" />

      </View>

      <View style={{paddingTop:16,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View style={{flexDirection:'row'}}>
<Feather name="activity" size={24} color="black" />
<Text  style={{fontWeight:'600',letterSpacing:0.2,color:'#111',marginLeft:16}}>Your Activity</Text>
</View>

      <AntDesign name="right" size={20} color="#666" />

      </View>
      <View style={{paddingTop:16,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<MaterialIcons name="notifications-none" size={24} color="black" />
<Text  style={{fontWeight:'600',letterSpacing:0.2,color:'#111',marginLeft:16}}>Notifications</Text>
</View>

      <AntDesign name="right" size={20} color="#666" />

      </View>
      <View style={{paddingTop:16,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Ionicons name="timer-outline" size={24} color="black" />
<Text  style={{fontWeight:'600',letterSpacing:0.2,color:'#111',marginLeft:16}}>Time management</Text>
</View>

      <AntDesign name="right" size={20} color="#666" />

      </View>
      <View style={{paddingTop:16,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Feather name="tablet" size={24} color="black" />
<Text  style={{fontWeight:'600',letterSpacing:0.2,color:'#111',marginLeft:16}}>U-chat for tablets</Text>
</View>

      <AntDesign name="right" size={20} color="#666" />

      </View>
    </View>

    {/*// devider */}
    <View style={{height:4,backgroundColor:'#e9e9e9'}}/> 
    
    <View style={{padding:16}}>
      <Text style={{fontWeight:'600',color:'#666',fontSize:12,letterSpacing:0.2}}>Subscriptions</Text>
    </View>
    </>
  )
}