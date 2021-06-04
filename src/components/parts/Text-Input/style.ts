import styled from 'styled-components';
import { neutralColors, primaryColors } from '../../../theme';

interface InputProps {
    state?: string; //Pending,Success,Error
    label?: string;
}


const Input = styled.input<InputProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: 2px solid ${neutralColors.six};
    box-sizing: border-box;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: ${neutralColors.four};
`
export const InputIcon = styled.span<InputProps>`
    border-radius: 100px;
    background: ${props => {
        if (props.state) {
            if (props.state.toLowerCase() == 'success')
                return primaryColors.green;
            if (props.state.toLowerCase() == 'error')
                return neutralColors.five;
        }
        return primaryColors.blue;
    }};
`

export const SingleInput = styled(Input)`
    border-radius: 90px;
`

