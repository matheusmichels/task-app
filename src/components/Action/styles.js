import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  height: 120px;
  width: 40%;
  border-width: 2px;
  border-color: #c9c9c9;
  border-width: 1px;
  border-radius: 5px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #5c6bc0;
  margin-top: 10px;
  font-size: 12px;
  font-family: 'Montserrat-Regular';
`;
