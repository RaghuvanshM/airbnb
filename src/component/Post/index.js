import React from 'react';
import {
    Text,
    View,
    Pressable,
    Image


} from 'react-native';
import styles from './styles';
const Post =(props)=>{
  let {image,bed,bedroom,newPrice,oldPrice,title,totalPrice,type} =props.post
    return(
        <View style={styles.container}>
         <Image 
          style={styles.image}
          source={{uri:image}}
         />
         <Text style={styles.bedrooms}>{bed} bes {bedroom} bedrooms</Text>
         <Text style={styles.description}>{title}</Text>
         <Text style={styles.prices}>:
         <Text style={styles.oldprice}>रु {oldPrice}</Text>
         <Text style={styles.newprice}>रु {newPrice}</Text>
         <Text style={{marginLeft:10}}>/night</Text>
         </Text>
         <Text style={{fontSize:18}}>रु  {totalPrice}</Text>

        </View>
    )
}
export default Post;