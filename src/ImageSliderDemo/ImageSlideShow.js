import React,{Component} from 'react';
import {StyleSheet,View,Text,Dimensions,SafeAreaView} from 'react-native';
import Slideshow from 'react-native-slideshow';


export default class SlideImage extends Component{

    constructor(){
        super();
        this.state={
            //position:0,
            //interval:null,
            dataSource:[
                {
                    title:'t1',
                    caption:'Image1',
                    url: '/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img1.png'
                },
                {
                    title:'t2',
                    caption:'Image2',
                    url: '/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img2.jpeg'
                },
                {
                    title:'t3',
                    caption:'Image3',
                    url: '/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img3.jpeg'
                },
                {
                    title:'t4',
                    caption:'Image4',
                    url: '/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img4.png'
                },
                {
                    title:'t5',
                    caption:'Image5',
                    url: '/Users/mac_mojave_2019/Documents/Project/myApplication/img/ImageSlide/Img5.png'
                },

                ]
        };
    };

 /*   componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                //console.warn('position-'+this.state.position+'--'+this.state.dataSource.length);
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }*/

    render(){
        const {height,width}=Dimensions.get('window');

        return(

            <SafeAreaView>
                <Slideshow
                    dataSource={this.state.dataSource}
                    height={500}
                    indicatorSize={14}
                    indicatorSelectedColor={'red'}
                    arrowSize={25}
                   // position={this.state.position}
                    //onPositionChanged={position => this.setState({ position })}

                />
            </SafeAreaView>
        );
    }
}