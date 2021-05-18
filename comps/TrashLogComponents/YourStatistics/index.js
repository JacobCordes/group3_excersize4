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

const DailyTrash = () => {
    useEffect(() => {
      Aos.init({ duration: 2000});
    }, []);




        function dailyCollected(){
            var canData = sessionStorage.getItem("cans");
            var bottleData = sessionStorage.getItem("bottles");
            var cardboardData = sessionStorage.getItem("cardboard");
            var organicData = sessionStorage.getItem("organics");

            var integer = parseInt(canData, 10)
            var integer2 = parseInt(bottleData, 10)
            var integer3 = parseInt(cardboardData, 10)
            var integer4 = parseInt(organicData, 10)

      
            document.getElementById("collected").innerHTML = integer + integer2 + integer3 + integer4;
          
         }


//    function getData(){
//        var input = sessionStorage.getItem("cans")
//    }

    return <InfoButtonCont >
        <ButtonInput data-aos="slide-right" onMouseOver={dailyCollected}><p>Daily Trash Collected:</p><h1 id="collected"> </h1></ButtonInput>
    </InfoButtonCont>
}



//----EXPORTS----//

export default DailyTrash