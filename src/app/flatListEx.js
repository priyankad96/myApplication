import React from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import {getUser} from "../appRedux/actions/userActions";

class Users extends React.Component {
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
    componentDidMount(){
        debugger;
        this.props.getUser();
    }

    onRefresh = () => {
        this.setState({ refreshing: true });

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





    render() {
        console.log(this.props.userList);
       // alert(this.props.userList);

        //const {userList}=this.props;

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

                />
            </SafeAreaView>
        );
    }
}
const mapStateToProps=(state)=>{

     const {userList}=state.user;
    return{
       userList
    };

};


export default connect(mapStateToProps,{
    getUser
})(Users)


