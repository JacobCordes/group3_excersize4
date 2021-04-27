import React from 'react';
import styled from 'styled-components';


const ClockCont = styled.div`
display:flex;
background-image: url(sunrise.png);
width: 300px;
height: 300px;
background-size: 100% 100%;
justify-content:center;
align-items:center;
`

const CardDiv = styled.div`
margin-bottom:20px;
min-width:200px;
min-height:150px;
display:flex;
justify-content:center;
align-items:center;
`

const Header = styled.h3`
color:white;
margin-top:340px;
`;



const Clock = () => {

    return <CardDiv><ClockCont>
        <Header>It is 9:03 PM</Header>
    </ClockCont>
    </CardDiv>
       
}

export default Clock;