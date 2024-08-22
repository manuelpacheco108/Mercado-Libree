import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from '../styles/myOwnButtonStyle'

const CustomButton = ({ title, onPress, disabled, style }) => {
  return (
    <TouchableOpacity
      style={[Styles.button, style, disabled && Styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={Styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
