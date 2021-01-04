import React, { useState } from 'react'
import {Text,View,Button, TextInput,FlatList, Pressable} from 'react-native'
import styles from './styles';
import searchData from '../../../assests/images/Airbnb Assets/Search'
import {useNavigation} from '@react-navigation/native'
const DestinationCoponent =(props)=>{
  const navigation = useNavigation();
   debugger
    const [name, setName] = useState("");
    console.log('helllo')
  function clikedonit(){
    console.log(name)
  }
    return(
       <View style={styles.container}>
           <TextInput 
            style={styles.textinput}
            placeholder="where are you going?"
            onChangeText={text => setName(text)}
            value={name}
           />
           <Pressable
           onPress={()=>{navigation.navigate('guest')}}
           >
           <FlatList 
           data ={searchData}
           renderItem={({item})=>(
            <View style={styles.row}>
           <Text style={styles.description}>{item.description}</Text>
           </View>
           )}
           />
           </Pressable>

          
       </View>
    )
}
export default DestinationCoponent;