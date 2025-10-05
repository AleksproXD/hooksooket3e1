import { View, ImageBackground } from 'react-native';
import React from 'react';

const FondoI = () => {
  return (
    <View className="absolute w-screen h-screen">
      <ImageBackground
        source={require('../assets/images/imagen.jpg')}
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
  );
};

export default FondoI;
