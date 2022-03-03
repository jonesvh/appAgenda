import styled from 'styled-components/native'
import { Colors } from '../../assets/whiteLabel/colors'


export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.main.secondary};
`

export const ViewLogo = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${Colors.main.primary};
    /* border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px; */
`

export const ViewToggle = styled.View `
    flex-direction: row;
    align-items: stretch;
`

export const ButtonToggle = styled.TouchableOpacity `
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: ${props => props.selected ? Colors.button.background.primary : Colors.button.background.secondary};
`

export const ButtonToggleText = styled.Text `
    font-size: 17px;
`