//----IMPORTS----//

import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

//----COMPONENT STYLING----//

const InfoButtonCont = styled.div`

`

const ButtonInput = styled.button`
background-color:#B2A68D;
color:#FFF;
width: 324px;
height: 87px;
font-size: 24px;
border: none;
font-family: 'Martel Sans', sans-serif
`

const DailyTrash = ({
    text="Daily Trash Collected: 0"
}) => {

//    function getData(){
//        var input = sessionStorage.getItem("cans")
//    }

    return <InfoButtonCont >
        <ButtonInput>{text}</ButtonInput>
    </InfoButtonCont>
}



//----EXPORTS----//

export default DailyTrash