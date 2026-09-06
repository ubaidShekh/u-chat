import { router, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function MainLogin  (){

  return(<>
  <Stack.Screen options={{headerShown: false}}/>
  <StatusBar style="auto"/>
  <TouchableOpacity activeOpacity={0.9} onPress={()=>{router.back()}} style={{marginLeft:8,marginTop:45}}>
    <Image source={require('@/assets/images/backButton.png')} style={{width: '30', height: '30', position: 'absolute',}}/>
  </TouchableOpacity>
  <View style={styles.constainer}>
    <Image source={require('@/assets/images/title.png')} style={{width: 200, height: 65, alignSelf: 'center'}}/>
    <TextInput placeholder="Username" style={{ borderWidth: 1, borderColor: '#ccc', marginTop: 40,borderRadius: 5,paddingLeft:10,height:50}}/>
    <TextInput placeholder="Password" style={{ borderWidth: 1, borderColor: '#ccc', marginTop: 20, borderRadius: 5,paddingLeft:10,height:50}}/>

   <TouchableOpacity activeOpacity={0.9}><Text style={{marginTop:20,color:'#5d76f7',alignSelf:'flex-end',fontSize:12,fontWeight:'bold'}}>Forgot Password?</Text></TouchableOpacity>
   <TouchableOpacity activeOpacity={0.9} style={{backgroundColor:'#5d76f7',padding:12,borderRadius:5,marginTop:20}}><Text style={{color:'#fff',alignSelf:'center',fontSize:14,fontWeight:'bold'}}>Log in</Text></TouchableOpacity>
   <View style={{flexDirection:'row',alignItems:'center',marginTop:20,justifyContent:'center'}}>
     <Image source={require('@/assets/images/facebook-logo.webp')} style={{width: 30, height: 30,}}/>
     <Text style={{color:'#5d76f7',fontWeight:'bold',}}>Log in with Facebook</Text>
   </View>

<View style={{flexDirection:'row',alignItems:'center',marginTop:45,justifyContent:'space-between', marginBottom:45}}>
     <View style={{height:1,backgroundColor:'#c2c0c0',width: '45%'}}/>
  
    <Text style={{color:'#aaa',fontWeight:'600',textAlign:'center'}}>OR</Text>
 <View style={{height:1,backgroundColor:'#c2c0c0',width: '45%'}}/>
</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
  <Text>Don't have an account? </Text>
  <Text style={{color:'#5d76f7',fontWeight:'bold',}}>Sign Up</Text>
</View>

  </View>
  
  
  </>);
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    
    padding: 20,
  }
});