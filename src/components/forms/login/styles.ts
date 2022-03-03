import styled from 'styled-components/native'
import { Colors } from '../../../assets/whiteLabel/colors'


export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.main.secondary};
`

export const ViewInput = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Input = styled.TextInput `
    background-color: ${Colors.input.background.primary};
    width: 90%;
    height: 40px;
    margin-bottom: 15px;
    border-radius: 10px;
    color: #111;
    font-size: 17px;
    padding: 10px;
`

export const InputText = styled.Text `
    color: ${Colors.input.text.primary};
`

export const Button = styled.TouchableOpacity `
    width: 90%;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.button.background.primary};
    border-radius: 10px;
    margin: 20px 0 20px 0;
`

export const ButtonText = styled.Text `
    font-size: 17px;
    color: ${Colors.button.text.primary};
`

export const ButtonLabel = styled.TouchableOpacity `

`