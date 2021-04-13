import React from 'react';
import styled from 'styled-components';

const InfoButtonCont = styled.div`

`

const ButtonInput = styled.button`
background-color:#54738E;
color:#FFF;
width: 364px;
height: 87px;
font-size: 24px;
border-radius: 20px;
border: none;
`

const InfoButton = ({
    text="Test Button"
}) => {



    return <InfoButtonCont>
        <ButtonInput>{text}</ButtonInput>
    </InfoButtonCont>
}

export default InfoButton;