import {StyleSheet} from 'react-native';

const ShortcutStyle = StyleSheet.create({
    shortcutCont: {
      flex: 1,
      marginHorizontal: 17,
    },
    secondaryCont: {
      backgroundColor: 'white',
      marginVertical: 5,
      borderRadius: 20,
      alignItems: 'center',
    },
    heading: {
      color: 'rgb(152,156,191)',
      padding: 20,
      fontSize: 13,
      fontWeight: 'bold',
    },
    renderView: {
      alignItems: 'center',
    },
    imgCont: {
      borderRadius: 100,
      padding: 18,
      backgroundColor: 'rgb(227,229,252)',
    },
    img: {
      height: 27,
      width: 27,
    },
    textCont: {
      width: 90,
      paddingTop: 5,
      paddingBottom: 20,
    },
    text: {
      textAlign: 'center',
      fontSize: 11,
      color: 'rgb(133,136,140)',
    },
  });
  

  export default ShortcutStyle;