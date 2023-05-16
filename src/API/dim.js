import React ,{Component} from "react";
import {View , Text , StyleSheet , Dimensions } from 'react-native' ;

let styles = {}

const {width , height} =Dimensions.get('window')

const winWidth = Dimensions.get('window').width

const Dim = () => (
    <View style={styles.container}>
       <Text>{width}</Text>
       <Text>{height}</Text>
       <Text>{winWidth}</Text>
    </View>
)


styles=StyleSheet.create({
    container : {
        flex:1,
        justifyContent : 'center' ,
        alignItems : 'center'

    }
})

export default Dim;