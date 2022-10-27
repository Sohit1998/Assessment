import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import style from './ShortcutStyle';

const shortcutsData = [
  {
    img: 'https://cdn-icons-png.flaticon.com/512/1157/1157803.png',
    title: 'recharge',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/128/1121/1121336.png',
    title: 'pay bills',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/1895/1895474.png',
    title: 'thank benefits',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
    title: 'add existing connection',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/4308/4308262.png',
    title: 'top up data',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/46/46019.png',
    title: 'international roaming',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/4058/4058824.png',
    title: 'upgrade to postpaid',
  },
];

export default function Shortcuts() {
  return (
    <View style={style.shortcutCont}>
      <View style={style.secondaryCont}>
        <View>
          <Text style={style.heading}>SHORTCUTS</Text>
        </View>
        <FlatList
          horizontal={false}
          data={shortcutsData}
          numColumns={4}
          renderItem={({item}) => {
            return (
              <View style={style.renderView}>
                <TouchableOpacity style={style.imgCont}>
                  <Image source={{uri: item.img}} style={style.img} />
                </TouchableOpacity>

                <TouchableOpacity style={style.textCont}>
                  <Text style={style.text}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        {/* </ScrollView> */}
      </View>
    </View>
  );
}

