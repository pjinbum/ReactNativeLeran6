import React from 'react'
import { Component } from 'react'
import { StyleSheet , View , Button , Animated } from 'react-native';


export default class MyAnimation extends Component  {
    marginTop = new Animated.Value(20);
   animate = () => {
     Animated.timing(this.marginTop, {
        //timing - 지정된 시간동안 선을 따라 애니메이션 적용
        //duration : 시간(기본값 500) - 밀리초
        //easing : 커브를 정의기본값 inout
        //delay : 지연시간 기본값 0

        //decay - 지정된속도에서 0까지 애니메이션 적용 
        //velocity : 초기속도
        //deceleration : 감쇠율 기본값 0.997

        //spring : 바운스 애니메이션
        //friction : 바운스값 기본값 7
        //tension : 속도 기본값 40
        //speed : 애니메이션 속도 기본값 12
        //bounciness : 탄력 조절 기본값 8
        toValue:200,
        duration:500,
        // useNativeDriver:true, 기본드라이버에 margintop 제공x
     }).start();
   }

    render(){
        return (
            <View>
                <Button title='애니메이션 박스' onPress={this.animate}></Button>
                <Animated.View style={[styles.box , {marginTop:this.marginTop}]} ></Animated.View>
                 

            </View>
          )
    }
 
}


const styles = StyleSheet.create({
    container : {
        flex:1,
        padding:10,
        paddingTop:50,
    },
    box:{
        width:150,
        height:150,
        backgroundColor:'pink'
    }
})