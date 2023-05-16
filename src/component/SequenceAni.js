//Animated.sequence - 애니메이션 배열을 순서대로 시작하고
//다음 애니메이션을 시작하기 전에 완료될때 까지 기다린다

import { Component } from "react";
import React   from "react";
import { Animated } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default class SequenceAni extends Component{


   

        aniText1 = new Animated.Value(-30)
        aniText2 = new Animated.Value(-30)
        aniText3 = new Animated.Value(-30)

        componentDidMount() {
            this.animate();
        }

        animate=()=>{
            const creatAni = (value) => {
                return Animated.timing(value,{
                    toValue:290,
                    duration:1000,
                })
            }
            Animated.sequence([
                creatAni(this.aniText1),
                creatAni(this.aniText2),
                creatAni(this.aniText3),
            ]).start();
        }
    



    render(){
        return(
            <View style={style.container}>

               <Animated.Text style={[style.text, {marginTop : this.aniText1}]}>
                 사과
               </Animated.Text>
               <Animated.Text style={[style.text, {marginTop : this.aniText2}]}>
                 복숭아
               </Animated.Text>
               <Animated.Text style={[style.text, {marginTop : this.aniText3}]}>
                  감
               </Animated.Text>

            </View>
        ) ;
    }
}

const style = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent:'center',
        flexDirection:'row'
    },
    text :{
        marginHorizontal:20,
        fontSize:25
    }
})