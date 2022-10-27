import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

import React from 'react';
import Card from '../../UI/Card';

export default function Banner() {
  let a = 3;
  return (
    <View>
      <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
        <Image
          style={style.bannerImg}
          source={{
            uri: 'https://www.airtel.in/bank/appaws/7dc5dce1-e6f7-4bfd-9453-3258fcefd486_597-x-362-02.png?auto=compress,format',
          }}></Image>
        <Image
          style={style.bannerImg}
          source={{
            uri: 'https://www.airtel.in/bank/appaws/7dc5dce1-e6f7-4bfd-9453-3258fcefd486_597-x-362-02.png?auto=compress,format',
          }}></Image>
        <Image
          style={style.bannerImg}
          source={{
            uri: 'https://www.airtel.in/bank/appaws/7dc5dce1-e6f7-4bfd-9453-3258fcefd486_597-x-362-02.png?auto=compress,format',
          }}></Image>
      </ScrollView>
      <View style= {style.iconMain}>
    
          <TouchableOpacity style={style.icons}>
            <Image
              style={style.iconImg}
              source={require('../../assets/phone.png')}></Image>
            <Text style= {style.iconText}>missed call alerts</Text>
          </TouchableOpacity>
        
    
          <TouchableOpacity style={style.icons}>
            <Image
              style={style.iconImg}
              source={require('../../assets/gift.png')}></Image>
            <Text style= {style.iconText}>rewards & coupens</Text>
          </TouchableOpacity>
        
    
          <TouchableOpacity style={style.icons}>
            <Image
              style={style.iconImg}
              source={require('../../assets/customer.png')}></Image>
            <Text style= {style.iconText}>refer prepaid</Text>
          </TouchableOpacity>
        
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  bannerImg: {
    width: 300,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  iconImg: {
    width: 28,
    height: 28,
    marginBottom: 5,
  },
  iconMain: {
    marginVertical: 35,
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // alignContent: 'center'
  },
  icons: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginHorizontal:5,
    backgroundColor: 'rgb(246,245,254)',
    padding: 9,
    borderRadius: 20,
    width: 100,
    alignItems: 'center',
    flexDirection: 'column'
  },
  iconText: {
    textAlign: 'center',
    marginBottom: 2,
    fontSize: 14
  }
});
