import React from 'react'
import { Component } from 'react'
import { StyleSheet , View , Animated , Button , TextInput ,Text } from 'react-native'
import styled from 'styled-components';

export default class InputAni extends Component {


      aniWidth = new Animated.Value(150);
      animate = (value) => {
        Animated.timing(
           this.aniWidth,{
            toValue:value,
            duration:700,
           }
        ).start()
      }





    render(){
        return (
            <View style={styles.container}>
                <Animated.View style={{width:this.aniWidth}}>
                   <TextInput style={styles.input} onBlur={()=>this.animate(150)}
                    onFocus={()=>this.animate(300)}
                     ref={input=>this.input=input}></TextInput>

                </Animated.View>
                <Button title='전송' onPress={ () => this.input.blur()}></Button>
                

            </View>
          )
    }

}

const styles = StyleSheet.create({
    container : {
        flex :1,
        padding:10,
        paddingTop:50,
    },
    input : {
        height : 50,
        marginHorizontal:15,
        backgroundColor:'#aaa',
        marginTop :10,
        paddingHorizontal:9,
    }
})
