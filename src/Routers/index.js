import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BemVindo from '../pages/BemVindo/'
import Login from '../pages/Login/'
import Dash from '../pages/Dash'
const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BemVindo"
                component={BemVindo}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown:false}}
            />
              <Stack.Screen
                name="Dash"
                component={Dash}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    );
}
