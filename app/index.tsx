import React from 'react';
import { View } from 'react-native';
import FondoI from '../components/ui/FondoI';
import LoginScreen from '../components/ui/LoginScreen';
import "../global.css";

export default function Index() {
  return (
    <View className="flex-1">
      <FondoI />
      <LoginScreen />
    </View>
  );
}