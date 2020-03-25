import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    SafeAreaView, Alert,
  } from 'react-native';
const {width, height} = Dimensions.get('window');
import Input from '../components/Input';

export default function inserirPIN (){
    return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.h1}> R1D3L</Text>
                <TextInput style={styles.input} placeholder={'insira o PIN'} />
                <TouchableOpacity style={styles.posicaoBotao}>
                    <Text style={styles.button}> ENTER </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        
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
        marginBottom:60
    },
    input:{
        height: 40,
        width: width - 140,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        justifyContent: 'center',
        paddingLeft: 16,
        //marginTop: 20,
        marginBottom: 20,
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
      }
})