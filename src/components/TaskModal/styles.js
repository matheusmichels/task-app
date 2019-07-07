import styled from 'styled-components/native';

export const Container = styled.View`
  background: rgba(0, 0, 0, 0.5);
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  background-color: #fff;
  opacity: 1;
  width: 90%;
  height: 375px;
`;

export const Title = styled.Text`
  color: #828282;
  font-size: 18px;
  font-family: 'Montserrat-Bold';
  margin: 15px 0 0 20px;
`;

export const Separator = styled.View`
  margin-top: 15px;
  margin-bottom: ${props => (props.onlyTop ? 0 : 15)}px;
  border-bottom-color: #dcdcdc;
  border-bottom-width: 1px;
`;

export const Regular = styled.Text`
  width: 100%;
  font-family: 'Montserrat-Regular';
  margin-left: 20px;
  color: ${props => (props.white ? '#fff' : '#828282')};
  font-size: ${props => props.size || 14}px;
`;

export const TaskName = styled.Text`
  font-family: 'Montserrat-Bold';
  margin: 10px 0 0 20px;
`;

export const Members = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AddButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  margin-left: auto;
  margin-right: 15px;
  height: 22px;
  width: 73px;
  border-radius: 10px;
  border-color: #00e5ff;
  border-width: 1px;
  align-items: center;
  justify-content: center;
`;

export const AddText = styled.Text`
  color: #00e5ff;
  font-size: 10px;
`;

export const Deadline = styled.View`
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Selector = styled.TouchableOpacity`
  height: 30px;
  width: 65px;
  border-radius: 5px;
  border-color: #828282;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const SwitchContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const EditorButtons = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`;

export const CancelButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})``;

export const ConfirmButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  margin: 0 15px;
  width: 80px;
  height: 30px;
  background-color: #00e5ff;
  align-items: center;
  justify-content: center;
`;
