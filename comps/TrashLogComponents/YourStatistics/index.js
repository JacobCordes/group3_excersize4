//----IMPORTS----//

import React from 'react';
import styled from 'styled-components';

//----COMPONENT STYLING----//

const ButtonDiv1 = styled.div `
margin:5px;
background-color:#B2A68D;
max-width:300px;
max-height:100px;
border-radius:30px;
color:white;
`;

const ButtonCont1 = styled.span `
margin:5px;
`;

const ButtonText1 = styled.h3 `
    font-family: 'Martel Sans';
    line-height:25px;
    font-size:20px;
    text-align:center;
`;

//----COMPONENT BUILDS----//

const DailyTrash = ({
    text="Daily Trash Collected: 3",
}) => {

   return <ButtonDiv1><ButtonCont1 >       
           <ButtonText1>{text}</ButtonText1>
   </ButtonCont1>
   </ButtonDiv1>
}



//----EXPORTS----//

export default DailyTrash