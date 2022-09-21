import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Colors from '../Constant/Colors'
function Header() {
  return (
    <View style={Styles.header}>
      <Text style={Styles.headerText}>Guess A Number</Text>
    </View>
  )
}
const Styles=StyleSheet.create({

    header:{
        width:'100%',
        height:90 ,
        paddingTop:36,
      backgroundColor:Colors.primary,
      alignItems:'center',
      justifyContent: 'center',

    },
    headerText:{
        color: 'black',
       fontSize:18
    }
})
export default Header
