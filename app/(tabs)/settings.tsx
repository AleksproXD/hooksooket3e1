import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../components/AuthContext';
import "../../global.css";

export default function Settings() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      if (!user) router.replace('/' as any);
    }, [user, router])
  );

  const handleLogout = () => {
    logout();
    router.replace('/' as any);
  };

  if (!user) return null;

  return (
    <View className="flex-1 bg-gradient-to-br from-slate-900 to-gray-900">
      <ScrollView className="flex-1">
        <View className="px-6 pt-12 pb-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-white text-3xl font-bold">Ajustes</Text>
            <TouchableOpacity onPress={() => router.push('/notfound' as any)}>
              <Ionicons name="help-circle-outline" size={32} color="#3b82f6" />
            </TouchableOpacity>
          </View>

          <View className="bg-slate-800/50 rounded-2xl p-6 mb-6 border-2 border-blue-500">
            <View className="flex-row items-center mb-4">
              <View className="bg-blue-500 w-16 h-16 rounded-full items-center justify-center mr-4">
                <Ionicons name="person" size={32} color="white" />
              </View>
              <View>
                <Text className="text-white text-xl font-bold">{user.name}</Text>
                <Text className="text-white/60">{user.email}</Text>
              </View>
            </View>
          </View>

          <View className="gap-3">
            <TouchableOpacity className="bg-slate-800/50 rounded-2xl p-4 border-2 border-gray-600 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="notifications" size={24} color="#6b7280" />
                <Text className="text-white text-lg ml-4">Notificaciones</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#6b7280" />
            </TouchableOpacity>

            <TouchableOpacity className="bg-slate-800/50 rounded-2xl p-4 border-2 border-gray-600 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="moon" size={24} color="#6b7280" />
                <Text className="text-white text-lg ml-4">Tema</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#6b7280" />
            </TouchableOpacity>

            <TouchableOpacity className="bg-slate-800/50 rounded-2xl p-4 border-2 border-gray-600 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="volume-high" size={24} color="#6b7280" />
                <Text className="text-white text-lg ml-4">Calidad de audio</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#6b7280" />
            </TouchableOpacity>

            <TouchableOpacity className="bg-slate-800/50 rounded-2xl p-4 border-2 border-gray-600 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="phone-portrait" size={24} color="#6b7280" />
                <Text className="text-white text-lg ml-4">Dispositivos</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#6b7280" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={handleLogout}
            className="bg-red-500 rounded-2xl p-4 mt-6 flex-row items-center justify-center"
          >
            <Ionicons name="log-out" size={24} color="white" />
            <Text className="text-white text-lg font-bold ml-2">Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
