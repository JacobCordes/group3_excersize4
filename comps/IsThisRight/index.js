import { Router } from 'next/router';
import {useRouter} from 'next/router'
//----IMPORTS----//

import React from 'react';
import styled from 'styled-components';
import RedButton from '../TrashLogComponents/RedButton';

//----COMPONENT STYLING----//

const DivCont = styled.div `




`;

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

      function getData(){
    var cans = sessionStorage.getItem("cans");
    var bottles = sessionStorage.getItem("bottles");
    var cardboard = sessionStorage.getItem("cardboard");
    var organics = sessionStorage.getItem("organics");
  
    document.getElementById("cans").innerHTML = cans;
    document.getElementById("bottles").innerHTML = bottles;
    document.getElementById("cardboard").innerHTML = cardboard;
    document.getElementById("organics").innerHTML = organics;
  
  
    var integerv1 = parseInt(cans, 10)
    var integerv2 = parseInt(bottles, 10)
    var integerv3 = parseInt(cardboard, 10)
    var integerv4 = parseInt(organics, 10)
  
  
    document.getElementById("totalcollected").innerHTML = integerv1 + integerv2 + integerv3 + integerv4;
  }


    
    const router = useRouter();

   return <DivCont onClick={getData}>
         <h1>Is This Right?</h1><br></br><br></br><br></br><br></br>
  <h3>Cans Collected:</h3><h1 id="cans"></h1>
  <h3>Bottles Collected:</h3><h1 id="bottles"></h1>
  <h3>Cardboard Collected:</h3><h1 id="cardboard"></h1>
  <h3>Organics Collected:</h3><h1 id="organics"></h1>
  <hr></hr>
  <h3>Total items<br></br>Collected</h3> 
  <h1 id="totalcollected"></h1>
  
     <br></br>
  <RedButton routeTo="/trashlog"text="Nope."/><br></br>
<br></br>
      <ButtonCont1 onClick={()=>router.push(routeTo)}>       
       <Button>
           <ButtonText1>{text}</ButtonText1>
           </Button>
   </ButtonCont1>
   </DivCont>
}



//----EXPORTS----//

export default GreenButton