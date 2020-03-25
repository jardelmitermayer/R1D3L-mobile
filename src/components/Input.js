import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const Input = ({
  text,
  onChangeText,
  secureTextEntry,
  placeholder,
  keyboardType,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        value={text}
        onChangeText={(value) => onChangeText(value)}
        placeholder={placeholder}
        style={{width: '100%'}}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  inputWrapper: {
    height: 40,
    width: width - 64,
   
    justifyContent: 'center',
    paddingLeft: 16,
    //marginTop: 20,
    marginBottom: 20,
  },
};

export {Input};