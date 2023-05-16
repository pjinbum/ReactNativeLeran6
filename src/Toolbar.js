import React, { Component } from 'react'
import { View , ToolbarAndroid } from 'react-native'


// import { Toolbar , ToolbarAction , ToolbarContent } from 'react-native-paper'

class Toolbars extends Component  {
  render (){

    const onActionSelected = (index) => {
        if(index === 1){
            this.props.openDrawer()
        }
    } 

     return(
        <View>
            {/* <Toolbar>
                <ToolbarContent title='툴바테스트' subtitle='툴바작은글씨'></ToolbarContent>
                <ToolbarAction icon='more-vert'></ToolbarAction>
                <ToolbarAction icon='search'></ToolbarAction>
            </Toolbar> */}
           <ToolbarAndroid
            titleColor = 'white'
            subtitleColor = 'White'
            style = { {height :60, backgroundColor : '#52998c'}}
            title = '툴바입니다'
            subtitle='툴바'
            actions = {[ { title : 'Options' , show:'always'} , {title:'Menu' , show:'always'}]}
            onActionSelected={onActionSelected}
           ></ToolbarAndroid>
        </View>
     )
  }
  
}

export default Toolbars