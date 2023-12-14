import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ChartPizza from '../components/chartPizza'

export default function Dash() {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.9.50/Json/desvios.json');
                setposts(response.data);
            } catch (error) {
                console.log("Erro ao buscar dados na api");
            }
        };
        //console.log(posts);
        fetchData();
    }, []);

    return (
        <View style={style.container}>
            <View style={style.containerHeader}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 5 }}>Situação dos Desvios</Text>
                <Text style={{borderRadius:8, width:"90%", textAlign:'center', fontSize: 18, marginLeft: 5, backgroundColor:"#FF5733", marginTop:5, color:"#fff" }}>Em Atraso: {posts.atraso}</Text>
                <Text style={{borderRadius:8, width:"90%", textAlign:'center', fontSize: 18, marginLeft: 5, backgroundColor:"#33FF57", marginTop:5 }}>Concluído: {posts.concluido}</Text>
                <Text style={{borderRadius:8, width:"90%", textAlign:'center',color:"#fff", fontSize: 18, marginLeft: 5, backgroundColor:"blue", marginTop:5 }}>Em andamento: {posts.andamento}</Text>
            </View>

            <View style={style.containerChart}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Desvios</Text>
                <View style={style.chart}>
                    <ChartPizza atraso={posts.atraso} concluido={posts.concluido} andamento={posts.andamento}/>
                </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3f3"
    },
    containerHeader: {
        marginTop: 12,
        fontSize: 15,
        margin: 14,
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 8,
        alignItems:'center'
    },
    containerChart: {
        width: "92%",
        backgroundColor: "#fff",
        height: "30%",
        padding: 4,
        marginLeft: 15,
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
})