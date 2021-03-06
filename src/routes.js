import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '~/pages/Home';
import Issues from '~/pages/Issues';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Issues,
    },
    {
      headerLayoutPreset: 'center',
    },
  ),
);

export default Routes;
