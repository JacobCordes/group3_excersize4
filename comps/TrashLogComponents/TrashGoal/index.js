//----IMPORTS----//

import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

//----COMPONENT STYLING----//

const InfoButtonCont = styled.div`

`

const ButtonInput = styled.button`
background-color:#B2A68D;
color:#FFF;
width: 324px;
height: 178px;
font-size: 24px;
border: none;
font-family: 'Martel Sans', sans-serif;

h1{
    line-break:none;
}
`

const TrashGoal = () => {
    useEffect(() => {
      Aos.init({ duration: 2000});
    }, []);


    return <InfoButtonCont >
        <ButtonInput data-aos="slide-left"><p>Weekly Trash Goal: <h1>25</h1></p><h1 id="collected"> </h1></ButtonInput>
    </InfoButtonCont>
}



//----EXPORTS----//

export default TrashGoal