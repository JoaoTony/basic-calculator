import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.dark01};
  justify-content: flex-end;
  align-items: center;
  
`;

export const Text = styled.Text`
  font-size: 20px;
  font-family: Arial;
  color: ${colors.gray02};
`;