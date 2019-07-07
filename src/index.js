import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './routes';

YellowBox.ignoreWarnings(['ViewPagerAndroid', 'tintColor']);

const App = () => (
  <>
    <StatusBar backgroundColor="#5c6bc0" barStyle="light-content" />
    <Routes />
  </>
);

export default App;
