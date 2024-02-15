import React, {useState} from 'react'
import { View, Text } from "react-native";
import { Button, Input, FormControl, Stack } from "native-base"
import { useToast } from 'native-base';

import { useNavigation } from '@react-navigation/native';

import globalStyles from '../styles/global';

const CrearCuenta = () => {
  const toast = useToast();
  //State form
  const [ nombre, guardarNombre ] = useState("");
  const [ email, guardarEmail ] = useState("");
  const [ password, guardarPassword ] = useState("");

  const [ mensaje , guardarMensaje ] = useState(null);

  const navigation = useNavigation();

  const handleSubmit = ()=>{
    //Validar
    if(nombre === "" || email === "" || password === ""){
      toast.show({
        title: "Todos los campos son obligatorios",
        placement: "bottom"
      })
      return;
    }
    //Password 6 caracteres

    //Crear usuario
  }

  return (
        <View style={[ globalStyles.contenedor, { backgroundColor: "#E84347"}]}>
          <View style={globalStyles.contenido}>
          <Text style={globalStyles.titulo}>
            NativeTask
          </Text>
          <FormControl >
              <Stack space={5} >
              <Stack marginX={5} style={globalStyles.input}>
                  <Input 
                    size={"md"}  
                    variant="underlined" 
                    p={2} 
                    placeholder="Nombre"
                    type='text'
                    onChangeText={ texto => guardarNombre(texto)}
                  />
                </Stack>
                <Stack marginX={5} style={globalStyles.input}>
                  <Input 
                    size={"md"} 
                    autoComplete='email'
                    variant="underlined" 
                    p={2} 
                    placeholder="Email"
                    type='email'
                    onChangeText={ texto => guardarEmail(texto)}
                  />
                </Stack>
                <Stack marginX={5} style={globalStyles.input}>
                  <Input 
                    size="md" 
                    variant="underlined"
                    p={2} 
                    placeholder="Password" 
                    type='password'
                    onChangeText={ texto => guardarPassword(texto)}
                  />
                </Stack>
              </Stack>
           </FormControl>

            <Button
              square 
              block
              marginX={5}
              style={globalStyles.boton}
              onPress={()=> {
                handleSubmit()
              }}
            >
              <Text style={globalStyles.botonTexto}>Crear Cuenta</Text>
            </Button>
         </View>
        </View>
  )
}

export default CrearCuenta
