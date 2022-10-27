
import {StyleSheet} from 'react-native'

const HeaderStyle = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: 'rgb(232,234,249)',

        borderBottomWidth: 5,
    },
    headerImg: {
        width: 40,
        height: 40
    },
    headerImg2: {
        width: 30,
        height: 30
    },
    headerText: {
        fontSize: 19
    },
    services: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        
    },
    cont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
    
    img: {
        width: 18,
        height: 18,
    },
    wrapper: {
        justifyContent: 'space-between',
        // borderWidth: 2
        // backgroundColor: '#ACB6E5'
    },
    title: {
        color: 'rgb(161,161,167)',
        textTransform: 'uppercase',
        fontSize: 11
    },
    text: {
        marginTop: 10,
        fontSize: 18,
    },
    textTwo: {
        color: 'rgb(161,161,167)',
        fontSize: 16,
    },
    btnText: {
        // alignSelf:'baseline',
    },
    btnCont: {
        alignItems: 'center'
    },
    bannerCont: {
        marginVertical:15,
        marginHorizontal:8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(250,249,254)',
        // padding: 12,
        paddingVertical: 6,
        paddingHorizontal: 5,
        borderRadius: 15,
        alignItems: 'center',
    },

    fiveG: {
        color: 'red',
        fontSize: 13
    }


})


export default HeaderStyle;