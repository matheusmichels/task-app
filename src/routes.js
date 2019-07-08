import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './screens/Login';
import Main from './screens/Main';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Login,
      Main
    },
    {
      headerMode: 'none'
    }
  )
);

export default Routes;
