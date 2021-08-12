import React, {FC} from "react";
import { ButtonProps }from './button.types'
import { useWindowDimensions } from 'react-native';


import { Button as Container, ButtonText } from './button.styles'

const Button: FC<ButtonProps> = ({ text }) => {
  const width = useWindowDimensions().width;


  return (
  <Container bgColor="ss" width={width}>
    <ButtonText>{text}</ButtonText>
  </Container>
  )
}

export default Button