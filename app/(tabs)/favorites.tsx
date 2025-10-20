import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../components/AuthContext';
import "../../global.css";

export default function Favorites() {
  const { user } = useAuth();
  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      if (!user) router.replace('/' as any);
    }, [user, router])
  );

  if (!user) return null;

  const favoriteSongs = [
    { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55' },
    { id: 2, title: 'Stairway to Heaven', artist: 'Led Zeppelin', duration: '8:02' },
    { id: 3, title: 'Hotel California', artist: 'Eagles', duration: '6:30' },
    { id: 4, title: 'Imagine', artist: 'John Lennon', duration: '3:03' },
    { id: 5, title: 'Sweet Child O Mine', artist: 'Guns N Roses', duration: '5:56' },
  ];

  return (
    <View className="flex-1 bg-gradient-to-br from-slate-900 to-purple-900">
      <ScrollView className="flex-1">
        <View className="px-6 pt-12 pb-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-white text-3xl font-bold">Favoritos</Text>
            <TouchableOpacity onPress={() => router.push('/notfound' as any)}>
              <Ionicons name="help-circle-outline" size={32} color="#3b82f6" />
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            {favoriteSongs.map((song) => (
              <View
                key={song.id}
                className="bg-slate-800/50 backdrop-blur rounded-2xl p-4 border-2 border-purple-500 flex-row items-center"
              >
                <View className="bg-purple-500 w-12 h-12 rounded-xl items-center justify-center mr-4">
                  <Ionicons name="musical-note" size={24} color="white" />
                </View>
                <View className="flex-1">
                  <Text className="text-white text-lg font-bold">{song.title}</Text>
                  <Text className="text-white/60">{song.artist}</Text>
                </View>
                <Text className="text-white/60 mr-2">{song.duration}</Text>
                <Ionicons name="heart" size={24} color="#f472b6" />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}