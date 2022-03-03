import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity} from "react-native";
import { LoginForm } from "../../components/forms/login";
import { SigninForm } from "../../components/forms/signin";
import { ButtonToggle, ButtonToggleText, KeyboardView, ViewLogo, ViewToggle } from "./styles";

export function Signin(){
    const [screenLogin, setScreenLogin] = useState(true)
    const handleToggleForm = () => {
        setScreenLogin(!screenLogin)
    }

    return (
        <KeyboardView>
            <ViewLogo>
                <Image
                    source={require('../../assets/img/logo.png')}
                    style={{width:150, height: 150}}
                />
            </ViewLogo>
            <ViewToggle>
                <ButtonToggle
                    onPress={!screenLogin ? handleToggleForm : null}
                    selected={screenLogin}
                >
                    <ButtonToggleText>Login</ButtonToggleText>
                </ButtonToggle>
                <ButtonToggle
                    onPress={screenLogin ? handleToggleForm : null}
                    selected={!screenLogin}
                >
                    <ButtonToggleText>SignUp</ButtonToggleText>
                </ButtonToggle>
            </ViewToggle>
            {screenLogin ? <LoginForm/> : <SigninForm/>}
        </KeyboardView>
    )
}