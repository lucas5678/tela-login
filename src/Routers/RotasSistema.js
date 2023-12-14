import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import React from 'react';
import Dash from '../pages/Dash/dash'
import ChartMes from '../pages/Views/DesvioMes'
const Tab = createBottomTabNavigator();

export function RouterDash() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Dash"
                component={Dash}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={40} color={color} name='home' />
                        }
                        else {
                            return <Ionicons size={40} color={color} name='home-outline' />
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Grafico Mês"
                component={ChartMes}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={40} color={color} name='bar-chart-sharp' />
                        }
                        else {
                            return <Ionicons size={40} color={color} name='bar-chart-sharp' />
                        }
                    }
                }}
            />
             <Tab.Screen
                name="Teste"
                component={ChartMes}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={40} color={color} name='bar-chart-sharp' />
                        }
                        else {
                            return <Ionicons size={40} color={color} name='bar-chart-sharp' />
                        }
                    }
                }}
            />
        </Tab.Navigator>
    )
}