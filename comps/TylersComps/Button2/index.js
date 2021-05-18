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




const InfoButton2 = () => {
    useEffect(() => {
      Aos.init({ duration: 1200});
    }, []);

    const router = useRouter();

    return <InfoButtonCont data-aos="slide-left" onClick={()=>router.push("/composttips")}>
        <ButtonInput>The Best Compost Tips</ButtonInput>
    </InfoButtonCont>
}

export default InfoButton2;