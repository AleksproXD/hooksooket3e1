import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../AuthContext';

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true); // true = login, false = register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login, register } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }
    
    if (login(email, password)) {
      router.replace('/home');
    } else {
      Alert.alert('Error', 'Credenciales incorrectas');
    }
  };

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    const result = register(name, email, password);
    
    if (result.success) {
      Alert.alert('Éxito', '¡Cuenta creada! Ahora inicia sesión', [
        { text: 'OK', onPress: () => {
          setIsLogin(true);
          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        }}
      ]);
    } else {
      Alert.alert('Error', result.error || 'Error al registrar');
    }
  };

  return (
    <View className="absolute inset-0 justify-center items-center px-6">
      <View className="w-full max-w-md bg-white/95 backdrop-blur rounded-3xl p-8 border-4 border-blue-400">
        <Text className="text-4xl font-bold text-center text-gray-800 mb-6">
          #NotFound
        </Text>
        
        {/* Toggle Login/Register */}
        <View className="flex-row gap-2 mb-6">
          <TouchableOpacity
            onPress={() => setIsLogin(true)}
            className={`flex-1 py-3 rounded-xl ${
              isLogin ? 'bg-blue-500' : 'bg-gray-200'
            }`}
          >
            <Text className={`text-center font-bold ${
              isLogin ? 'text-white' : 'text-gray-600'
            }`}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsLogin(false)}
            className={`flex-1 py-3 rounded-xl ${
              !isLogin ? 'bg-blue-500' : 'bg-gray-200'
            }`}
          >
            <Text className={`text-center font-bold ${
              !isLogin ? 'text-white' : 'text-gray-600'
            }`}>
              Register
            </Text>
          </TouchableOpacity>
        </View>

        {isLogin ? (
          // LOGIN FORM
          <View>
            <View className="mb-4">
              <Text className="text-sm font-bold text-gray-700 mb-2">Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="tu@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                className="w-full px-4 py-3 bg-blue-50 rounded-xl border-2 border-blue-300"
              />
            </View>

            <View className="mb-6">
              <Text className="text-sm font-bold text-gray-700 mb-2">Contraseña</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                secureTextEntry
                className="w-full px-4 py-3 bg-blue-50 rounded-xl border-2 border-blue-300"
              />
            </View>

            <TouchableOpacity
              onPress={handleLogin}
              className="w-full bg-blue-500 py-4 rounded-xl"
            >
              <Text className="text-white text-center font-bold text-lg">
                Iniciar Sesión
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          // REGISTER FORM
          <View>
            <View className="mb-4">
              <Text className="text-sm font-bold text-gray-700 mb-2">Nombre</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Tu nombre"
                className="w-full px-4 py-3 bg-blue-50 rounded-xl border-2 border-blue-300"
              />
            </View>

            <View className="mb-4">
              <Text className="text-sm font-bold text-gray-700 mb-2">Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="tu@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                className="w-full px-4 py-3 bg-blue-50 rounded-xl border-2 border-blue-300"
              />
            </View>

            <View className="mb-4">
              <Text className="text-sm font-bold text-gray-700 mb-2">Contraseña</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                secureTextEntry
                className="w-full px-4 py-3 bg-blue-50 rounded-xl border-2 border-blue-300"
              />
            </View>

            <View className="mb-6">
              <Text className="text-sm font-bold text-gray-700 mb-2">Confirmar</Text>
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="••••••••"
                secureTextEntry
                className="w-full px-4 py-3 bg-blue-50 rounded-xl border-2 border-blue-300"
              />
            </View>

            <TouchableOpacity
              onPress={handleRegister}
              className="w-full bg-blue-500 py-4 rounded-xl"
            >
              <Text className="text-white text-center font-bold text-lg">
                Registrarse
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}