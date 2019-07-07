import React from 'react';
import { ScrollView } from 'react-native';

import Action from '../../../components/Action';
import { Container, Title } from './styles';

import Task from '../../../assets/images/task.svg';

const Home = () => (
  <>
    <Title>Home</Title>
    <ScrollView>
      <Container>
        <Action title="Task List" src={Task} />
        <Action title="Task Page" src={Task} />
        <Action title="New Task" src={Task} />
        <Action title="Task Progress" src={Task} />
        <Action title="Late Task" src={Task} />
        <Action title="Comments" src={Task} />
      </Container>
    </ScrollView>
  </>
);

export default Home;
