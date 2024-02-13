import React from 'react'
import { View, Text } from "react-native";
import { Container, Button, Input, FormControl, Stack} from "native-base"

import { useNavigation } from '@react-navigation/native';

import globalStyles from '../styles/global';

const CrearCuenta = () => {

  const navigation = useNavigation();

  return (
        <View style={[ globalStyles.contenedor, { backgroundColor: "#E84347"}]}>
          <View style={globalStyles.contenido}>
          <Text style={globalStyles.titulo}>
            NativeTask
          </Text>
          <FormControl >
              <Stack space={5} >
              <Stack marginX={5} style={globalStyles.input}>
                  <Input size={"md"}  variant="underlined" p={2} placeholder="Nombre" type='text'/>
                </Stack>
                <Stack marginX={5} style={globalStyles.input}>
                  <Input size={"md"} autoComplete='email' variant="underlined" p={2} placeholder="Email" type='email'/>
                </Stack>
                <Stack marginX={5} style={globalStyles.input}>
                  <Input size="md" variant="underlined" p={2} placeholder="Password" type='password'/>
                </Stack>
              </Stack>
           </FormControl>

            <Button
              square 
              block
              marginX={5}
              style={globalStyles.boton}
            >
              <Text style={globalStyles.botonTexto}>Crear Cuenta</Text>
            </Button>

         </View>
        </View>
  )
}

export default CrearCuenta
