import React from 'react'
import { View,Text } from 'react-native'
import { useState } from 'react'
import GameButton from './GameButton'

const MoveKey = () => {

    const [dir , setDir] =useState(0)


  return (
    <View style={{alignItems :'center'}}>
        <Text style={{fontSize : 30 , margin : 10}}> {dir}</Text>
           <GameButton title='up' onPress={(()=>setDir('up'))}></GameButton>
           <GameButton title='down' onPress={(()=>setDir('down'))}></GameButton>
           <GameButton title='left' onPress={(()=>setDir('left'))}></GameButton>
           <GameButton title='right' onPress={(()=>setDir('right'))}></GameButton>
   
           
       
    </View>
  )
}

export default MoveKey