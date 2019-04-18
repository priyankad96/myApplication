import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button, Alert, ActivityIndicator } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 100,
                    padding: 20,
                    justifyContent: 'center'
                }}>
                <ActivityIndicator size='large' color='#00F' animating={true}></ActivityIndicator>
                <Button
                    onPress={() => Alert.alert('hi')}
                    title="ActivityIndicator"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View >
        );
    }
}