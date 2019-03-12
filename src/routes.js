import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '~/pages/Home';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
    },
    // {
    //   defaultNavigationOptions: {
    //     headerBackTitle: null,
    //   },
    // },
  ),
);

export default Routes;
