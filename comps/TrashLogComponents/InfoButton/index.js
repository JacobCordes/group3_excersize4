//----IMPORTS----//

import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


//----COMPONENT STYLING----//


const InfoCont = styled.div `
display:flex;
position:absolute;
background-color:#7297A0;
width:30px;
height:30px;
border-radius:30px;
color:white;
border-style: none;
font-size:25px;
text-align:center;
align-items: center;
margin-left:-5px;
margin-top:-126px;

`;


const Info = styled.div `
margin-left:10px;
`;





//----COMPONENT BUILDS----//

const InfoIcon = ({
    routeTo="/"
}) => {

const router = useRouter();
   
   return <InfoCont onClick={()=>router.push(routeTo)}>
       <Info>?</Info>
   </InfoCont>

}



//----EXPORTS----//

export default InfoIcon