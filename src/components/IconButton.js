import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import PropTypes from 'prop-types';
import {images} from '../Image';

const Icon = styled.Image`
 tint-color : ${({theme , completed})=> (completed? theme.done : theme.text) } ;
 width: 30px;
 height: 30px;
 margin: 10px;
`;

const IconButton = ({type , onPressOut , id ,completed}) => {

    const _onPressOut =() => {
        onPressOut(id);
    }

    return(
        <TouchableOpacity onPressOut={_onPressOut}>
            <Icon source={type} completed={completed}></Icon>
        </TouchableOpacity>
    )
}

IconButton.defaultProps = {
    onPressOut : () => {} ,
}


IconButton.propTypes ={
    type : PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut:PropTypes.func,
}

export default IconButton ;