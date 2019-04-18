import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View,SafeAreaView } from 'react-native';

export default class Pizza extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }


    render() {
        return (
            <SafeAreaView style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder='--type here for translate!'
                    onChangeText={(text) => this.setState({ text })}
                />
                <Text style={{ fontSize: 42, padding: 10 }}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>

            </SafeAreaView>
        );
    }
}
