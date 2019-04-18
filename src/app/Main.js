/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';


export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Button  title={"TextInput"} onPress={()=>this.props.navigation.navigate('Pizza')}/>
                <Button title={"DatePicker"} onPress={()=>this.props.navigation.navigate('ExDate')}/>
                <Button title={"StyleRotate"} onPress={()=>this.props.navigation.navigate('Rotate')}/>
                <Button title={"KeyBoardAvoidView"} onPress={()=>this.props.navigation.navigate('ExKeyboard')}/>
                <Button title={"Slider"} onPress={()=>this.props.navigation.navigate('ExSlider')}/>
                <Button title={"ListView"} onPress={()=>this.props.navigation.navigate('ExList')}/>
                <Button title={"Mask"} onPress={()=>this.props.navigation.navigate('ExMask')}/>
                <Button title={"WebView"} onPress={()=>this.props.navigation.navigate('ExWeb')}/>
                <Button title={"ClipBoard"} onPress={()=>this.props.navigation.navigate('ExClip')}/>
                <Button title={"Dimension"} onPress={()=>this.props.navigation.navigate('ExDim')}/>
                <Button title={"Modal"} onPress={()=>this.props.navigation.navigate('ExModal')}/>
                <Button title={"SectionView"} onPress={()=>this.props.navigation.navigate('ExSection')}/>
                <Button title={"Switch"} onPress={()=>this.props.navigation.navigate('ExSwitch')}/>
                <Button title={"DataFromAPI"} onPress={()=>this.props.navigation.navigate('ExAPI')}/>
                <Button title={"ActivityIndicator"} onPress={()=>this.props.navigation.navigate('ExActivity')}/>
                <Button title={"ScrollView"} onPress={()=>this.props.navigation.navigate('ExScroll')}/>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
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
