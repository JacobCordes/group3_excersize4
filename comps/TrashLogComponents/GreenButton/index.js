import { Router } from 'next/router';
import {useRouter} from 'next/router'
//----IMPORTS----//

import React from 'react';
import styled from 'styled-components';

//----COMPONENT STYLING----//



const ButtonCont1 = styled.span `
button:hover{
    box-shadow: 2.5px 2.5px 6px #363636;
    transition: 200ms linear;
  }
`;

const Button = styled.button `
background-color:#82B687;
border:none;
border-radius: 20px;
width:237px;
height:72px;
color:white;
box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.4);
`;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

const ButtonText1 = styled.h3 `
    font-family: 'Martel Sans';
    line-height:25px;
    font-size:20px;
    text-align:center;
`;

//----COMPONENT BUILDS----//

const GreenButton = ({
    text="Looks Good!",
    routeTo="/"
}) => {
    const router = useRouter();

   return <ButtonCont1 onClick={()=>router.push(routeTo)}>       
       <Button>
           <ButtonText1>{text}</ButtonText1>
           </Button>
   </ButtonCont1>
   
}



//----EXPORTS----//

export default GreenButton