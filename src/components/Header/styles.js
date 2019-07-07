import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #5c6bc0;
  height: 85px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  margin-left: 20px;
  color: #fff;
  font-size: 20px;
  font-family: 'Montserrat-Regular';
`;

export const Avatar = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  margin-left: auto;
  margin-right: 10px;
`;
