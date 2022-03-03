import React, { useState } from "react";
import { ViewInput, Input, Button, ButtonText, ButtonLabel } from "./styles";
import auth from '@react-native-firebase/auth'
import { Alert } from "react-native";

export function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false) 

    const handleErrorsLogin = (error) => {
        console.log(error.code)
        if (error.code  === 'auth/wrong-password') {
            Alert.alert('Email e/ou senha incorretos')
        }
    }

    const handleLogin = () => {
        setIsLoading(true)
        auth()
        .signInWithEmailAndPassword(email, password)
        // .then(() => {Alert.alert("Logado com sucesso")})
        .catch((error) => {handleErrorsLogin(error);setIsLoading(false)})
    }

    const handleForgotPassword = () => {
        auth()
        .sendPasswordResetEmail(email)
        .then(() => {Alert.alert("Verifique sua caixa de email")})
        .catch((error) => {console.log(error)})
    }

    return (
        <ViewInput>
            <Input
                placeholder="Email"
                autoCorrect={false}
                onChangeText={(value) => {setEmail(value)}}
                value={email}
                autoCapitalize="none"
            />
            <Input
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={(value) => {setPassword(value)}}
                value={password}
                secureTextEntry={true}
            />
            <Button
                onPress={handleLogin}
            >
                <ButtonText>Acessar</ButtonText>
            </Button>
            <ButtonLabel
                onPress={handleForgotPassword}
            >
                <ButtonText>Esqueci minha senha</ButtonText>
            </ButtonLabel>
        </ViewInput>
    )
}