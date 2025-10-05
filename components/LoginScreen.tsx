import React, { useState } from 'react'; 
import { View, Text, TextInput, Pressable } from 'react-native';
import "../global.css"; // Importa Tailwind configurado para React Native

// Componente principal del login
const LoginScreen = () => {
  // Estados locales para almacenar el usuario y la contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    // Contenedor principal que centra todo el contenido en la pantalla
    <View className="flex-1 justify-center items-center px-5">
      
      {/* Caja del formulario con fondo blanco semitransparente y sombra */}
      <View className="bg-white/85 p-7 rounded-3xl w-11/12 max-w-md shadow-lg shadow-black/30">
        
        {/* Título grande del formulario */}
        <Text className="text-4xl font-extrabold text-center mb-8 text-blue-600 drop-shadow-md">
          Bienvenido Mi Rey
        </Text>

        {/* Campo de texto para el nombre de usuario */}
        <TextInput
          placeholder="Usuario"               // Texto que aparece cuando el campo está vacío
          value={username}                    // Valor actual del campo (controlado por el estado)
          onChangeText={setUsername}          // Función que actualiza el estado al escribir
          className="border border-gray-300 p-3 mb-4 w-full rounded-xl bg-white/90"
          placeholderTextColor="#555"         // Color del texto del placeholder
        />

        {/* Campo de texto para la contraseña */}
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry                     // Oculta el texto al escribir (modo contraseña)
          className="border border-gray-300 p-3 mb-6 w-full rounded-xl bg-white/90"
          placeholderTextColor="#555"
        />

        {/* Botón de ingresar */}
        <Pressable
          className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl items-center shadow-md active:opacity-80"
          // Se puede agregar aquí una función onPress={() => ...} para manejar el login
        >
          <Text className="text-white font-bold text-lg">Ingresar</Text>
        </Pressable>

        {/* Texto inferior con enlace (falso por ahora) */}
        <Text className="text-center text-gray-700 mt-5 text-sm">
          ¿No tienes cuenta?{' '}
          <Text className="text-blue-600 font-semibold">Regístrate</Text>
        </Text>
      </View>
    </View>
  );
};

// Exporta el componente para usarlo en otras pantallas
export default LoginScreen;
