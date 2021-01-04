import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:500,
        justifyContent:'center'
    },
    title:{
        fontSize:80,
        color:'white',
        fontWeight:'bold',
        width:"30%",
        marginLeft:"10%"
        
    },
    buttontext:{
        color:'black',
        fontSize:30,
        alignSelf:'center',
        fontWeight:'bold'
    },
    button:{
        backgroundColor:'white',
        width:"60%",
        marginLeft:"10%",
        borderRadius:10,
        marginTop:'5%',
        height:50
    },
    searchtext:{
        color:'black',
        alignSelf:'center',
        zIndex:100,
        fontSize:30
        
    },
    searchbar:{
        backgroundColor:'white',
        width:"70%",
        alignSelf:'center',
        height:"10%",
        borderRadius:60
    }

})
export default styles