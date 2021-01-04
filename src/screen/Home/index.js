import React from 'react';
import {Text,View,
    ImageBackground,
    Pressable
} 
    from 'react-native';
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
const Home =(props)=>{
    const navigation = useNavigation();
    return(
      <View>
          <ImageBackground source={require('../../../assests/images/wallpaper.jpg')} style={styles.image} >
            
              <Pressable 
              onPress={()=>{navigation.navigate('destinationserch')}}
              style={styles.searchbar}>
              <Text style={styles.searchtext}>where are you going</Text>
              </Pressable>
              <Text style={styles.title}>Go Near</Text>
              <Pressable
              style={styles.button}
              onPress={()=>console.log("hello")}
              >
            <Text style ={styles.buttontext}>Exploare Near By stays</Text>
              </Pressable>
          </ImageBackground>

      </View>
    )
}
export default Home;