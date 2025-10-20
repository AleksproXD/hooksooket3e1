import React from 'react';
import { ImageBackground, View } from 'react-native';

const FondoI = () => {
  return (
    <View className="absolute w-screen h-screen">
      <ImageBackground
        source={require('@/assets/images/imagen.jpg')}
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
  );
};

export default FondoI;
