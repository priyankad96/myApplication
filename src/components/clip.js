/*This is an Example of React Native Copy to Clipboard*/
import React from 'react';
//import React in our app
import { StyleSheet, Text, View, Button, TextInput, Clipboard } from 'react-native';
//import all the needed React Native components

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            clipboardContent: null,
        };
    }
    readFromClipboard = async () => {
        //To get the text from clipboard
        const clipboardContent = await Clipboard.getString();
        this.setState({ clipboardContent });
    };
    writeToClipboard = async () => {
        //To copy the text to clipboard
        await Clipboard.setString(this.state.text);
        alert('Copied to Clipboard!');
    };
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder="Type here..."/>
                <Button
                    onPress={this.writeToClipboard}
                    title="Copy to Clipboard"/>
                <Text style={styles.boldText}>Clipboard Contents: </Text>
                <Text>{this.state.clipboardContent}</Text>
                <Button
                    onPress={this.readFromClipboard}
                    title="Paste from Clipboard"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop:50,
    },
    boldText: {
        fontWeight: '600',
        marginTop:60,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        paddingHorizontal: 10,
        marginBottom:20,
    },
});