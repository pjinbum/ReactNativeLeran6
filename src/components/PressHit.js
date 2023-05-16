import React , {useState} from 'react'
import { View , Text } from 'react-native'
import CustomButton from './CustomButton'

const PressHit = () => {

    const [hit , setHit] = useState(0)
    const [like , setLike] = useState(0)



  return (
    <View>
       <Text style={{fontSize : 30 , margin :10}}>{hit}</Text>
       <CustomButton title='+' onPress={()=>{setHit(hit +1)}}></CustomButton>
       <CustomButton title='-' onPress={()=>{setHit(hit -1)}}></CustomButton>

       <CustomButton title={hit == 0? '좋아요' : '싫어요'} onPress={()=>setLike(!like)}></CustomButton>
      
    </View>
  )
}

export default PressHit