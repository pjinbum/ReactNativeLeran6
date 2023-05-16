import React , {useEffect} from "react";
import styled from "styled-components/native";
import PropTypes from 'prop-types' ;
import { MaterialIcons } from '@expo/vector-icons' ;
import { Platform , Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as Permission from 'expo-permissions';


const Container = styled.View`
  align-items: center;
  margin-bottom: 30px ;
`;

const StyledImage = styled.Image`
  background-color: ${({theme}) => theme.imageBackground };
  width: 100px;
  height: 100px;
  border-radius: ${ ({rounded}) => (rounded ? 50: 0)}px;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color:  ${ ({theme}) => theme.imageButtonBackground };
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const ButtonIcon = styled(MaterialIcons).attrs({
  name:'photo-camera' ,
  size :22,
})`
  color:${  ({theme}) => theme.imageButtonIcon} ;
`;


const PhotoButton = ({onPress}) => {
  return(
    <ButtonContainer onPress={onPress}>

       <ButtonIcon></ButtonIcon>

    </ButtonContainer>
  )
}

const Image = ( { url, imageStyle , rounded , showButton ,onChangeImage }) => {

   useEffect( ()=>{

    (async ()=>{
      try{
        if( Platform.OS !=='web'){
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if(status !=='granted'){

            Alert.alert('사진첩 권한' , '사진첩 권한 설정하세요');
          }

        }

      }catch(e){
        Alert.alert('사진첩 권한 오류' , e.message)
      }
    })();
  },[])
   


    const _handleEditButton = async ()=> {
     try{
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, //조회할 데이터 타입 (이미지)
            allowsEditing:true, // 이미지 선택후 편집 단계 집행여부
            aspect:[1,1], // 안드로이드 전용 옵션 이미지 편집시 사각형 비율
            quality:1, // 압축품질 이미지 품질 
          });

          if( !result.canceled){
            onChangeImage(result.uri) ;
          }

     }catch(e){
      Alert.alert('사진첩 오류', e.message);
     }

    };

  return (
    <Container>

        <StyledImage source={{uri : url}} style={imageStyle}rounded={rounded}></StyledImage>
        {showButton && <PhotoButton onPress={_handleEditButton}></PhotoButton>}

    </Container>

  )

}

Image.defultProps={
  rounded:false,
  showButton:false,
  onChangeImage:()=>{},
}

console.log(Image)

Image.propTypes={
    uri : PropTypes.string,
    imageStyle : PropTypes.object,
}
export default Image;