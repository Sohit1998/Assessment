import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Card from '../../UI/Card';
import style from './HeaderStyle';
import Button from '../../UI/Button';
import Banner from '../banner/Banner';

export default function Header() {
  const info = [
    {
      title: 'Services',
      icon: require('../../assets/rightArrow2.png'),
      textOne: '5 Services',
      textTwo: '',
      btnText: 'VIEW DETAILS',
    },
    {
      title: 'Money',
      icon: require('../../assets/lock.png'),
      textOne: '₹••••',
      textTwo: 'in your wallet',
      btnText: 'SHOW BALANCE',
    },
  ];
  return (
    <View>
      <View style= {style.header}>
        <Image style= {style.headerImg} source= {require('../../assets/customer.png')}></Image>
        <Text style= {style.headerText}>manage</Text>
        <Image style= {style.headerImg2} source= {require('../../assets/notification.png')}></Image>
      </View>
      <View style={style.services}>
        {info.map((item, index) => {
          return (
            <Card key={index} style={style.wrapper}>
              <View>
                <View style={style.cont}>
                  <Text style={style.title}>{item.title}</Text>
                  <Image style={style.img} source={item.icon}></Image>
                </View>
                <Text style={style.text}>{item.textOne}</Text>
                <Text style={style.textTwo}>{item.textTwo}</Text>
              </View>
              <View style= {style.btnCont}>
                <Button style={style.btnText} data={item.btnText}></Button>
              </View>
            </Card>
          );
        })}
      </View>
      <View style= {style.bannerCont}>
        <Image style= {{width: 30,height:30}} source={{uri:'https://assets.airtel.in/bank/assets/images/easy-payments/airtel.png'}} ></Image>
        <Text style= {[style.fiveG, {fontSize:15, paddingRight:15}]}>5GPlus</Text>
        <Text style= {{fontSize: 13}}>Check if your phone is 5G enabled</Text>
        <Image style={style.img} source= {require('../../assets/rightArrow2.png')}></Image>
      </View>
    </View>
  );
}
