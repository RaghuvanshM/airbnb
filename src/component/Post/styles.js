import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        margin:20

    },
    image:{
        width:"100%",
        height:500,
        justifyContent:'center',
        borderRadius:30
    },
    bedrooms:{
        marginVertical:10,
        color:"#d6d6c2",
        fontSize:20

    },
    description:{
        fontSize:18,
        lineHeight:26

    },
    prices:{
        fontSize:18

    },
    oldprice:{
        color:'#5b5b5b',
        textDecorationLine:'line-through',
    


    },
    newprice:{
        fontWeight:'bold',
        marginLeft:10

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