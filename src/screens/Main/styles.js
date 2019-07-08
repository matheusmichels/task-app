import styled from 'styled-components/native';

export const Floating = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  position: absolute;
  right: 25px;
  bottom: 25px;
  background-color: #5c6bc0;
  border-radius: 50px;
  align-self: flex-end;
  height: 55px;
  width: 55px;
  align-items: center;
  justify-content: center;
`;
