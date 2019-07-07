import React, { Component } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import SvgUri from 'react-native-svg-uri';

import Home from './Home';
import Tasks from './Tasks';
import Header from '../../components/Header';

import { Floating } from './styles';

import Plus from '../../assets/images/plus.svg';
import TaskModal from '../../components/TaskModal';

const Navigator = createMaterialTopTabNavigator(
  {
    Home,
    Tasks
  },
  {
    initialRouteName: 'Tasks',
    tabBarOptions: {
      barStyle: '#fff',
      showIcon: false,
      showLabel: false,
      tabStyle: {
        backgroundColor: '#00e5ff'
      },
      indicatorStyle: {
        opacity: 0
      }
    }
  }
);

export default class Main extends Component {
  static router = Navigator.router;

  state = {
    modalVisible: false
  };

  handleLogin = () => {
    this.props.navigation.navigate('Home');
  };

  handleModal = visible => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Header navigation={navigation} />
        <Navigator navigation={navigation} />
        <Floating onPress={() => this.handleModal(true)}>
          <SvgUri width="25" height="25" source={Plus} />
        </Floating>
        <TaskModal
          visible={this.state.modalVisible}
          closeModal={() => this.handleModal(false)}
        />
      </View>
    );
  }
}
