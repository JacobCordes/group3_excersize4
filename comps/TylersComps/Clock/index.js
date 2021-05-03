import React from 'react';
import styled from 'styled-components';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const ClockCont = styled.div`
display:flex;
background-image: url(sunrise.png);
width: 300px;
height: 300px;
background-size: 100% 100%;
justify-content:center;
align-items:center;
`

const CardDiv = styled.div`
min-width:200px;
min-height:150px;
display:flex;
justify-content:center;
align-items:center;
`


const Clock = () => {
    useEffect(() => {
      Aos.init({ duration: 1500});
    }, []);

    return (
    <CardDiv data-aos="fade-in"><ClockCont>
    </ClockCont>
    </CardDiv>
    );
};

export default Clock;