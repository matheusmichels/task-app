import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';

import {
  Container,
  Button,
  Input,
  ButtonText,
  Text,
  Form,
  Icon
} from './styles';

import Top from '../../assets/images/top.png';
import Bottom from '../../assets/images/bottom.png';
import Dots from '../../assets/images/dots.png';
import Logo from '../../assets/images/logo.png';

export default class Login extends Component {
  handleLogin = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <Container>
        <Icon source={Top} height={100} width={100} style={{ right: 0 }} />
        <Icon source={Dots} width={45} height={45} style={{ top: 100 }} />
        <Icon
          source={Bottom}
          height={75}
          width={75}
          style={{ bottom: 0, left: 0 }}
        />
        <Icon
          source={Dots}
          width={45}
          height={45}
          style={{ bottom: 0, right: 0 }}
        />
        <Form>
          <Image
            source={Logo}
            resizeMode="contain"
            style={{ height: 75, width: 175 }}
          />
          <Input placeholder="Login" />
          <Input placeholder="Password" secureTextEntry />
          <Button onPress={this.handleLogin}>
            <ButtonText>Enter</ButtonText>
          </Button>
        </Form>
        <TouchableOpacity>
          <Text>Don't have account</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
