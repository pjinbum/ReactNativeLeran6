import React , {useContext, useState} from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from '@react-navigation/stack'
import {Login, Signup} from "../screens/index";



const Stack = createStackNavigator();


const AuthStack = ()=> {
  const theme=useContext(ThemeContext);
  return(

    <Stack.Navigator 
      initialRouteName='Login'
      screenOptions={{
        headerTitleAlign:'center',
        cardStyle: {backgroundColor:theme.background} ,
      }}
      >

         <Stack.Screen name='Login' component={Login}></Stack.Screen>
         <Stack.Screen name='Signup' component={Signup}></Stack.Screen>
      </Stack.Navigator>
  )

}

export default AuthStack