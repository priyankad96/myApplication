import { createStackNavigator, createAppContainer } from 'react-navigation';
import UserDetail from '../app/UserDetail';
import Users from '../app/User';

const AppNavigator = createStackNavigator({
    list: Users,
    userDetails: UserDetail

});
const NavigationContainer = createAppContainer(AppNavigator)
export default NavigationContainer;
