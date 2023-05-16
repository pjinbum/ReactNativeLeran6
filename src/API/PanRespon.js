//touch 이벤트 정보를 가져올수 있는 API
// 스와이프 , 탭 , 핀치 , 스크롤링 , 싱글터치 , 멀티터치 등등 조작

import React , { Component, component } from "react";
import { Dismensions , PanResponder , TouchableHighlight, View , Text , StyleSheet, Dimensions } from 'react-native'

const { width , height } = Dimensions.get('window') ;
let styles = {}

export default class PanRespon extends Component {
  constructor(){ //생성자
     super() //부모생성자
     this.state = {  //멤버 변수 
         oPosition : { //정사각형을 x ,y 정보를 통해 화면 중앙에 위치하기
            x : (width / 2) - 100 ,
            y : (height / 2) - 100 ,

         },
         position : { //정사각형의 실제위치 정보 저장
            x: (width / 2) -100,
            y: (height / 2) -100,
         }
     }
     this._handleMove = this._handleMove.bind(this) // 사각형이 움직이는 거리계산용
     this._handleRelease = this._handleRelease.bind(this) //화면에 업데이트된 위치 저장용


     //PanResponder 객체생성하여 touch시 사용할 메서드 지정하기 
     this._panResponder = PanResponder.create({
       onStartShouldSetPanResponder : ()=>true,
       onPanResponderMove : this._handleMove,
       onPanResponderRelease : this._handleRelease
     })
  }


     _handleMove(evt, gestureState){
        let ydiff = gestureState.y0 - gestureState.moveY
        let xdiff = gestureState.x0 - gestureState.moveX
        this.setState({
            position : {
                y : this.state.oPosition.y - ydiff ,
                x : this.state.oPosition.x - xdiff

            }
        })
     }



     _handleRelease(){
        this.setState({
            oPosition : this.state.position
        })
     }

     render(){
        return(
            <View style={styles.container}>
                 <Text style={styles.display}> x : {this.state.position.x}  y : {this.state.position.y}</Text>
    
                {/* x,y의 값을 View에 연결하고 마진을 업데이트해서 정사각형을 드래그 */}
                <View {...this._panResponder.panHandlers}
                 style={[styles.box, { marginLeft:this.state.position.x , marginTop:this.state.position.y }]}></View>
            </View>
        )
     }

}





styles = StyleSheet.create({
   container :{
    flex:1,
   },
   display : {
    textAlign :'center',
    marginTop : 50,
    zIndex :1,
    position :'absolute'
   },
   box:{
    position:'absolute',
    width:200,
    height:200,
    backgroundColor:'pink'
   }
})