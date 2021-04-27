import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

const CardCont1 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(stanleyparktweet.jpg);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:243px;
  width:180px;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;

const CardCont2 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(stanleyparktweet.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding:5px;
  border-radius:20px;
  height:243px;
  width:180px;
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
min-width:350px;
min-height:540px;
display:flex;
justify-content:center;
align-items:center;

`

const WidgetDiv = styled.div`
width:350px;
height:540px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
flex-wrap:wrap;
`

const StanleyParkNews = ({
  bgcolor="#B2A68D"
  
}) =>{
  const router = useRouter();
  return <CardDiv>
        <WidgetDiv>
        <CardCont1 bg={bgcolor}></CardCont1>
        <CardCont2 bg={bgcolor}></CardCont2>
        </WidgetDiv>
  </CardDiv>
  
}


export default StanleyParkNews
