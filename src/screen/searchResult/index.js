import React from 'react'
import {Text,View,Button,FlatList} from 'react-native';
import feed from '../../../assests/images/Airbnb Assets/Feed'
import PostComponent from '../../component/Post/index'
const Search =()=>{
    return(
       <View>
           <FlatList
           data={feed}
           renderItem={({item})=><PostComponent post ={item} />}
           />

       </View>
    )
}
export default Search;