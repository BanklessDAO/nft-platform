import styled from 'styled-components'

interface AvatarProps {
    size?: string; //tiny,small,medium,large
    backgroundColor?: string;
    image?: string;
}

export const Container = styled.div<AvatarProps>`
    width: ${props => {
        if(!props.size) return '96px'
        if(props.size.toLowerCase() === 'large') return '96px'
        if(props.size.toLowerCase() === 'medium') return '88px'
        if(props.size.toLowerCase() === 'small') return '77px'
        if(props.size.toLowerCase() === 'tiny') return '24px'
    }};
    height: ${props => {
        if(!props.size) return '96px'
        if(props.size.toLowerCase() === 'large') return '96px'
        if(props.size.toLowerCase() === 'medium') return '88px'
        if(props.size.toLowerCase() === 'small') return '77px'
        if(props.size.toLowerCase() === 'tiny') return '24px'
    }};
    border-radius: ${props => {
        if(!props.size) return '128px'
        if(props.size.toLowerCase() === 'large') return '128px'
        if(props.size.toLowerCase() === 'medium') return '88px'
        if(props.size.toLowerCase() === 'small') return '77px'
        if(props.size.toLowerCase() === 'tiny') return '24px'
    }};
    background: ${props => {
        return props.backgroundColor ? props.backgroundColor : 'none'
    }};
    background-image: url(${props => props.image ? props.image : '/images/avatar-1.png'});
    background-repeat: no-repeat;

`
