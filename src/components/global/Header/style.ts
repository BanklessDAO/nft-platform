import styled from 'styled-components'
import { neutralColors } from 'src/theme'

export const HeaderWrapper = styled.header`
  background: ${neutralColors.one};
  height: 81px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: 0px; 0px;
`
export const Divider = styled.span`
  background: ${neutralColors.three}
  height: 1px;
`
export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 160px;
  height: 80px;
`
export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  width: 573px;
  padding: 0px;
`
export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 0px;
  height: 40px;
`

export const SearchInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;
  text-align: left;
  padding: 10px 12px 10px 16px;
  border: 2px solid ${neutralColors.three};
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  width: 256px;
  background: ${neutralColors.one};
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: ${neutralColors.four};
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  height: 40px;
  margin: 0px 100px;
`
export const LeftContentItem = styled.a`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-decoration: none;
  color: #777E91;
  margin: 0px 32px;
`
export const LeftContentDivide = styled.span`
  width: 2px;
  height: 40px;
  background: #353945;
  border-radius: 2px;
  margin: 0px 32px;
`
export const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  height: 32px;

  margin: 0px 32px;
`
export const LogoBoxText = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 32px;
letter-spacing: -0.02em;
color: ${neutralColors.seven};
`
export const LogoBoxIcon = styled.img`
  position: relative;
  left: 70px;
  bottom: 23px;
`





