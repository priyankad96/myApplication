import { createStackNavigator, createAppContainer } from 'react-navigation';
import App1 from '../app/Main';
import Pizza  from '../components/TextEx';
import ExDate from  '../app/dateEx';
import Rotate from '../app/StyleActivity';
import ExKeyboard from'../components/keyAvoid';
import ExSlider from'../components/sliderEx';
import ExList from '../app/listViewEx';
import ExMask from '../app/maskEx';
import ExWeb from '../app/webview';
import ExClip from'../components/clip';
import  ExDim from'../components/dimensionEx';
import ExModal from'../components/modal';
import ExSection from'../components/secEx';
import ExSwitch from'../components/switchEx';
import ExAPI from'../components/network';
import ExActivity from'../components/Ex';
import ExScroll from'../components/ScrollEx';

const AppNavigator = createStackNavigator({
    Main: App1,
    Pizza,
    ExDate,
    Rotate,
    ExKeyboard,
    ExSlider,
    ExList,
    ExMask,
    ExWeb,
    ExClip,
    ExDim,
    ExModal,
    ExSection,
    ExSwitch,
    ExAPI,
    ExActivity,
    ExScroll


},
    {
        initialRouteName: "Main"
    }
);

const NavigationContainer = createAppContainer(AppNavigator)
export default NavigationContainer;