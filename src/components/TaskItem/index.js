import React from 'react';
import SvgUri from 'react-native-svg-uri';

import { Container, Task, Status, Regular, Bold, Deadline } from './styles';

const TaskItem = props => {
  const { task, title, datetime, avatar, color } = props;

  return (
    <Container>
      <Status color={color} />
      <SvgUri
        width="40"
        height="40"
        source={require('../../assets/images/avatar.svg')}
        style={{ marginLeft: 12 }}
      />
      <Task>
        <Regular>{task}</Regular>
        <Bold>{title}</Bold>
      </Task>
      <Deadline>
        <Regular>Deadline</Regular>
        <Bold size={8}>{datetime}</Bold>
      </Deadline>
    </Container>
  );
};

export default TaskItem;
