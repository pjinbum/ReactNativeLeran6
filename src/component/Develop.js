import React from 'react'
import { Component } from 'react'
import { StyleSheet , View , Animated , Button , TextInput ,Text } from 'react-native';
import styled from 'styled-components/native'

export default class Develop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedValue: new Animated.Value(0),
      practice1: new Animated.Value(0),
      practice2: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animatedValue, {
          toValue: 200,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.timing(this.state.animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true
        })
      ])
    ).start();

    const createAni = (value) => {
      return Animated.timing(value,{
        toValue:290,
        duration:8000
      })
    }

    Animated.sequence([
      createAni(this.state.practice1),
      createAni(this.state.practice2)
    ]).start();
  }

  onPressA = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  onPressB = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }






  render(){
    const translateX = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 100]
    });

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.text, { marginLeft : this.state.animatedValue}]}>
          파인애플
        </Animated.View>
        <Animated.Text style={styles.text}>오렌지</Animated.Text>
        <View style={{display : 'flex' , flexDirection:'row'}}>
          <Animated.Image source={require('../../assets/icon.png')} style={styles.image}/>
          <Animated.Image source={require('../../assets/icon.png')} style={styles.image}/>
        </View>
        <Button title='감추기' style={styles.button} onPress={this.onPressA}></Button>
        <Button title='보이기' style={styles.button} onPress={this.onPressB}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',

    color: 'yellowgreen'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  button: {
    fontSize: 20,
    backgroundColor: 'yellow',
    margin: 30
  }
});