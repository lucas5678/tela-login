import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
export default function BemVindo() {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <View style={style.containerLogo}>
                <Animatable.Image
                    animation={"flipInY"}
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View delay={800} animation={"fadeInUp"} style={style.containerForm}>
                <Text style={style.title}>Monitore a segurança de qualquer lugar</Text>
                <Text style={style.text}>Faça o login</Text>
                <TouchableOpacity style={style.btn} onPress={()=> navigation.navigate('Login')}>
                    <Text style={style.btnText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "##f3f3f3"
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        paddingStart: "5%",
        paddingEnd: "5%",
        alignItems:'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text: {
        color: "#a1a1a1"
    },
    btn: {
        position: "absolute",
        backgroundColor: "#0000FF",
        borderRadius: 50,
        paddingVertical: 8,
        width: "60%",
        alignSelf: "center",
        bottom: "15%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold'
    }
})