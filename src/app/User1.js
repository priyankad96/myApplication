import React from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';


export default class Users extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'MovieList'
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            userList: []
        }
    }
    onRefresh = () => {
        this.setState({ refreshing: true });
        this.makeAPICall();
    }

    componentDidMount() {
        this.makeAPICall();

    }
    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => this.onRowClick(item)}>
                <View key={index}>
                    <Text>{item.id}--{item.title}</Text>
                </View>
            </TouchableOpacity>

        )
    }
    onRowClick = (item) => {
        //alert(JSON.stringify(item));

        this.props.navigation.navigate('userDetails', { info: item });
        // this.props.navigation.navigate('userDetails');
    }
    makeAPICall = () => {
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    refreshing: false,
                    userList: responseJson.movies,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });

    }





    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <SafeAreaView style={{ flex: 1, paddingTop: 20 }} >
                <FlatList
                    data={this.state.userList}
                    renderItem={this.renderItem}
                    onRefresh={this.onRefresh}
                    refreshing={this.state.refreshing}
                    keyExtractor={({ id }, index) => id}
                    style={{border:1,borderRadius:5,margin:5}}
                />
            </SafeAreaView>
        );
    }
}



