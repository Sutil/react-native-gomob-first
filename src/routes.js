import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';

export default createAppContainer(
  createStackNavigator(
    {
      UserList,
      UserDetails,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        headerStyle: {
          backgroundColor: '#49265c',
        },
      },
    },
  ),
);
