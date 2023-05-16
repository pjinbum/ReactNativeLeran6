import React from "react";
import { View, StyleSheet , Button } from "react-native";

const Menu = ({onPress}) => {
  return(
    <View style={{flex:1}}>
        <View style={styles.button}>
            <Button onPress={ () => onPress('Home')} title='home'></Button>
        </View>
        <View style={styles.button}>
            <Button onPress={ () => onPress('Toolbar')} title='툴바'></Button>
        </View>
        <View style={styles.button}>
            <Button onPress={ () => onPress('DetePicker')} title='날짜'></Button>
        </View >
        <View style={styles.button}>
            <Button title="토스트" onPress={()=>onPress('Toast')}></Button>
        </View>
        <View style={styles.button}>
            <Button title='Viewpager' onPress={()=>onPress('viewPagerComponent')}></Button>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    button:{
        margin:10,marginBottom:0
    }
})


export default Menu 