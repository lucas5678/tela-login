import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable'

export default function BemVindo() {
    return (
        <View style={style.container}>
            <Animatable.View animation={"fadeInLeft"} delay={800} style={style.containerHeader}>
                <Text style={style.containerHeaderText}>Bem Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation={"fadeInUp"} style={style.containerForm}>
                <Text style={style.usuario}>Usuário</Text>
                <TextInput placeholder='Digite seu usuário' style ={style.txtUser}/>

                <Text style={style.senha}>Senha</Text>
                <TextInput placeholder='Digite sua senha' style ={style.txtSenha}/>

                <TouchableOpacity style={style.btnLogar}>
                    <Text style={style.btnText}>Logar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    containerHeader:{
        marginTop:"14%",
        marginLeft:"8%",
        paddingStart:"5%"
    },
    containerHeaderText:{
        fontSize:30,
        fontWeight:'bold'
    },
    containerForm:{
        flex:1,
        marginTop:30,
        paddingStart:"5%",
        paddingEnd:"5%",
    },
    usuario:{
        marginTop:20,
        fontSize:18,
        fontWeight:'bold'
    },
    txtUser:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16
    },
    senha:{
        marginTop:20,
        fontSize:18,
        fontWeight:'bold'
    },
    txtSenha:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16
    },

    btnLogar:{
        backgroundColor:"#0000FF",
        width:"100%",
        borderRadius:4,
        paddingVertical:8,
        marginTop:14,
        alignContent:'center',
        alignItems:'center'
    },
    btnText:{
        color:"#fff",
        fontSize:20,
        fontWeight:'bold'
    }
})