import * as S from './style'
import * as Button from '../../parts/Button'
import { primaryColors } from '../../../theme';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.Divider />
      <S.NavContent>
        <S.LeftContent>
          <S.LogoBox>
            <S.LogoBoxIcon src="/images/example-logo.png"></S.LogoBoxIcon>
            <S.LogoBoxText>Bankless DAO</S.LogoBoxText>
          </S.LogoBox>
          <S.LeftContentDivide></S.LeftContentDivide>
          <S.LeftContentItem href="#">Discover</S.LeftContentItem>
          <S.LeftContentItem href="#">How it work</S.LeftContentItem>
        </S.LeftContent>
        <S.Actions>
          <S.SearchInput type="text" placeholder="Search" />
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
