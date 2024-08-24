import React from 'react';
import { Text, Pressable } from 'react-native';
import Styles from '../styles/myOwnButtonStyle'

const CustomButton = ({ title, onPress, disabled, style }) => {
  return (
    <Pressable
      style={[Styles.button, style, disabled && Styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={Styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
