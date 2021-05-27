import styled from 'styled-components'
import { colors, fontStyles, gradients } from 'src/theme'

export const TokenModal = styled.div<{active?: number | string}>`
  display: flex;
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 450px;
  max-height: 520px;
  list-style: none;
  background: ${gradients.grayred};
  color: ${colors.white};
  transform: ${({ active }) =>
    active ? 'translateY(0)' : 'translateY(-20px)'};
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  padding: 10px 25px 10px 30px;
  border: 1px solid ${colors.white};
  border-radius: 6px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.13);
`
export const TokenModalTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${colors.white};
  padding: 30px 10px;
`
export const TokenModalTitle = styled.h4`
  ${fontStyles.H3}
`
export const TokenModalClose = styled.img`
  cursor: pointer;
`
export const TokenModalBigRow = styled.div`
  border-bottom: 1px solid ${colors.white};
  width: 100%;
  padding-top: 30px;
  padding-bottom: 40px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 20px;
  }
  strong {
    ${fontStyles.H2}
  }
`
export const TokenModalBalanceRow = styled.div`
  border-bottom: 1px solid ${colors.white};
  width: 100%;
  margin-bottom: 15px;
`
export const TokenModalSupplyRow = styled.div`
  width: 100%;
`
export const TokenModalStatLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px 15px;
`
