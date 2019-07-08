import React from 'react';
import { TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import { Container, Text, Avatar } from './styles';

import Menu from '../../assets/images/menu.svg';
import User from '../../assets/images/avatar.svg';

const Header = props => (
  <Container>
    <TouchableOpacity>
      <SvgUri width="40" height="40" source={Menu} style={{ marginLeft: 10 }} />
    </TouchableOpacity>
    <Text>Hello!</Text>
    <Avatar onPress={() => props.navigation.navigate('Login')}>
      <SvgUri width="40" height="40" source={User} />
    </Avatar>
  </Container>
);

export default Header;
