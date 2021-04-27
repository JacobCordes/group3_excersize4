import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const InfoButtonCont = styled.div`

`

const ButtonInput = styled.button`
background-color:#54738E;
color:#FFF;
width: 324px;
height: 87px;
font-size: 24px;
border-radius: 20px;
border: none;
`

const InfoButton = ({
    text="Test Button",
    routeTo="/"
}) => {

    const router = useRouter();

    return <InfoButtonCont onClick={()=>router.push(routeTo)}>
        <ButtonInput>{text}</ButtonInput>
    </InfoButtonCont>
}

export default InfoButton;