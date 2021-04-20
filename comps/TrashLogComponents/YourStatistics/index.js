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
width: 364px;
height: 87px;
font-size: 24px;
border-radius: 20px;
border: none;
`

const DailyTrash = ({
    text="Daily Trash Collected: 3"
}) => {

   

    return <InfoButtonCont >
        <ButtonInput>{text}</ButtonInput>
    </InfoButtonCont>
}



//----EXPORTS----//

export default DailyTrash