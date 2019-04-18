import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import {appReducer} from './appRedux/reducers/index';
import AppNavigator from './navigation/appNavigator';
import thunk from 'redux-thunk';

let store=createStore(appReducer,applyMiddleware(thunk));

export default class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
             <AppNavigator/>
            </Provider>
    );
}
}