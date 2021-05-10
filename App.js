import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomBer from './componant/BottomBer/BottomBer';
import Home from './componant/Home/Home';
import TopBer from './componant/TopBer/TopBer';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <TopBer></TopBer> */}
      <NavigationContainer>
        <BottomBer></BottomBer>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
