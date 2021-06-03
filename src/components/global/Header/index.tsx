import * as S from './style'
import * as Button from '../../parts/Button'
import {primaryColors} from '../../../theme';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.Divider />
      <S.NavContent>
        <S.Actions>
          <S.ActionButtons>
            <Button.Neutral size="" color={primaryColors.blue}> Upload </Button.Neutral>
            <Button.Dark size="" > Connect Wallet </Button.Dark>
          </S.ActionButtons>
        </S.Actions>
      </S.NavContent>
    </S.HeaderWrapper>
  )
}

export default Header
