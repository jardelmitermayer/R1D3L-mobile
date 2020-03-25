import React from 'react';
import {View, KeyboardAvoidingView, StyleSheet, Text, SafeAreaView, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { withOrientation } from 'react-navigation';
const {width, height} = Dimensions.get('window');
export default function Login({navigation}) {
  return (
    <SafeAreaView>
      
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.h1}> R1D3L</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('inserirPIN')}
          style={styles.posicaoBotao}>
          <Text style={styles.button}> Visitante</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.posicaoBotao}>
          <Text style={styles.button}> Administrador</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('Cadastro')}
        style={styles.botaoCadastro}>
          <Text style={{color:'blue',fontSize:18}}> Nova Conta</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height-160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1:{
      fontSize:60,
      color: 'black',
      marginBottom:30
  },
  button:{
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
  posicaoBotao:{
    backgroundColor: '#ACDF87' ,
    borderRadius: 10,
    height:40,
    width:200,
    marginTop:60,
    marginLeft:50,
    marginRight:50,    
    alignItems:'center',    
    justifyContent:'center',
  },
  botaoCadastro:{
    marginTop: 50,

  }
 
});