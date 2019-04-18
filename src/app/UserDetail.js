import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class UserDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'MovieDetail'
        };
    };
    constructor(props) {
        super(props);
        debugger;
        this.state = {
            userDetails: props.navigation.state.params.info
        }
    }
    render() {
        const { title, releaseYear } = this.state.userDetails;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>MovieTitle:{title}</Text>
                <Text>ReleaseYear:{releaseYear}</Text>

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




