import React from 'react'
import { View } from "react-native";
import { Container, Button, Text, Input, FormControl, Stack } from "native-base"

const Login = () => {
  return (
    <Container>
        <View>
            <FormControl>
                    <Input 
                        placeholder='email'
                    />
            </FormControl>
        </View>
    </Container>
  )
}

export default Login
