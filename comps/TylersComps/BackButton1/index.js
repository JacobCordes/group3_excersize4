import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const InfoButtonCont = styled.div`
button:hover{
    box-shadow: 2.5px 2.5px 6px #363636;
    transition: 200ms linear;
  }
`

const ButtonInput = styled.button`
background-color:#54738E;
color:#FFF;
width: 324px;
height: 87px;
font-size: 24px;
font-family: 'Martel Sans', sans-serif;
border-radius: 20px;
border: none;
`


// const InfoButton = ({
//     text="Test Button",
//     routeTo="/"

    
// }) => {


const BackButton = ({
    text="Test Button",
    routeTo="/"

    
}) => {

    const router = useRouter();

    return <InfoButtonCont onClick={()=>router.push(routeTo)}>
        <ButtonInput>{text}</ButtonInput>
    </InfoButtonCont>
}

export default BackButton;