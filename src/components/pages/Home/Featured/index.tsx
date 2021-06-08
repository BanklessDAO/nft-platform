import * as S from './style';
import Avatar from '../../../parts/Avatar';
import { primaryColors } from '../../../../theme';

const FeaturedSection = () => {
    return (
        <>
            <S.Section>
                <Avatar size="large" />
            </S.Section>
            <S.Section>
                <Avatar image="/images/avatar-2-medium.png" size="medium" backgroundColor={primaryColors.pink} />
            </S.Section>
            <S.Section>
                <Avatar image="/images/avatar-2-tiny.png" size="tiny" backgroundColor={primaryColors.pink} />
            </S.Section>
        </>
    )
}
export default FeaturedSection