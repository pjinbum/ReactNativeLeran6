import React, {Component} from 'react';
import { StyleSheet, View, Animated,Button,Text,Easing } from 'react-native';


export default class Training2 extends Component{

  big = new Animated.Value(1);

  animate = () =>{
    Animated.timing(this.big, {
      toValue:3,
      duration:2000,
  }).start();
  }
    render() {

      return (
          <View style={styles.container}>
            <Button title="커져라" onPress={this.animate} ></Button>
            <Animated.View style={[styles.box,{transform:[{scale:this.big}] }]}/>
          </View>
      );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:50,
  },
  box:{
    marginTop:100,
    backgroundColor:'pink',
    width:50,
    height:50
  }
})