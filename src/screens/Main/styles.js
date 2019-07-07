import styled from 'styled-components/native';

export const Floating = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: #5c6bc0;
  margin: 0 25px 25px 0;
  border-radius: 50px;
  align-self: flex-end;
  height: 55px;
  width: 55px;
  align-items: center;
  justify-content: center;
`;
