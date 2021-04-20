//----IMPORTS----//

import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

//----COMPONENT STYLING----//


const DivCont = styled.button `
display:flex;
margin:5px;
background-color:#7297A0;
max-width:300px;
max-height:100px;
border-radius:30px;
color:white;
`;

const Icon = styled.img `
background-image: url(bottles.png);
height:63px;
padding-left:45px;
`;

const Item = styled.h1 `
font-family:Martel Sans;
`;

const Numbers = styled.button `
background-color:white;
color:#54738E;
text-align:center;
border-radius:20px;
font-size:35px;
font-family:Martel Sans;
max-height:60px;
max-width:50px;
margin-left:15px;
margin-top:25px;
`;



const PlusButton = styled.button `
color:white;
background-color:#54738E;
border:none;
border-radius:10px;
font-size:42px;
margin-left:20px;
margin-top:20px;
`;


const MinusButton = styled.button `
color:white;
background-color:#54738E;
border:none;
border-radius:10px;
font-size:42px;
margin:20px;
`;




//----COMPONENT BUILDS----//

const TrashInputs = ({
    text="Looks Good!",
    
}) => {

    const router = useRouter();
   return <DivCont>  
       <Item>Cans</Item> 
       <Icon />
       <Numbers>1</Numbers>
       <PlusButton>+</PlusButton>
       <MinusButton>-</MinusButton>
       </DivCont>
       
}



//----EXPORTS----//

export default TrashInputs