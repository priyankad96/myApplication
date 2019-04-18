import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet ,SafeAreaView} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

class App extends Component {
    componentDidMount() {
        lor(this);
    }

    componentWillUnmount() {
        rol();
    }

    render() {
        const styles = StyleSheet.create({
            container: { flex: 1 },
            textWrapper: {
                height: hp('70%'),
                width: wp('80%')
            },
            myText: { fontSize: hp('5%') }
        });

        return (
            <SafeAreaView style={[styles.container,{backgroundColor:'skyblue'}]}>
                <View style={styles.textWrapper}>
                    <Text style={styles.myText}>RotateMe</Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default App;