import React from 'react'
import styled from 'styled-components';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const LogoImg = styled.div`
background-image: url(logo.png);
width: 247px;
height: 247px;
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

const Logo = () => {
  useEffect(() => {
    Aos.init({ duration: 1200});
  }, []);

  return ( 
  <CardDiv data-aos="fade-in"><LogoImg>

  </LogoImg>
  </CardDiv>
  );
};

export default Logo