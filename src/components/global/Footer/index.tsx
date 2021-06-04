import NextLink from 'next/link'

import * as S from './style'

const Footer = () => {
  return (
    <S.Wrapper as="footer" >
      <S.Divider />
      <S.Content>
        <S.Box>
          <S.TopBar>
            <S.Column>
              <S.ColumnHeader>Join Newsletter</S.ColumnHeader>
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
