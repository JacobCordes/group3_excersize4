//----IMPORTS----//

import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

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
background-image: url(bottles.png);
height:63px;
padding-left:45px;
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

min-width:200px;
min-height:150px;
display:flex;
justify-content:center;
align-items:center;


.Inputs{
   font-size:54px;
   width:150px;
   border-radius:20px;
   color:white;
   margin-top:9px;
   margin-left:15px;
   text-align:center;
   background-color:#54738E;
   border:none;
}

`




//----COMPONENT BUILDS----//

const TrashInputs2 = ({
    text="Cans",
    number="0",
    plus="+",
    minus="-",
    bgimage="bottles.png"
    
    
}) => {

    const router = useRouter();

    function bottlesData() {
        var input2 = document.getElementById("Inputs2").value;
        sessionStorage.setItem("bottles", input2)
        alert(input2);
    }



   return <CardDiv>
       <DivCont>  
       <Icon></Icon>
       <Item>{text}</Item> 
       <input  placeholder="0" id="Inputs2" className="Inputs" type="text"></input>
       <input onClick={bottlesData} type="submit"></input>
       </DivCont>

       </CardDiv>

       
}



//----EXPORTS----//

export default TrashInputs2