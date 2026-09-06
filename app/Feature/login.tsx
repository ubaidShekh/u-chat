import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Login  (){
  const name = {
    username: 'Ubaid Shekh',
  }
  interface User {
    username: string;
  }
  const [user, setUser] = React.useState<User | null>(name);

  return(
    <>
    <View style={styles.container}>
    <Image source={require('@/assets/images/title.png')} style={styles.title}/>

    <Image source={require('@/assets/images/logo.png')} style={styles.logo}/>
    <Text style={styles.username}> {user?.username} </Text>

    <TouchableOpacity style={styles.login} activeOpacity={0.9} onPress={() =>{router.push('/Feature/MainLogin')} }>
      <Text style={styles.loginText}>Log In</Text>
    </TouchableOpacity>
      <TouchableOpacity style={styles.switchAccount} activeOpacity={0.9}>
      <Text style={styles.switchAccountText}>Switch Account</Text>
    </TouchableOpacity>
  </View>
  <TouchableOpacity style={{ justifyContent:'flex-end', alignItems:'center', paddingBottom: 40}} activeOpacity={0.9}>
 <Text style={{color:'#555', fontSize: 11, fontWeight: '600'}}>Don't have an account? <Text style={{color:'#555', fontSize: 12, fontWeight: 'bold'}}>Sign Up</Text></Text>
  </TouchableOpacity>
  </>
  
  );


}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
padding:20
},
title:{
 width: 200,
  height: 65,
  marginTop: 20,
  alignSelf: 'center',

},
logo:{
 width: 100,
  height: 100,
  marginTop: 50,
  borderRadius: 50,
   alignSelf: 'center',
},  
username:{
  fontSize: 14,
  marginTop: 20,
  color: 'black',
  fontWeight: '600',
textAlign: 'center',
},
login:{
  padding:15,
 
  borderRadius: 4,
  marginTop: 20,
 textAlign: 'center',
 backgroundColor: '#5d76f7',
},
switchAccount:{
  padding:15,
 
  borderRadius: 4,
  marginTop: 20,
 textAlign: 'center',
 
},
switchAccountText:{
  color:'#5d76f7',
  fontSize: 14,
  fontWeight: '600',
  textAlign: 'center',
},
loginText:{
  color: 'white',
  fontSize: 14,
  fontWeight: '600',
  textAlign: 'center',
}


});