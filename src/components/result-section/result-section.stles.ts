import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Container = styled.View`
  width: 100%;
  align-items: flex-end;
  padding-right: 20px;
`;

export const TextOperation = styled.Text`
  color: ${colors.gray02};
  font-size: 40px;
`; 

export const TextResult = styled.Text`
  color: ${colors.gray01};
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 30px;
`; 