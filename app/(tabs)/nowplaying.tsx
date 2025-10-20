import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../components/AuthContext';
import "../../global.css";

export default function NowPlaying() {
  const { user } = useAuth();
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      if (!user) router.replace('/' as any);
    }, [user, router])
  );

  if (!user) return null;

  return (
    <View className="flex-1 bg-gradient-to-br from-slate-900 to-pink-900 px-6 pt-12">
      <View className="flex-row justify-between items-center mb-8">
        <Text className="text-white text-3xl font-bold">Reproduciendo</Text>
        <TouchableOpacity onPress={() => router.push('/notfound' as any)}>
          <Ionicons name="help-circle-outline" size={32} color="#3b82f6" />
        </TouchableOpacity>
      </View>

      <View className="items-center mb-8">
        <View className="w-72 h-72 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl items-center justify-center border-4 border-pink-400">
          <Ionicons name="musical-notes" size={120} color="white" />
        </View>
      </View>

      <View className="mb-8">
        <Text className="text-white text-3xl font-bold text-center mb-2">
          Bohemian Rhapsody
        </Text>
        <Text className="text-white/60 text-xl text-center">Queen</Text>
      </View>

      <View className="mb-8">
        <View className="bg-gray-700 h-2 rounded-full mb-2">
          <View className="bg-pink-500 h-2 rounded-full w-1/3" />
        </View>
        <View className="flex-row justify-between">
          <Text className="text-white/60">2:15</Text>
          <Text className="text-white/60">5:55</Text>
        </View>
      </View>

      <View className="flex-row justify-center items-center gap-6">
        <TouchableOpacity className="bg-slate-800 w-16 h-16 rounded-full items-center justify-center">
          <Ionicons name="play-skip-back" size={32} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsPlaying(!isPlaying)}
          className="bg-pink-500 w-20 h-20 rounded-full items-center justify-center"
        >
          <Ionicons
            name={isPlaying ? 'pause' : 'play'}
            size={40}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity className="bg-slate-800 w-16 h-16 rounded-full items-center justify-center">
          <Ionicons name="play-skip-forward" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}