import React, { Component } from 'react';
import { FlatList } from 'react-native';

import TaskItem from '../../../components/TaskItem';
import { Container, Title } from './styles';

export default class Tasks extends Component {
  state = {
    data: [
      {
        id: 1,
        task: 'Task 01',
        title: 'Make wireframes',
        datetime: '18/02 21:00',
        color: '#ff6565'
      },
      {
        id: 2,
        task: 'Task 02',
        title: 'Video apps redesign',
        datetime: '18/02 21:00',
        color: '#ffdd00'
      },
      {
        id: 3,
        task: 'Task 03',
        title: 'Duotones site',
        datetime: '18/02 21:00',
        color: '#65e865'
      },
      {
        id: 4,
        task: 'Task 04',
        title: 'Infographic',
        datetime: '18/02 21:00',
        color: '#ff6565'
      },
      {
        id: 5,
        task: 'Task 05',
        title: 'app interface',
        datetime: '18/02 21:00',
        color: '#ff6565'
      }
    ],
    refreshing: false
  };

  loadTasks = () => {
    this.setState({ refreshing: true });

    this.setState({ data: this.state.data, refreshing: false });
  };

  render() {
    const { data, refreshing } = this.state;

    return (
      <>
        <Title>All Tasks</Title>
        <Container>
          <FlatList
            keyExtractor={task => String(task.id)}
            data={data}
            onRefresh={this.loadTasks}
            refreshing={refreshing}
            renderItem={({ item }) => {
              return (
                <TaskItem
                  task={item.task}
                  title={item.title}
                  datetime={item.datetime}
                  avatar={item.avatar}
                  color={item.color}
                />
              );
            }}
          />
        </Container>
      </>
    );
  }
}
