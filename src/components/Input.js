import React from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';




const StyleInput = styled.TextInput.attrs(({theme})=>({
    placeholderTextColor : theme.main , 
}))`
 width: ${({width})=>width-50}px;
 height: 60px;
 margin :5px 0;
 padding: 12px 20px;
 border-radius: 8px;
 background-color: ${({theme})=>theme.itemBackground};
 font-size: 25px;
 color:${({theme}) => theme.text};
`;

const Input =({placeholder , value , onChangeText , onSubmitEditing})=>{
    
    const width =Dimensions.get('window').width;


    return<StyleInput width={width} placeholder={placeholder} maxLength={50} autoCapitalize='none' autoCorrect={false} returnKeyType='done'
     keyboardAppearance='dark'
     value={value}
     onChangeText={onChangeText}
     onSubmitEditing={onSubmitEditing}
    ></StyleInput>
};

Input.propTypes = {
    placeholder : PropTypes.string,
    value : PropTypes.string.isRequired,
    onChangeText : PropTypes.func.isRequired,
    onSubmitEditing : PropTypes.func.isRequired,
}

export default Input;