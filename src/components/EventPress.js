import React from 'react'
import { TouchableOpacity , Text } from 'react-native'

const EventPress = () => {
    const _onPressIn = () => console.log('press In');
    const _onPressOut = () => console.log('press Out');
    const _onPress = () => console.log('press');
    const _onLongPress = () => console.log(' Long press');
  return (
    <TouchableOpacity style={{backgroundColor:'pink' , padding:15 , margin : 10,}} 
       onPressIn={_onPressIn}
       onPressOut={_onPressOut}
       onPress={_onPress}
       onLongPress={_onLongPress}
       delayLongPress={3000}
       >
        <Text style={{fontSize : 30}}>터치미</Text>
    </TouchableOpacity>
  )
}

export default EventPress