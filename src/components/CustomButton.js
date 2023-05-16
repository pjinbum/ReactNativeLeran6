import React from "react";
import PropTypes from 'prop-types'
import { TouchableOpacity ,Text } from "react-native";

const CustomButton = props => {
    console.log(props)
    return (
        <TouchableOpacity style={{backgroundColor : 'pink' , padding :15 , margin :10 , borderRadius :7 ,}} onPress={()=>props.onPress()}>
            <Text style={{fontSize : 35}}>버튼{props.children || props.title}</Text>

        </TouchableOpacity>
    )
}

CustomButton.defaultProps = {
    title : '저장' , 
    name : 'bt' ,
    onPress : PropTypes.func.isRequired ,
}
// CustomButton.propTypes = {
//    title : PropTypes.number , 
// }
CustomButton.propTypes = {
   title : PropTypes.string.isRequired , //isRequired 는 필수여부 지정 
   name : PropTypes.string.isRequired
}


export default CustomButton ;