import { NONAME } from 'node:dns';
import styled from 'styled-components';
import {neutralColors, primaryColors} from '../../../theme';

interface BadgeProps {
    color?: string;
    ghost?: boolean;
}

export const Badge = styled.div<BadgeProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 8px 6px;
    border-radius: 4px;
    ${({ ghost, color }) => ghost && `
        border: 2px solid ${color ? color : neutralColors.two};
        box-sizing: border-box;
    `};
    background: ${props => {
        console.log('props')
        console.log(props)
        if(props.ghost) return 'none'
        if(props.color) return props.color
        return neutralColors.two;
    }};
    max-width: 80px;
`
export const BadgeText = styled.strong<BadgeProps>`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    color: ${props => {
        if(props.ghost) return props.color ? props.color : neutralColors.two
        return neutralColors.eight
    }};
    
`