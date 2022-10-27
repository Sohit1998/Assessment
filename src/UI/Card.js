import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Card(props) {
  return (
    <View style= {[style.card, props.style]}>
        {props.children}
    </View>
  )
};




const style = StyleSheet.create({
    card: {
        padding: 15,
        flex: 1,
        // width: '50%',
        height: 250,
        margin: 10,
        // flexDirection: 'row',
        // borderWidth: 1,
        shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
        borderRadius: 20,
        backgroundColor: 'rgb(250,249,254)',
    }
})

