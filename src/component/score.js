
import React ,  { useState } from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native';
import { useMemo } from 'react';

const InputText = styled.TextInput.attrs({
  autoCapitalize:'none',
})`
  border:1px solid #777777;
  padding:10px;
  margin: 10px 0;
  width:200px;
  font-size:20px;
`;
const LabelText = styled.Text`
  font-size:20px;
  margin:10px;
`;
const AreaView = styled.View`
align-items: center;
flex-direction: row;
justify-content: center;
`;


const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};



const Score = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
    console.log
  };
  const insert = e => {
    const next = list.concat(parseInt(number));
    setList(next);
    setNumber('');
  };

  const avg = useMemo( ()=> getAverage(list) ,[list] );

return (
  <>
    <InputText value={number} onChangeText={ text=> setNumber(text)} />
    <Button title="등록" onPress={insert}></Button>
    
      {list.map((value, index) => ( <LabelText key={index}>{value}</LabelText> ))}
    
    <LabelText> 평균 : { avg } </LabelText>
  </>
);
};

export default Score;