import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const HelpButtonCont = styled.div`
`

const HelpInput = styled.button`
background-color:#54738E;
color:#FFF;
width: 36px;
height: 36px;
font-size: 24px;
border-radius: 20px;
border: none;
`

const HelpButton = ({
    routeTo="/"
}) => {

    const router = useRouter()
    return <HelpButtonCont>
        <HelpInput onClick={()=>router.push(routeTo)}>?</HelpInput>
    </HelpButtonCont>
}

export default HelpButton;