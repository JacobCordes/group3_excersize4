//----IMPORTS----//

import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import GreenButton from '../GreenButton';
import RedButton from '../RedButton';
import InfoIcon1 from '../InfoButton1';
import InfoIcon2 from '../InfoButton2';
import InfoIcon3 from '../InfoButton3';
import InfoIcon4 from '../InfoButton4';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

//----COMPONENT STYLING----//


const DivCont = styled.button `
display:flex;
margin:5px;
background-color:#7297A0;
max-width:375px;
max-height:100px;
border-radius:30px;
color:white;
border-style: none;
`;

const Icon = styled.div `
background-image: url(Can.png);
height:53px;
padding-left:45px;
`;

const Icon2 = styled.div `
background-image: url(Bottles.png);
height:63px;
padding-left:45px;
`;

const Icon3 = styled.div `
background-image: url(Cardboard.png);
height:43px;
padding-left:51px;
`;

const Icon4 = styled.div `
background-image: url(DeadFish.png);
height:58px;
padding-left:48px;
`;

const Item = styled.h2 `
font-family:Martel Sans;
font-size:28px;
`;

const Numbers = styled.div `
// background-color:white;
// color:#54738E;
// text-align:center;
// border-radius:20px;
// font-size:24px;
// font-family:Martel Sans;
// max-height:60px;
// width:60px;
// height:60px;
// max-width:50px;
// margin-left:15px;
// margin-top:25px;
// border-style:none;
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

const CardDiv = styled.div`
display:flex;
flex-direction:column;
min-width:200px;
min-height:150px;
display:flex;
justify-content:center;
align-items:center;


.Inputs{
   font-size:54px;
   width:140px;
   border-radius:20px;
   color:white;
   margin-top:9px;
   margin-left:15px;
   text-align:center;
   background-color:#54738E;
   border:none;

}
       .soundsGood{
           
        background-color:#82B687;
border:none;
border-radius: 20px;
width:237px;
height:72px;
color:white;
box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.4);
font-family: 'Martel Sans';
line-height:25px;
font-size:36px;
text-align:center;
       }

       .soundsGood:hover{
        box-shadow: 2.5px 2.5px 6px #363636;
        transition: 200ms linear;
       }

       .Reset{
           
        background-color:#D49595;
border:none;
border-radius: 20px;
width:180px;
height:72px;
color:white;
box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.4);
font-family: 'Martel Sans';
line-height:25px;
font-size:36px;
text-align:center;
       }

       .Reset:hover{
        box-shadow: 2.5px 2.5px 6px #363636;
        transition: 200ms linear;
       }


`




//----COMPONENT BUILDS----//

const TrashInputs = () => {
    useEffect(() => {
      Aos.init({ duration: 1500});
    }, []);

    const router = useRouter();

    function trashData() {
       if(process.browser){
        var input = document.getElementById("Inputs1").value;
        sessionStorage.setItem("cans", input)

        var input2 = document.getElementById("Inputs2").value;
        sessionStorage.setItem("bottles", input2)

        var input3 = document.getElementById("Inputs3").value;
        sessionStorage.setItem("cardboard", input3)

        var input4 = document.getElementById("Inputs4").value;
        sessionStorage.setItem("organics", input4)

      
      
    }
}


    function Reset(){

       document.getElementById("Inputs1").value = '';
       document.getElementById("Inputs2").value = '';
       document.getElementById("Inputs3").value = '';
       document.getElementById("Inputs4").value = '';
        
    }






   return <CardDiv>
       <InfoIcon1></InfoIcon1>
       <DivCont data-aos="flip-up">  
       <Icon></Icon>
       <Item>Cans</Item> 
       <input  placeholder="0" id="Inputs1" className="Inputs" type="text"></input>
       </DivCont>
<br></br><br></br>
        <InfoIcon2 data-aos="flip-up"/>
       <DivCont data-aos="flip-up">  
       <Icon2></Icon2>
       <Item>Bottles</Item> 
       <input  placeholder="0" id="Inputs2" className="Inputs" type="text"></input>
       
       </DivCont>

       <br></br><br></br>
           <InfoIcon3></InfoIcon3>
       <DivCont data-aos="flip-up">  
       <Icon3></Icon3>
       <Item>Cardboard</Item> 
       <input  placeholder="0" id="Inputs3" className="Inputs" type="text"></input>
      
       </DivCont>

       <br></br><br></br>
       <InfoIcon4></InfoIcon4>
       <DivCont data-aos="flip-up">  
       <Icon4></Icon4>
       <Item>Organics</Item> 
       <input  placeholder="0" id="Inputs4" className="Inputs" type="text"></input>
    


       </DivCont>
<br></br><br></br>

<input onClick={Reset} type="reset" id="reset" className="Reset"></input><br></br>
       <input onMouseOver={trashData} onClick={()=>router.push("/isthisright")} type="submit" className="soundsGood"></input>


       </CardDiv>

       
}



//----EXPORTS----//

export default TrashInputs