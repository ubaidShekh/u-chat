import { TextInput, View } from 'react-native'

export default function Setings(){
  return(
    <>
   <View style={{padding:16}}>
    <TextInput placeholder='Search ' style={{borderRadius:4,borderWidth:0.5,borderColor:'#ccc',paddingHorizontal:10,backgroundColor:'#eee'}}/>
    </View>
    
    </>
  )
}