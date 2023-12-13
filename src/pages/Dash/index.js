import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dash() {
    const navigation = useNavigation();
    const [posts, setposts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.9.50/Json/Teste.json');
                setposts(response.data);
                //console.log('Resposta da API:',response.data);
            } catch (error) {
                console.Log('Erro ao buscar dados da API:', error);
            }
        };
        fetchData();
    }, []);
    console.log(posts)
    return (
        <View style={style.container}>
            <Text>Dash</Text>
            <Text>Cargo: {posts.Cargo}</Text>
            <Text>Nome: {posts['Nome:']}</Text>
            <Text>Salário: {posts.Salario}</Text>
        </View>
    )
}
const style = StyleSheet.create({

})