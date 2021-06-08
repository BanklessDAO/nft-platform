import * as S from './style';
const Avatar = ({
    image = "",
    backgroundColor = "",
    size = "",
}) => {
    return (
        <S.Container backgroundColor={backgroundColor} size={size} image={image} >
        </S.Container>
    )
};

export default Avatar
