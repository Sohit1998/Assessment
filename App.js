import { View, Text, SafeAreaView } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from './src/Main';


const Tab = createBottomTabNavigator();



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator screenOptions= {{headerShown: false}}>
        <Tab.Screen name='main' component={Main}></Tab.Screen>
        <Tab.Screen name='settings' component={SettingsScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
};