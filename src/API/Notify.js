import React , { Component } from "react";
import { TouchableHighlight , View , Text ,StyleSheet , Alert } from "react-native";

let styles = { }

export default class Notify extends Component {
  constructor() {
    super()
    this.state = {
        showMessage : false
    }
    this.showAlert = this.showAlert.bind(this)

  }

  showAlert (){
    Alert.alert(
        '회원가입' , 
        '등록된 이메일입니다.' ,
        [
          {
            text : 'Cancel' , 
            onPress : () => console.log('alert 취소 버튼') ,
            style : 'cancle' 
          },
          {
             text : 'Ok' , 
             onPress : () => this.setState ({showMessage : true})
          }
        ]
    )
  }


  render(){
    const { showMessage } = this.state
    return (
        <View style={ styles.container }>
            <TouchableHighlight style={ styles.button} onPress={this.showAlert}>
                <Text> 눌러봐 </Text>
            </TouchableHighlight>


            {
                showMessage &&  <Text>등록된 이메일</Text>
            }
        </View>
    )
  }


}

styles = StyleSheet.create({
    container : {
      justifyContent : 'center' ,
      flex : 1 ,

    } ,
    button : {
        height : 70 ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
        backgroundColor : '#eeeeee'
    }
})
 

