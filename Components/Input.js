import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function Input(props) {
  return (
    <TextInput {...props } style={{...Styles.Input,...props.style}} />
      
  )
}

const Styles=StyleSheet.create({
Input:{
    height: 30,
    borderBottomColor:'grey',
    borderBottomWidth:2,
    marginVertical:15,

}
})
