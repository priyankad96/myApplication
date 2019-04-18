import React,{PureComponent} from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity, SafeAreaView ,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import {getUser} from "../appRedux/actions/userActions";

class Users extends PureComponent {
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
       // debugger;
        console.log("componentDidMount");

        this.props.getUser();
    }

    componentWillReceiveProps(nextProps, nextState) {
        console.log("componentWillReceiveProps");
        console.log(nextProps);
    }
    /*shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");


        if(JSON.stringify(this.props) !== JSON.stringify(nextProps) ||
            JSON.stringify(this.state) !== JSON.stringify(nextState)  ){
            return true;
        }
        return false;
    }
*/
    renderEmpty=()=>{
        return <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
            <Text style={{fontSize:15}}>
                {"No Data Found"}
            </Text>
        </View>
    }

    onRefresh = () => {
        this.setState({ refreshing: true });
        this.props.getUser().then(res=>{
            this.setState({ refreshing: false });
            })
    }


    renderItem = ({ item, index }) => {
        const {rowContainer}=styles;
        return (
            <TouchableOpacity onPress={() => this.onRowClick(item)}>
                <View key={index} style={rowContainer}>
                    <Text style={styles.titleText}>{item.id}:-{item.title}</Text>
                </View>
            </TouchableOpacity>

        )
    }
    onRowClick = (item) => {
        //alert(JSON.stringify(item));

        this.props.navigation.navigate('userDetails', { info: item });
        // this.props.navigation.navigate('userDetails');
    }
    renderSaperate=({leadingItem,section})=>{

        return <View style={{height:10}}/>;
    }




    render() {
        //console.log(this.props.userList);
        //alert(this.props.userList);


        const {userList}=this.props;
        const {refreshing}=this.state;

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        console.log("render call");

        return (
            <View style={styles.container} >
                <FlatList
                    data={userList}
                    renderItem={this.renderItem}
                    contentContainerStyle={{top:20}}
                    automaticallyAdjustContentInsets={false}
                    ItemSeparatorComponent={this.renderSaperate}
                    ListEmptyComponent={this.renderEmpty}
                    onRefresh={this.onRefresh}
                    refreshing={refreshing}
                    keyExtractor={({ id }, index) => id}
                    ListFooterComponent={<View style={{height:50}}/>}
                />
            </View>
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


const styles=StyleSheet.create({
    container:{
        flex:1,

    },
    titleText:{
      fontSize:18,
      alignSelf:'center',
      marginBottom:20,
    },
    rowContainer:{
        borderRadius:5,
        padding: 10,
        borderWidth:1,
        borderColor:'#bdbdbd',
        marginLeft:10,
        marginRight:10,
    }

});


