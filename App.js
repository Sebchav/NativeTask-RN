import React from 'react';
import 'react-native-gesture-handler';

import Login from './views/Login';
import CrearCuenta from './views/CrearCuenta';

import { NativeBaseProvider } from 'native-base';

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator();

import {Text} from 'react-native';

const App = () => {
  return (
    <>
      <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              title: "Iniciar Sesión",
              headerShown: false
            }}
          />

        <Stack.Screen
            name='CrearCuenta'
            component={CrearCuenta}
            options={{
              title: "Crear Cuenta",
              headerStyle: {
                backgroundColor: "#28303B"
              },
              headerTintColor: "#FFF",
              headerTitleStyle: {
                fontWeight: "bold"
              }

            }}
          />

        
        </Stack.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};

export default App;
