import { primaryColors } from './../../../theme';
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
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
`
export const ColumnHeader = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${neutralColors.eight}
`


export const BottomBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 0px 32px;
    width:100%;
    height: 85px;
`
export const BottomBarContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    height: 20px;
`
export const Copyright = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: flex-start;
    padding: 0px;
    width: 292px;
    height: 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: ${neutralColors.four};
`
export const Disclaimer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: flex-end;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    text-align: right;
    color: ${neutralColors.six};
`
export const DisclaimerAction = styled.a`
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;
    text-alight: right;
    color: ${primaryColors.blue};
    line-height: 20px;
    padding-left:6px;

`

