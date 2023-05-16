import React, { useRef } from 'react'
import { useState , useEffect } from 'react'
import styled from 'styled-components'


const InputText = styled.TextInput.attrs({
    autoCapitalize:'none',
    autoCapitalize:'false'
})`
 border:1px solid #eeeeee ;
 padding:10px;
 margin:10px 0;
 width:200px;
 font-size:20px;
`;

const SetText = styled.Text`
 font-size: 20px;
 margin: 10px;
`;

const MyWrite = () => {

   const [name , setName] = useState('');
   const [email , setEmail] = useState('');

   useEffect( ()=> { console.log(`${name} , ${email}`) } ,[email]);
   //두번째 파라미터에 email가 들어가 있어서 email 입력값을 줄때만 콘솔이 찍힌다

   const refName = useRef(null);
   const refEmail = useRef(null);

   useEffect( ()=>{
    console.log('연결됨');
    refName.current.focus();
    return () => console.log('연결해제 됨')
   } , [])

  return (

    <>
       <SetText>이름 : {name}</SetText>
       <SetText>이메일 : {email}</SetText>
       <InputText value={name}
         onChangeText={text => setName(text)}
         ref={refName}
         returnkeyType='next'
         onSubmitEditing={ ()=> refEmail.current.focus()}></InputText>
       <InputText value={name} onChangeText={text => setName(text)}></InputText>
       <InputText value={email} onChangeText={text => setEmail(text)}></InputText>
     </>
  )
    
  
   
}

export default MyWrite