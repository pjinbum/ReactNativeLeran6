import React from 'react'
import styled from 'styled-components'
import { RequestApi } from '../hooks/RequestApi'



const Viewimage = styled.Image`
 background-color: #787878;
 width: 350px;
 height: 350px;
`;

const ErrorMsg =styled.Text`
 font-size: 20px;
 margin:10px;
`;

const Loadding = styled.Text`
 font-size: 15px;
 color: red;
`;


const URL ='https://loremflickr.com/json/g/350/350/sea/all';

const Getimage = () => {
 
   const {data,error, inProg}=RequestApi(URL);
     
  return (
    <>
       {inProg && ( <Loadding>사진을 가지고 오는 중 입니다.</Loadding>)}
       <Viewimage source={data?.file ? {uri:data.file } : null}></Viewimage>
       <ErrorMsg>{error?.message}</ErrorMsg>
    
    </>
  );
};

export default Getimage