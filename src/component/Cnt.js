import React, { useState } from 'react'
import styled from 'styled-components/native'
import Button from './Button'

const CntText = styled.Text`
 font-size: 25px;
 margin:10px;
 
`;

const Cnt = () => {

    const [count,setCount] = useState(0);
    
  return (
    <>
       <CntText> count : {count} </CntText>
       <Button title ='UP' onPress={ () => {setCount(count + 1);}}></Button>
       <Button title ='Down' onPress={ () => {setCount(count - 1);}}></Button>
       {/* <Button title ='UP' onPress={ () => {setCount(count + 1); setCount(count + 1); console.log(`${count}`)}}></Button> */}
       {/* 이거는 2씩 증가가 안된다  */}
       {/* <Button title ='UP' onPress={ () => {setCount(prevCount => prevCount +1); setCount(prevCount => prevCount + 1); console.log(`${count}`)}}></Button>
       <Button title ='+' onPress={ () => {setCount(count + 1);}}></Button> */}
    </>
   
  )
}

export default Cnt