import React,{Component} from 'react';
import {StyleSheet,View,Text,Dimensions,SafeAreaView,Image,ScrollView,Animated} from 'react-native';
const { width } = Dimensions.get('window');

const images=[
    {uri:'/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img1.png'},
    {uri:'/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img2.png'},
    {uri:'/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img3.png'},
    {uri:'/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img4.png'},
    {uri:'/Users/mac_mojave_2019/Documents/Project/myApplication/img/1.png' },
     {uri:'/Users/mac_mojave_2019/Documents/Project/myApplication/img/2.png' },
     {uri:'/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img5.png'},

];
export default class ImageSlide extends Component{
    scrollX = new Animated.Value(0);

    render(){

        let position = Animated.divide(this.scrollX, width);
        return(
            <View style={styles.container}>

                <View style={styles.imgContainer} >

                    <ScrollView horizontal={true}
                                pagingEnabled={true}
                                showsHorizontalScrollIndicator={false}
                                onScroll={Animated.event( // Animated.event returns a function that takes an array where the first element...
                                    [{ nativeEvent: { contentOffset: { x: this.scrollX } } }] // ... is an object that maps any nativeEvent prop to a variable
                                )} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
                                scrollEventThrottle={16} // this will ensure that this ScrollView's onScroll prop is called no faster than 16ms between each function call
                    >
                        {
                            images.map((item,key)=>{
                                return(

                                        <Image  key={key} source={item}
                                                style={{width:width,height:width}} ></Image>

                                );
                            })
                        }
                    </ScrollView>

                </View >

                <View style={styles.indicate}>
                    {
                        images.map((_,key)=>{
                                let opacity = position.interpolate({
                                inputRange: [key - 1, key, key + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
                                outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
                                extrapolate: 'clamp' // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
                            });
                            return(
                                <Animated.View key={key} style={[{opacity},styles.indicator]}/>
                            );
                        })
                    }
                </View >
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    imgContainer:{
        width,
        height:width,

    },
    indicate:{
        flexDirection: 'row',

    },
    indicator:{
        borderRadius:10,
        height:15,
        width:15,
        backgroundColor: '#000000',
        margin:8,
    }
})