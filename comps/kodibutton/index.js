import React from 'react';
import styled from 'styled-components';


const ButtonDiv = styled.div `
margin:8px;
`;

const ButtonCont = styled.span `
margin:8px;
`;

const ButtonInput = styled.button`
    background-color:purple;
    color:#856DBC;
    padding:15px;
    border-radius:10px;
    border:none;
`;

const ButtonText = styled.h3 `
    font-family: Roboto, sans-serif;
    font-size:24px;
`;

const KodiButton = ({
    text="Kodi's Button",
    bgcolor="#FAD",
}) => {

   return <ButtonDiv><ButtonCont bg={bgcolor}>
       <ButtonInput>
           <ButtonText>{text}</ButtonText>
       </ButtonInput>

   </ButtonCont>
   </ButtonDiv>
}

export default KodiButton