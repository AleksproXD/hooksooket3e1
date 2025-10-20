import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../components/AuthContext';
import "../../global.css";

export default function Home() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      if (!user) {
        router.replace('/' as any);
      }
    }, [user, router])
  );

  const handleLogout = () => {
    logout();
    router.replace('/' as any);
  };

  if (!user) return null;

  return (
    <View className="flex-1 bg-gradient-to-br from-slate-900 to-blue-900">
      <ScrollView className="flex-1">
        <View className="px-6 pt-12 pb-6">
          <View className="flex-row justify-between items-center mb-6">
            <TouchableOpacity 
              onPress={() => router.push('/notfound' as any)}
              className="bg-slate-800/50 px-4 py-2 rounded-xl border-2 border-blue-500"
            >
              <Text className="text-white font-bold text-lg">#NotFound</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={handleLogout}
              className="bg-red-500 px-4 py-2 rounded-xl"
            >
              <Text className="text-white font-bold">Salir</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 mb-6 border-4 border-blue-400">
            <Text className="text-white text-3xl font-bold mb-2">
              ¡Bienvenido! 👋
            </Text>
            <Text className="text-white text-xl mb-1">{user.name}</Text>
            <Text className="text-white/80">{user.email}</Text>
          </View>

          <View className="mb-6">
            <Text className="text-white text-2xl font-bold mb-4">Tu Música</Text>
            <View className="flex-row gap-4">
              <View className="flex-1 bg-purple-500/30 backdrop-blur rounded-2xl p-4 border-2 border-purple-400">
                <Ionicons name="musical-notes" size={32} color="#c084fc" />
                <Text className="text-white text-3xl font-bold mt-2">142</Text>
                <Text className="text-white/80">Canciones</Text>
              </View>
              <View className="flex-1 bg-pink-500/30 backdrop-blur rounded-2xl p-4 border-2 border-pink-400">
                <Ionicons name="heart" size={32} color="#f472b6" />
                <Text className="text-white text-3xl font-bold mt-2">23</Text>
                <Text className="text-white/80">Favoritas</Text>
              </View>
            </View>
          </View>

          <View>
            <Text className="text-white text-2xl font-bold mb-4">Acciones Rápidas</Text>
            <View className="gap-3">
              <TouchableOpacity 
                onPress={() => router.push('/(tabs)/favorites' as any)}
                className="bg-slate-800/50 rounded-2xl p-4 border-2 border-blue-500 flex-row items-center"
              >
                <Ionicons name="heart" size={28} color="#3b82f6" />
                <Text className="text-white text-lg font-bold ml-4">Ver Favoritos</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => router.push('/(tabs)/nowplaying' as any)}
                className="bg-slate-800/50 rounded-2xl p-4 border-2 border-purple-500 flex-row items-center"
              >
                <Ionicons name="play-circle" size={28} color="#a855f7" />
                <Text className="text-white text-lg font-bold ml-4">Reproducir Ahora</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => router.push('/(tabs)/settings' as any)}
                className="bg-slate-800/50 rounded-2xl p-4 border-2 border-gray-500 flex-row items-center"
              >
                <Ionicons name="settings" size={28} color="#6b7280" />
                <Text className="text-white text-lg font-bold ml-4">Configuración</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}