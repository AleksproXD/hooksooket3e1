import React from 'react';
import { View } from 'react-native';
import FondoI from '../components/FondoI';
import LoginScreen from '../components/LoginScreen';
import "../global.css";

export default function Index() {
  return (
    <View className="flex-1 w-screen h-screen">
      <FondoI />
      <LoginScreen />
    </View>
  );
}
