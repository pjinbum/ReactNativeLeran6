import React, { Component } from 'react'
import { View , Text , StyleSheet } from 'react-native'

class Home extends Component  {
  render (){
     return(
        <View style={styles.container}>
            <Text style={styles.text}>
                api 테스트 중 home 첫페이지 입니다
            </Text>
        </View>
     )
  }
  
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems :'center'
    },
    text:{
      margin:20,
      textAlign:'center',
      fontSize:20
    }
})

export default Home