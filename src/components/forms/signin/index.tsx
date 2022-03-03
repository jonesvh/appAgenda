import React, { useState } from "react";
import {ViewInput, Input, Button, ButtonText } from "./styles";
import auth from '@react-native-firebase/auth';
import { Alert } from "react-native";

export function SigninForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleNewAccount = () => {
        setIsLoading(true);
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            Alert.alert("Conta", "Cadastrado com sucesso!")
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false))
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
            <Input
                placeholder="Repetir senha"
                autoCorrect={false}
                onChangeText={(value) => {setRepeatedPassword(value)}}
                value={repeatedPassword}
                secureTextEntry={true}
            />
            <Button
                onPress={handleNewAccount}
                isLoading={isLoading}
            >
                <ButtonText>Cadastrar</ButtonText>
            </Button>
        </ViewInput>
    )
}