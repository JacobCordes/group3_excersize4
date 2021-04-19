import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const ButtonDiv = styled.div `
margin:5px;
`;

const ButtonCont = styled.span `
margin:5px;
`;

const ButtonInput = styled.button`
    background-color:salmon;
    color:#FFF;
    padding:10px;
    border-radius:5px;
    border:none;
`;

const ButtonText = styled.h3 `
    font-family: Arial;
    font-size:20px;
`;

const JacobButton = ({
    text="Jacob's Button",
    bgcolor="#FAD",
}) => {

    const router = useRouter();
   return <ButtonDiv onClick={()=>router.push("/")}>{text}<ButtonCont bg={bgcolor}>
       <ButtonInput>
           <ButtonText>{text}</ButtonText>
       </ButtonInput>

   </ButtonCont>
   </ButtonDiv>
}

export default JacobButton