import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import "../global.css";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gradient-to-br from-red-900 to-orange-700 justify-center items-center p-6">
      <Ionicons name="sad-outline" size={120} color="white" />
      <Text className="text-9xl font-black text-white mb-4">404</Text>
      <Text className="text-4xl font-bold text-white mb-4">#NotFound</Text>
      <Text className="text-2xl text-white/80 mb-8 text-center">
        ¡Oops! Esta página no existe
      </Text>
      <TouchableOpacity 
        onPress={() => router.push('/(tabs)/home' as any)}
        className="bg-white px-8 py-4 rounded-2xl flex-row items-center"
      >
        <Ionicons name="home" size={24} color="#ea580c" />
        <Text className="text-orange-700 font-bold text-lg ml-2">
          Volver al inicio
        </Text>
      </TouchableOpacity>
    </View>
  );
}