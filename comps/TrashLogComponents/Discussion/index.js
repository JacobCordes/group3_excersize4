//----IMPORTS----//

import React from 'react';
import styled from 'styled-components';

//----COMPONENT STYLING----//


const DivCont = styled.div `
display;flex;
margin:5px;
background-color:#7297A0;
max-width:300px;
max-height:100px;
border-radius:30px;
color:white;
`;

const Icon = styled.img `

`;

const Item = styled.h1 `
font-family:Martel Sans;
`;

const Numbers = styled.div `
background-color:white;
color:#54738E;
text-align:center;
border-radius:20px;
font-size:60px;
font-family:Martel Sans;
max-height:50px;
max-width:50px;
`;



const PlusButton = styled.button `
color:white;
background-color:#54738E;
border:none;
border-radius:10px;
font-size:42px;
`;


const MinusButton = styled.button `
color:white;
background-color:#54738E;
border:none;
border-radius:10px;
font-size:42px;
`;


//----COMPONENT BUILDS----//

const TrashInputs = ({
    text="Looks Good!",
    
}) => {

   return <DivCont>  
       <Icon />
       <Item>Cans</Item> 
       <Numbers>0</Numbers>
       <PlusButton>+</PlusButton>
       <MinusButton>-</MinusButton>
       </DivCont>
   
}



//----EXPORTS----//

export default TrashInputs