import {StyleSheet, TouchableOpacity} from 'react-native';




import { View, Text } from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
      <TouchableOpacity style= {[style.btn, props.style]}>
        <Text style= {style.textBtn}>{props.data}</Text>
      </TouchableOpacity>
  )
}

export default Button;

const style = StyleSheet.create({
    btn: {
        backgroundColor: 'black',
        color: 'white',
        padding: 9,
        borderWidth: 5,
        borderRadius: 10,
    },
    textBtn: {
        color: 'white',
        fontSize: 12,
        fontWeight: '700'

    }
});

