import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Image,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Platform,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
//import ResponsiveImage from 'react-native-responsive-image';

export default class App extends Component {
    /*componentDidMount() {
        lor(this);
    }

    componentWillUnmount() {
        rol();
    }*/
    render() {
        return (

            <View style={styles.container}>
                <ScrollView>
                <View style={styles.luzyStyle} >
                    <Image source={require('./../../img/luzy_logo.png')} style={{ height: 70, width: 100 }} resizeMode='contain'></Image>
                    <Image source={require('./../../img/menu_icon.png')} style={{ height: 60, width: 25 }} resizeMode='contain'></Image>
                </View>

                <View style={styles.SignInStyle} >
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.LinotteBoldStyle}>
                            SIGN IN
                        </Text>
                        <Text style={{ fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold', fontSize: 12, color: '#FFFFFF' }}>
                            with LUZY account.
                        </Text>
                    </View>

                    <Text style={{ fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold', fontSize: 14, color: '#FFFFFF', marginBottom: 5 }}>
                        USERNAME:
                        </Text>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: '#061C40', height: 40 }}>
                        <Image source={require('./../../img/placeholeder_email_icon.png')} style={{ height: 25, width: 30, padding: 10, margin: 5, resizeMode: 'stretch', alignItems: 'center' }} ></Image>
                        <TextInput
                            style={{ flex: 1, color: '#FFFFFF' }}
                            placeholder="Your email address"
                            placeholderTextColor='#FFFFFF'
                            underlineColorAndroid='transparent'
                        >
                        </TextInput>
                    </View>
                    <Text style={{ fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold', fontSize: 14, color: '#FFFFFF', marginBottom: 5 }}>
                        PASSWORD:
                        </Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: '#061C40', height: 40 }}>
                        <Image source={require('./../../img/placeholeder_password_icon.png')} style={{ height: 25, width: 22, padding: 10, margin: 5, resizeMode: 'stretch', alignItems: 'center' }} ></Image>

                        <TextInput
                            secureTextEntry={true}
                            style={{ flex: 1, color: '#FFFFFF' }}
                            placeholder="Your password"
                            placeholderTextColor='#FFFFFF'
                            underlineColorAndroid='transparent'
                        >
                        </TextInput>
                        <Image source={require('./../../img/show_password_off_icon.png')} style={{ height: 20, width: 25, padding: 10, margin: 5, resizeMode: 'stretch', alignItems: 'center' }} ></Image>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                         <Image source={require('./../../img/remember_me_checkmark_icon.png')} style={{ height: 15, width: 15, padding: 10, margin: 5, resizeMode: 'stretch', alignItems: 'center' }} ></Image>
                        <View style={{
                            height: 20, width: 20, borderRadius: 5, borderColor: '#FFFFFF',
                            borderWidth: 2

                        }}></View>
                        <Text style={{ flex: 1, fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold', fontSize: 12, color: '#FFFFFF', padding: 6 }}>
                            Remember me
                        </Text>
                        <Text style={{ fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold', fontSize: 12, color: '#FFFFFF' }}>
                            Forgot your password
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.LoginButtonStyle} >
                        <Text style={{ fontFamily: Platform.OS === 'ios' ? 'Linotte-Bold' : 'Linotte_Bold', fontSize: 14, color: '#FFFFFF' }}> LOGIN </Text>
                    </TouchableOpacity>

                </View>
                <View style={{ height: hp('20%'), backgroundColor: '#204993', paddingLeft: '8%', paddingRight: '8%', justifyContent: 'center' }} >
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontFamily: Platform.OS === 'ios' ? 'Linotte-Bold' : 'Linotte_Bold', fontSize: 34, color: '#FFFFFF' }}>
                            SIGN IN
                            </Text>
                        <Text style={{ fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold', fontSize: 12, color: '#FFFFFF' }}>
                            with your social media account.
                            </Text>
                    </View>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', margin: 6 }}>

                        <Image source={require('./../../img/facebook_icon.png')} style={{ height: 55, width: 55, padding: 10, margin: 6, resizeMode: 'stretch', alignItems: 'center' }} ></Image>
                        <Image source={require('./../../img/twitter_icon.png')} style={{ height: 55, width: 55, padding: 10, margin: 6, resizeMode: 'stretch', alignItems: 'center' }} ></Image>
                        <Image source={require('./../../img/instagram_icon.png')} style={{ height: 55, width: 55, padding: 10, margin: 6, resizeMode: 'stretch', alignItems: 'center' }} ></Image>

                    </View>
                </View >
                <View style={{ height: hp('30%'), backgroundColor: '#FFFFFF', paddingLeft: '8%', paddingRight: '8%', paddingBottom: '2%', paddingTop: '3%', justifyContent: 'center' }} >
                    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ fontFamily: Platform.OS === 'ios' ? 'Linotte-Bold' : 'Linotte_Bold', fontSize: 34, color: '#204993' }}>
                                SIGN UP
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.AccountButtonStyle} >
                            <Text style={{ fontFamily: Platform.OS === 'ios' ? 'Linotte-Bold' : 'Linotte_Bold', fontSize: 14, color: '#FFFFFF' }}> CREATE ACCOUNT </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', margin: 5 }}>

                            <Image source={require('./../../img/about_us_icon.png')} style={{ height: 15, width: 15, padding: 10, margin: 5, resizeMode: 'stretch', alignItems: 'center' }} ></Image>
                            <Text style={{ flex: 1, fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold', fontSize: 12, color: '#B5C8DD' }}>
                                About us
                        </Text>
                            <Image source={require('./../../img/need_help_icon.png')} style={{ height: 15, width: 15, padding: 10, margin: 5, resizeMode: 'stretch', alignItems: 'center' }} ></Image>
                            <Text style={{ fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold', fontSize: 12, color: '#B5C8DD' }}>
                                Need help?
                        </Text>


                        </View>

                    </View>

                </View >
                </ScrollView>
            </View >


        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',

    },
    luzyStyle: {
        height: hp('10%'),
        backgroundColor: '#204993',
        paddingLeft: '8%',
        paddingRight: '8%',
        paddingTop:'15%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    SignInStyle: {
        height: hp('40%'),
        backgroundColor: '#031529',
        paddingLeft: '8%',
        paddingRight: '8%',
        paddingBottom: '3%',
        paddingTop: '2%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    LinotteBoldStyle: {
        fontFamily: Platform.OS === 'ios' ? 'Linotte-Bold' : 'Linotte_Bold',
        fontSize: 34,
        color: '#FFFFFF'
    },
    LoginButtonStyle: {
        alignItems: 'center',
        backgroundColor: '#40B6F3',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1
    },
    AccountButtonStyle: {
        alignItems: 'center',
        backgroundColor: '#204993',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1
    },

});