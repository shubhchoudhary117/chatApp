import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const CustomPlaceholderTextInput = ({ placeholder, placeholderStyle, ...rest }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder=""
        style={[styles.input, placeholderStyle]}
        {...rest}
      />
      <Text style={[styles.placeholder, placeholderStyle]}>{placeholder}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    // Your TextInput styles
  },
  placeholder: {
    position: 'absolute',
    left: 0,
    top: 0,
    fontSize: 16, // Adjust font size as needed
    fontWeight: 'bold', // Adjust font weight as needed
    color: '#858587', // Adjust color as needed
    // Additional placeholder styles
  },
});

export default CustomPlaceholderTextInput;
