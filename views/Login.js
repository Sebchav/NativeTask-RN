import React from 'react'
import { View } from "react-native";
import { Container, Button, Text, Input, FormControl, Stack } from "native-base"

const Login = () => {
  return (
        <View>
          <Text textAlign={"center"} marginTop={3} fontSize="3xl">
            NativeTask
          </Text>
          <FormControl >
              <Stack space={5}>
                <Stack marginX={5}>
                  <FormControl.Label>Email</FormControl.Label>
                  <Input variant="underlined" p={2} placeholder="Email" type='email'/>
                </Stack>
                <Stack marginX={5}>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input variant="underlined" p={2} placeholder="Password" type='password'/>
                </Stack>
              </Stack>
           </FormControl>

            <Button
              square 
              block
              marginX={5}
              marginTop={5}
            >
              <Text>Iniciar Sesión</Text>
            </Button>

         <Text textAlign={"center"} marginTop={3}>Crear Cuenta</Text>
        
        </View>
  )
}

export default Login
