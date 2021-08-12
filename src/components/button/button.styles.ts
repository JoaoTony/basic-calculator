import styled from "styled-components/native";

import { colors } from "../../utils/colors";
import { ButtonProps, AditioanalStyledProps } from './button.types'

export const Button = styled.TouchableOpacity<AditioanalStyledProps & Omit<ButtonProps, "text">>`
  width: ${({ width }) => width / 4 - 2};
  height:${({ type, height }) => type === 'equal' ? 
    (height / 4.5 * 2 + 2) : (height / 4.5)};
  background-color:${({ type }) => 
    type === 'equal' && colors.yellow ||  
    type === 'number' && colors.dark02 ||  
    type === 'operator' && colors.dark03};
  border-radius:  6px;
  border-top-left-radius: ${({ leftTop }) => leftTop ? 30 : '6px'};
  border-top-right-radius: ${({  rightTop }) => rightTop ? 30 : '6px'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px;
`;

export const ButtonText = styled.Text<Omit<ButtonProps, "text">>`
  font-size: 25px;
  color: ${({ type }) => type === 'operator' ? colors.yellow : colors.gray02};
`;

