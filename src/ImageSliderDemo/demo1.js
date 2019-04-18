import React, { Component } from 'react';
import { View, Image, ScrollView, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');


const photos=[
    {uri:'/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img1.png'},
    {uri:'/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img2.png'},
    {uri:'/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img3.png'},
    {uri:'/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img4.png'},
    /* {uri:'/Users/mac_mojave_2019/Documents/Project/myApplication/img/1.png' },
     {uri:'/Users/mac_mojave_2019/Documents/Project/myApplication/img/2.png' },
     {uri:'/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img5.png'},*/

];

export default class Slideshow extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View

                    style={{ width, height: width }}
                >
                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true} // animates ScrollView to nearest multiple of it's own width
                        showsHorizontalScrollIndicator={false}
                    >
                        {photos.map((source, i) => { // for every object in the photos array...
                            return ( // ... we will return a square Image with the corresponding object as the source
                                <Image
                                    key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                                    style={{ width, height: width }}
                                    source={source}
                                />
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        );
    }
}
