import styled from 'styled-components'
import { neutralColors } from '../../../theme';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
`
export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 80px 160px 0px;
    background: ${neutralColors.one}
`
export const Box = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 317px;
    width: 100%;
    padding: 0px;
`
export const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width:100%;
    height: 184px;
`
export const TopBarContent = styled.div`

`
export const BottomBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 0px 32px;
    margin: 48px 0px;
    width:100%;
    height: 85px;
`
export const BottomBarContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    height: 20px;
`
export const BottomBarContentRight = styled.div`

`
export const BottomBarContentLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 260px;
    height: 20px;
    margin: 0px 554px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    text-align: right;
    color: ${neutralColors.six};
`
export const Divider = styled.span`
  background: ${neutralColors.three};
  height: 1px;
  width: 100%;
`

