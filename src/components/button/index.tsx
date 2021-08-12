import React, {FC} from "react";
import { ButtonProps, AditioanalStyledProps }from './button.types'
import { useWindowDimensions } from 'react-native';

import { Button as Container, ButtonText } from './button.styles'

const Button: FC<ButtonProps & Omit<AditioanalStyledProps, 'width' | 'height'>> = 
({ text, 
   type, 
   leftTop = false, 
   rightTop = false
}) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  return (
    <Container 
      activeOpacity={0.7}
      width={width} 
      height={height / 2} 
      type={type} leftTop={leftTop} 
      rightTop={rightTop}>
      <ButtonText type={type}>{text}</ButtonText>
    </Container>
  )
}

export default Button