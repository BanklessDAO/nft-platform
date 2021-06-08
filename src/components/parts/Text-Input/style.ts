import styled from 'styled-components';
import { neutralColors, primaryColors } from '../../../theme';

interface InputProps {
    state?: string; //Pending,Success,Error
    single?: boolean;
    label?: string;
}
export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const TextInput = styled.input<InputProps>`
    height: 45px;
    border: 2px solid ${props => {
        if (props.state == "success")
            return primaryColors.green
        else if (props.state == "error")
            return primaryColors.pink
        else if (props.state == "pending")
            return primaryColors.blue
        return neutralColors.six
    }};
    &:focus {
        border: 2px solid ${primaryColors.blue};
    };
    padding-left: 15px;
    outline: none;
    box-sizing: border-box;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: ${neutralColors.four};
    border-radius: ${props => {
        if (props.single) return '90px'
        return '12px'
    }};
`

export const InputIcon = styled.span<InputProps>`
    position: relative;
    right: 41px;
    border-radius: 100px;
    padding: 4px;
    color: ${props => {
        if (!props.single) return neutralColors.four
        return neutralColors.eight
    }};
    background: ${props => {
        if (!props.single) return neutralColors.eight
        if (props.state) {
            if (props.state.toLowerCase() == 'success')
                return primaryColors.green;
            if (props.state.toLowerCase() == 'error')
                return neutralColors.five;
        }
        return primaryColors.blue;
    }};
`
export const InputLabel = styled.label`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    color: ${neutralColors.five};
    padding-bottom: 5px;
`

