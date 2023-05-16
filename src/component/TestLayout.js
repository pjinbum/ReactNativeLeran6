import React from "react";
import { StyleSheet , View , Text } from "react-native";

// const nativeCss1 = styled.Text`
// color:#eee;
// font-size: :${props=> props.title === 'main'? '15px' : '25px'};
// `;

const StyleInput = styled.TextInput.attr(props => ({
    placeholder :'입력해라',
    placeholderTextColor : props.borderColor ,
}))`
border-color : ${props=>props.borderColor}`


export const Header=props => {
    return(
        <View style={[ mainstyle.container , mainstyle.header ]}>
        <Text style={[mainstyle.text , {backgroundColor :'#86e57f'}]}>Header</Text>
        <StyleInput borderColor='#fff'></StyleInput>
     </View>
    )
 
}
export const Contents=() => {
    return(
        <View style={[ mainstyle.container , mainstyle.content ]}>
        <Text style={[mainstyle.text , {backgroundColor :'#ba2b2b' ,  height : 40}]}>Content</Text>
     </View>
    )
 
}
export const Footer=() => {
    return(
        <View style={[mainstyle.container , mainstyle.foot]}>
        <Text style={[mainstyle.text , {backgroundColor :'#4374d9' ,  height : 40}]}>Foot</Text>
     </View>
    )
 
}

const mainstyle = StyleSheet.create({
    container : {
      width : '100%' ,
      height : 80 ,
      alignItems :'center' ,
      justifyContent :'center',
    } ,
    header : {
        flex:1,
        backgroundColor :'#86e57f'

    },
    content : {
        flex:2,
        backgroundColor :'#ba2b2b' ,
        height :400
    },
    foot : {
        flex:1,
        backgroundColor :'#4374d9',
    } ,
    text :{
       fontSize :30,
    }
})