import styled from 'styled-components/native';

export const Container = styled.View`
  height: 72px;
  margin-bottom: 10px;
  width: 100%;
  align-items: center;
  border-color: #dcdcdc;
  border-width: 1px;
  flex-direction: row;
`;

export const Status = styled.View`
  height: 100%;
  width: 6px;
  background-color: ${props => props.color};
`;

export const Task = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 10px;
`;

export const Deadline = styled.View`
  margin-left: auto;
  margin-right: 20px;
`;

export const Regular = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: ${props => props.size || 10}px;
`;

export const Bold = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: ${props => props.size || 18}px;
`;
