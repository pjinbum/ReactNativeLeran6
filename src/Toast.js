import React from "react";
import { View , Text , ToastAndroid , StyleSheet } from "react-native";

const Toast= () => {
  const basicToast = () =>{
    ToastAndroid.show('안녕 난 토스트' , ToastAndroid.LONG)
  }
  const grvityToast = ()=>{
    ToastAndroid.showWithGravity('두둥 토스트' , ToastAndroid.LONG,
    ToastAndroid.CENTER)
  }
  return(
    <View style={styles.container}>
        <Text style={styles.button} onPress={basicToast}>
            기본 토스트
        </Text>
        <Text style={styles.button} onPress={grvityToast}>
             중력 토스트
        </Text>
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems :'center'
    },
    button :{
        marginBottom :15,
        color:'blue',
        fontSize:25
    }
})

export default Toast;