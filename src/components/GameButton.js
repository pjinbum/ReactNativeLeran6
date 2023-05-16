import React from 'react'
import { TouchableOpacity ,Text } from "react-native";
import PropTypes from 'prop-types'

const GameButton = (props) => {
  return (
    <TouchableOpacity style={{backgroundColor :'#cfffe5' , padding :15 ,margin:10,borderRadius:7,}} onPress={()=>props.onPress()}>
        <Text style={{ fontSize : 35}} >{props.title}</Text>
    </TouchableOpacity>
  )
}

GameButton.propTypes = {
    title : PropTypes.string.isRequired,
    onPress : PropTypes.func.isRequired,
};
GameButton.defaultProps = {
    title:'Move',
}



export default GameButton