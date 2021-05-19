import { Router } from 'next/router';
import {useRouter} from 'next/router'
//----IMPORTS----//

import React from 'react';
import styled from 'styled-components';
import Pointer from '../../Pointer';
import TotalPoints from '../../TrashLogComponents/TotalPoints';
import BusImg from '../BusPic';

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


//----COMPONENT BUILDS----//

const Confirm5 = ({
    text="Yeah!",
    routeTo="/sorry"
}) => {

        
        function getData(){

      if(process.browser){
    var cans = sessionStorage.getItem("cans");
    var bottles = sessionStorage.getItem("bottles");
    var cardboard = sessionStorage.getItem("cardboard");
    var organics = sessionStorage.getItem("organics");
  
  
    var integerv1 = parseInt(cans, 10)
    var integerv2 = parseInt(bottles, 10)
    var integerv3 = parseInt(cardboard, 10)
    var integerv4 = parseInt(organics, 10)
  
  
    var alldata = document.getElementById("totalcollected").innerHTML = integerv1 + integerv2 + integerv3 + integerv4;
    
if(alldata >= 34){
    routeTo = "/reward_redeemed"
}

else if(alldata === 35){
    routeTo = "/reward_redeemed"
}

else if(alldata === 36){
    routeTo = "/reward_redeemed"
}

else if(alldata === 37){
    routeTo = "/reward_redeemed"
}

else if(alldata === 38){
    routeTo = "/reward_redeemed"
}

else if(alldata === 39){
    routeTo = "/reward_redeemed"
}

else if(alldata === 40){
    routeTo = "/reward_redeemed"
}

else if(alldata === 41){
    routeTo = "/reward_redeemed"
}

else if(alldata === 42){
    routeTo = "/reward_redeemed"
}

else if(alldata === 43){
    routeTo = "/reward_redeemed"
}

else if(alldata === 44){
    routeTo = "/reward_redeemed"
}

else if(alldata === 45){
    routeTo = "/reward_redeemed"
}

else if(alldata === 46){
    routeTo = "/reward_redeemed"
}

else if(alldata === 47){
    routeTo = "/reward_redeemed"
}

else if(alldata === 48){
    routeTo = "/reward_redeemed"
}

else if(alldata === 49){
    routeTo = "/reward_redeemed"
}

else if(alldata === 50){
    routeTo = "/reward_redeemed"
}


      }
}

 


    
    const router = useRouter();

   return <DivCont >
         <h1>Tap for Stats</h1>
      <Pointer />
      <InfoButtonCont >
        <ButtonInput onClick={getData}><p>Your Total Points:</p><h1 id="totalcollected"> </h1></ButtonInput>
    </InfoButtonCont>
      <br></br>
      <hr></hr>

     

  <h1>One Day Buss Pass</h1>
  <BusImg />
<h2>Redeem 35 Points For <br></br> One Day Buss Pass?</h2>
{/* <GreenButton routeTo="/article1" text="Yeah!"/> */}

<ButtonCont1 id="testbutton" onMouseOver={getData} onClick={()=>router.push(routeTo)}>       
       <Button>
           <ButtonText1>{text}</ButtonText1>
           </Button>
   </ButtonCont1>

   </DivCont>
}



//----EXPORTS----//

export default Confirm5