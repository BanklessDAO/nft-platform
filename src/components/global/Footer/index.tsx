import * as S from './style'
import TextInput from '../../parts/Text-Input';

const Footer = () => {
  return (
    <S.Wrapper as="footer" >
      <S.Divider />
      <S.Content>
        <S.Box>
          <S.TopBar>
            <S.Column>
              <S.ColumnHeader>Join Newsletter</S.ColumnHeader>
              <TextInput label="Label Text" placeHolder="Enter Email Address.." single state="pending" />
            </S.Column>
          </S.TopBar>
          <S.BottomBar>
            <S.Divider />
            <S.BottomBarContent>
              <S.Copyright>Copyright &copy; {new Date().getFullYear()} Bankless LLC. All rights reserved </S.Copyright>
              <S.Disclaimer>We use cookies for better service. <S.DisclaimerAction href="#"> Accept</S.DisclaimerAction></S.Disclaimer>
            </S.BottomBarContent>
          </S.BottomBar>
        </S.Box>
      </S.Content>
    </S.Wrapper >
  )
}

export default Footer
