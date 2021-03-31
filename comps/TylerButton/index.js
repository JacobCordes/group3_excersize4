import React from 'react';
import styled from 'styled-components';

const ExCont = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
width: 300px;
height: 400px;
background-color: #ababab;
border-radius: 20px;
border: 1px solid #50cc71;
`;

const ExHead = styled.h3`
color: white;
font-size: 40px;
`;
const ExSub = styled.span`
color: white;

`;
const ExButton = styled.button`
background-color: #50cc71;
width: 200px;
height: 60px;
border-radius: 20px;
border-style: none;
color: white;
margin-top: 100px;
`;


const TylerButton = () => {

    return <ExCont>
        <ExHead>Product Name</ExHead>
        <ExSub>Product Info</ExSub>
        <ExButton>Add to Cart</ExButton>
        </ExCont>
}

export default TylerButton;