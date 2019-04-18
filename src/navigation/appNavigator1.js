import { createStackNavigator, createAppContainer } from 'react-navigation';
import UserDetail from '../app/UserDetail1';
import Users from '../app/User1';

const AppNavigator = createStackNavigator({
    list: Users,
    userDetails: UserDetail

});
const NavigationContainer = createAppContainer(AppNavigator)
export default NavigationContainer;
