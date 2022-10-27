import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Header from './components/header/Header';
import style from './MainStyle';
import Banner from './components/banner/Banner';
import Shortcuts from './components/shortcuts/Shortcuts';

export default function Main() {
  return (
      <View style={style.main}>
        <ScrollView>
          <View style={style.headerCont}>
            <Header></Header>
          </View>
          <View style={style.bannerCont}>
            <Banner></Banner>
          </View>
          <View style={style.shortcutCont}>
            <Shortcuts></Shortcuts>
          </View>
        </ScrollView>
      </View>
  );
}
