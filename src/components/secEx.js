/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SectionList } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
const overrideRenderItem = ({ item, index, section: { title, data } }) => <Text key={index}>Override{item}</Text>

type Props = {};
export default class App extends Component<Props> {



    render() {
        return (
            <View style={styles.container}>
              {/*  <SectionList
                    renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={{fontWeight: 'bold'}}>{title}</Text>
                    )}
                    sections={[
                        {title: 'Title1', data: ['item1', 'item2']},
                        {title: 'Title2', data: ['item3', 'item4']},
                        {title: 'Title3', data: ['item5', 'item6']},
                    ]}
                    keyExtractor={(item, index) => item + index}
                />*/}



                <SectionList
                    renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                    sections={[
                        { title: 'Title1', data: ['item1', 'item2'], renderItem: overrideRenderItem },
                        { title: 'Title2', data: ['item3', 'item4'] },
                        { title: 'Title3', data: ['item5', 'item6'] },
                    ]}
                />


            </View>
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
});
