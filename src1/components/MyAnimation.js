// MyAnimation.js

import React,{Component} from 'react';
import { StyleSheet, View,Button, Animated } from 'react-native';

export default class MyAnimation extends Component{
  marginTop = new Animated.Value(20); 
  animate = () =>{
    Animated.timing(this.marginTop, {
        toValue:200,
        duration:2000,
        //useNativeDriver:true,  기본드라이버에 margintop제공x
    }).start();
  }

  render(){
    return(
      <View style={styles.container}>
        <Button title='애니메이션 박스' onPress={this.animate}/>
        <Animated.View  style={[styles.box,{marginTop:this.marginTop}]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    paddingTop:50,
  },
  box:{
    width:150,
    height:150,
    backgroundColor:'pink'
  }
});