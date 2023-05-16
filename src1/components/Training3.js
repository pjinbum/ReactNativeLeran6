import React, {Component} from 'react';
import { StyleSheet, View, Animated,Button,Text,Easing } from 'react-native';

export default class Training3 extends Component{

  OpacityEffect = new Animated.Value(1);

  show =() =>{
    Animated.timing(
      this.OpacityEffect,{
        toValue:1,
        duration:1000
      }
    ).start()
  }
  hide =()=>{
    Animated.timing(
      this.OpacityEffect,{
        toValue:0,
        duration:1000
      }
      ).start()
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.imgbox}>
          <Animated.Image style={[styles.img,{opacity:this.OpacityEffect}]}  source={require('../../assets/img1.png')}/>
          <Animated.Image style={[styles.img,{opacity:this.OpacityEffect}]}  source={require('../../assets/img2.png')}/>
        </View>
        <Button title='감추기' onPress={this.hide}></Button>
        <Button title='보이기' onPress={this.show}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  imgbox:{
    flexDirection:'row',
  },
  img:{
    height:200,
    width:200
  }
})