/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            language: '',

        }
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                enabled
            >

                <TextInput
                    placeholder="Email"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Username"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Confirm Password"
                    style={styles.input}
                />

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    input:{
        width:300,
        backgroundColor:'powderblue',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        height:40
    }
});
