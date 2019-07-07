import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #5c6bc0;
`;

export const Form = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
  fontSize: 20
})`
  border-bottom-color: #fff;
  border-bottom-width: 1px;
  width: 70%;
  padding: 9.5px;
  color: #fff;
  font-size: 20px;
  font-family: 'Montserrat-Regular';
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  margin-top: 38.5px;
  width: 271px;
  height: 58px;
  background-color: #00e5ff;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  text-decoration: underline;
  align-self: center;
  margin-bottom: 50px;
`;

export const Icon = styled.Image.attrs({
  resizeMode: 'contain'
})`
  position: absolute;
  height: ${props => props.height || 25}px;
  width: ${props => props.width || 25}px;
`;
