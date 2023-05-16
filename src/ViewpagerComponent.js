import React, { Component } from "react";
import { View , Text , StyleSheet } from 'react-native'
import ViewPager from "@react-native-community/viewpager";

class ViewPagerComponent extends Component {
    render(){
        return(
          <ViewPager style={{flex:1}} >
            <View style={[styles.viewStyle, styles.View1Style]}>
                <Text style={styles.textStyle}>첫번째 뷰</Text>
            </View>
            <View  style={[styles.viewStyle, styles.View2Style]}>
                <Text style={styles.textStyle}>두번째 뷰</Text>
            </View>
          </ViewPager>   
        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        justifyContent : 'center' ,
        alignItems:'center',
        padding:20,
        flex:1,
    },
    View1Style:{
        backgroundColor:'pink'
    },
    View2Style:{
        backgroundColor:'lightgreen'
    },
    textStyle:{
        fontSize :20,
        color:'red',


    }
})

export default ViewPagerComponent ;