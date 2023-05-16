import React, {Component} from 'react';
import { StyleSheet, View, Animated,Button,Text,Easing } from 'react-native';


export default class Training1 extends Component{
  boxMove = new Animated.Value(-200);
  componentDidMount(){ this.animate();  }
  state = { end:true}
  animate = () =>{
    Animated.loop(
      Animated.sequence([
        Animated.timing( this.boxMove,
          {
            toValue:350,
            duration:1000,
            easing : Easing.linear,
          }
        ),
        Animated.timing( this.boxMove,
          {
            toValue:-200,
            duration:1000,
            easing : Easing.linear,
          }
        )
      ])
    ).start()
  }
  render(){

    return (
      <View style={styles.container}>
          <Animated.View style={[styles.box,{marginLeft:this.boxMove}]}></Animated.View>
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
    backgroundColor:'pink',
    width:50,
    height:50
  }
})