//ParallelAni.js

import React, {Component} from 'react';
import { Easing, StyleSheet, View,Animated,Text,TouchableHighlight } from 'react-native';

export default class ParallelAni extends Component{

    aniText1 = new Animated.Value(-200);
    aniText2 = new Animated.Value(600);
    aniButton = new Animated.Value(800);

    componentDidMount(){
      this.animate();
    }

    animate = () => {
      Animated.parallel([
        Animated.timing(
          this.aniText1,
          {
            toValue:200,
            duration:1000,
          }
        ),
        Animated.timing(
          this.aniText2,
          {
            toValue:0,
            duration:2000,
            delay:1000,
          }
        ),
        Animated.timing(
          this.aniButton,
          {
            toValue:0,
            duration:1500,
            delay:3000,
          }
        )

      ]).start()
    }

  render(){

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.text1, {marginTop:this.aniText1}]}>
                  1. 돈가스 곱빼기 OR 함박
            </Animated.Text>
            <Animated.Text style={[styles.text2, { marginLeft:this.aniText2}]} >
                  2. 김치볶음밥 OR  해물볶음밥
            </Animated.Text>
            <Animated.View style={{marginTop:this.aniButton}}>
              <TouchableHighlight style={styles.button}>
                  <Text>오늘 점심은 쿠켄</Text>
              </TouchableHighlight>
            </Animated.View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
  },
  text1 : {
    textAlign:'center',
    fontSize:20,
    marginBottom:10,
  },
  text2 : {
    width:'100%',
    textAlign:'center',
    fontSize:15,
    opacity:0.8,
  },
  button:{
    marginTop:25,
    backgroundColor:'green',
    height:55,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:10,
  }
});