import * as S from './style';

import React from 'react';


const Badge = ({
    text = "Badge",
    color = "",
    ghost = false
}) => {
    return (
        <S.Badge color={color} ghost={ghost}>
            <S.BadgeText ghost={ghost} color={color}>{text}</S.BadgeText>
        </S.Badge>
    )
};

export default Badge
