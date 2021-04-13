import React from 'react'
import styled from 'styled-components';

const CardCont = styled.div`
  background-color:${props=>props.bg};
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;
  margin-left:5px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;

const CardDiv = styled.div`
margin-bottom:20px;
width:414px;
height:634px;
display:inline-flex;
display:flex;
justify-content:center;
align-items:center;
`

const LeftCol = styled.div`

`;

const RightCol = styled.div`

`;

const SquareImages = ({
  bgcolor="#B2A68D"

}) =>{

  return <CardDiv>
      <LeftCol>
        <CardCont bg={bgcolor}></CardCont>
        <CardCont bg={bgcolor}></CardCont>
        <CardCont bg={bgcolor}></CardCont>
  </LeftCol>
  <RightCol>
        <CardCont bg={bgcolor}></CardCont>
        <CardCont bg={bgcolor}></CardCont>
        <CardCont bg={bgcolor}></CardCont>
  </RightCol>
  </CardDiv>
  
}

export default SquareImages
