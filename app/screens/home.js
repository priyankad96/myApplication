import React, {Component} from 'react';
import {
    StyleSheet, View, Image, ScrollView, Animated
} from 'react-native';
import { screenWidth } from '../helper/constant';

export default class ImageSlide extends Component {

    constructor(props){
        super(props);
        this.state = {
            images: ['img1', 'img2', 'img3', 'img4'],
        };
        this.scrollX = new Animated.Value(0);
    }

    render() {
        let position = Animated.divide(this.scrollX, screenWidth);
        const { container } = styles;
        const { images } = this.state;
        return (
            <View style={container}>
                <View style={styles.imgContainer}>
                    <ScrollView horizontal={true}
                                pagingEnabled={true}
                                showsHorizontalScrollIndicator={false}
                                onScroll={Animated.event(
                                    [{nativeEvent: {contentOffset: {x: this.scrollX}}}]
                                )}
                                scrollEventThrottle={16}>
                        {
                            images.map((item, key) => {
                                return (
                                    <Image key={key} source={{uri:item}}
                                           style={{width: screenWidth, height: screenWidth}}/>
                                );
                            })
                        }
                    </ScrollView>
                </View>

                <View style={styles.indicate}>
                    {
                        images.map((_, key) => {
                            let opacity = position.interpolate({
                                inputRange: [key - 1, key, key + 1],
                                outputRange: [0.3, 1, 0.3],
                                extrapolate: 'clamp'
                            });
                            return (
                                <Animated.View key={key} style={[{opacity}, styles.indicator]}/>
                            );
                        })
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer: {
        width: screenWidth,
        height: screenWidth,
    },
    indicate: {
        flexDirection: 'row',

    },
    indicator: {
        borderRadius: 10,
        height: 15,
        width: 15,
        backgroundColor: '#000000',
        margin: 8,
    }
});