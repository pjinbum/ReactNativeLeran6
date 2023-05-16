import React from 'react'
import styled from 'styled-components/native'


const Container = styled.TouchableOpacity`
 background-color: #336633;
 border-radius: 5px;
 padding: 15px 20px;
 margin: 10px 0;
 justify-content: center ;
`

const Title = styled.Text`
 font-size: 20px;
 font-weight: 700;
 color: #fff;
`

const Button = ({ title , onPress }) => {
  return (
    <Container onPress={onPress}>
        <Title>{title}</Title>
    </Container>
  )
}

export default Button