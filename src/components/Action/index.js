import React from 'react';
import SvgUri from 'react-native-svg-uri';

import { Container, Title } from './styles';

const Action = ({ title, src }) => (
  <Container>
    <SvgUri width="30" height="30" source={src} style={{ marginLeft: 10 }} />
    <Title>{title}</Title>
  </Container>
);

export default Action;
