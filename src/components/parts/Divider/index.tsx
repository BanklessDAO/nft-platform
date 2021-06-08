import styled from 'styled-components';
import { neutralColors } from '../../../theme';

interface DividerProps {
    dark?: boolean;
    size?: number;
}

export const Divider = styled.div<DividerProps>`
  background: ${props => {
        if (props.dark) return neutralColors.three
        return neutralColors.six
    }};
  height: ${props => {
        if (props.size) {
            return props.size + 'px'
        }
        return '1px'
    }};
  width: 100%;
`

export default Divider