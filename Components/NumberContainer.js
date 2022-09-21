import React from 'react'
import { StyleSheet, View ,Text} from 'react-native'
import Colors from '../Constant/Colors'
function NumberContainer(props) {
  return (
    <View style={Styyles.container}>
      <Text style={Styyles.number}>{props.children}</Text>
    </View>
  )
}

const Styyles=StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:Colors.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'

    },
    number:{
        color:Colors.accent,
        fontSize:22,

    }
})

export default NumberContainer
