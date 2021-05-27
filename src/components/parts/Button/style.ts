import styled from 'styled-components'
import { colors, gradients } from 'src/theme'

const Button = styled.button<{shadow?: any, thin?: any, uppercase?: any}>`
  ${({ shadow }) => shadow && 'box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.13);'};
  padding: ${({ thin }) => (thin ? '5px 8px' : '8px 20px')};
  font-size: 19px;
  line-height: 26px;
  border-radius: 6px;
  text-transform: ${({ uppercase }) => (!uppercase ? 'none' : 'uppercase')};

  border-width: 1px;
  border-style: solid;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  transition: all ease 0.5s;
`

export const RedButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.red};
  border-color: ${colors.red};
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
      background: ${colors.redder};
      border-color: ${colors.redder};
    }`}
`

export const GrayButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.gray};
  border-color: ${colors.white};
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
      color: ${colors.gray};
      background: ${colors.lightGray};
    }`}
`

export const WhiteButton = styled(Button)`
  color: ${colors.black};
  background: ${colors.white};
  border-color: ${colors.red};
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
      color: ${colors.white};
      background: ${colors.red};
    }`}
`

export const PinkButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.pink};
  border-color: ${colors.red};
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
      background: ${colors.redder};
    }`}
`

export const GreenButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.lime};
  border-color: ${colors.green};
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
      background: ${colors.green};
    }`}
`

export const DiscordButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.discord};
  border-color: ${colors.white};
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
      color: ${colors.discord};
      background: ${colors.white};
    }`}
`

export const GradientButton = styled(Button)`
  color: ${colors.white};
  background: ${gradients.grayred};
  border-color: ${colors.white};
  ${({ disabled }) =>
    !disabled &&
    `&:hover {
      background: ${gradients.black};
    }`}
`
