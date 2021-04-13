import React from 'react'
import styled from 'styled-components';

const CardCont = styled.div`
  background-color:${props=>props.bg};
  flex-direction:column;
  padding:5px;
  border-radius:10px;
  max-height:65px;
  max-width:364px;
  justify-content:center;
  margin-bottom:20px;
  &>*{
    color:#FFF;
  }
`;

const CardDiv = styled.div`
margin-bottom:20px;
`

const CardBigText = styled.p`
  font-family: 'Martel Sans', sans-serif;
  font-size:24px;
  margin-left:5px;
`;

const Points = ({
  bigtext="Your Total Points:",
  bgcolor="#B2A68D"
}) =>{

  return <CardDiv>
    <CardCont bg={bgcolor}>
    <CardBigText>{bigtext}</CardBigText>
  </CardCont>
  </CardDiv>
  
}

export default Points
