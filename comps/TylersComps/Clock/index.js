import React from 'react';
import styled from 'styled-components';

const ClockCont = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-image: url(sunrise.png);
width: 380px;
height: 380px;
font-size: 24px;
border-radius: 20px;
`

const ClockTextTop = styled.div`
color: white;
padding: 10px;
`

const ClockTextBot = styled.div`
color: white;
padding: 10px;
`

const Clock = () => {

    return <ClockCont>
        <ClockTextTop>Good Morning</ClockTextTop>
        <ClockTextBot>It is 9:03 am.</ClockTextBot>
    </ClockCont>
}

export default Clock;