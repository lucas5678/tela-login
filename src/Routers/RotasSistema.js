import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'
import React from 'react';
import Dash from '../pages/Dash/dash'
const Tab = createBottomTabNavigator();

export function RouterDash() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Dash" component={Dash} /> 
        </Tab.Navigator>
    )
}