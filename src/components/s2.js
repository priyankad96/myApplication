import {Component} from "react";
import {View} from "react-native";
import React from "react";
import SwitchExample from '../components/s1'

export default class App extends Component<Props> {

    constructor() {
        super();
        this.state = {
            switch1Value: true,
        }
    }
    toggleSwitch1 = (value) => {
        this.setState({switch1Value: value})
        console.log('Switch 1 is: ' + value)
    }
    render() {
        return (
            <View>
                <SwitchExample
                    toggleSwitch1 = {this.toggleSwitch1}
                    switch1Value = {this.state.switch1Value}/>
            </View>
        );
    }
}