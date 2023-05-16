import React from 'react'
import { Component } from 'react'
import { StyleSheet, View, Animated, Text } from 'react-native'

export default class StaggerAni extends Component {
  constructor() {
    super()
    this.AnimatedValues = []
    for (let i = 0; i < 1000; i++) {
      this.AnimatedValues[i] = new Animated.Value(0)
    }

    this.animation = Animated.stagger(50, this.AnimatedValues.map(value => {
      return Animated.timing(
        value,{
          toValue: 1,
          duration: 6000,
        //   useNativeDriver : true
        }
      )
    }))
  }

  componentDidMount() {
    this.animate()
  }

  animate = () => {
    this.animation.start()
  }

  render() {
    return (
      <View style={styles.container}>
        {this.AnimatedValues.map((value, index) => (
          <Animated.View
            key={index}
            style={[styles.box, { opacity: value }]}
          />
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: 15,
    height: 15,
    backgroundColor: 'green',
    margin: 2,
  }
})