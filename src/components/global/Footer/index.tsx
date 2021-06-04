import NextLink from 'next/link'

import * as S from './style'

const Footer = () => {
  return (
    <S.Wrapper as="footer" >
      <S.Divider/>
      <S.Content>
        <S.Box>
          <S.TopBar>

          </S.TopBar>

          <S.BottomBar>
            <S.Divider />
          </S.BottomBar>
        </S.Box>
      </S.Content>
    </S.Wrapper >
  )
}

export default Footer
