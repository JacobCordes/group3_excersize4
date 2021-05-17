import React from 'react'
import styled from 'styled-components';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const PickupCan = styled.div`
background-image: url(throwingcan.GIF);
width: 175px;
height: 175px;
background-size: 100% 100%;
`

const CardDiv = styled.div`
margin-bottom:20px;
min-width:200px;
min-height:150px;
display:flex;
justify-content:center;
align-items:center;
`

const Tutorial2 = () => {
  
  return ( 
  <CardDiv>
<PickupCan />
  </CardDiv>
  );
};

export default Tutorial2