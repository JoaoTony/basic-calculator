import styled from "styled-components/native";


import { colors } from "../../utils/colors";



export const Button = styled.TouchableOpacity<{ bgColor: string, width: any }>`
  width: ${({ width }) => width / 4};
  height: ${({ width }) => width / 4};
  background-color: ${colors.dark02};
  border-radius:  4px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: ${colors.gray02};
`;

