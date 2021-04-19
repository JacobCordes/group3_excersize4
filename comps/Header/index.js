import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Heading = styled.h1`
  font-family: 'Rajdhani', sans-serif;
  font-size:120px;
  font-weight:bold;
  color:white;
`;

const Header = ({
    text="Click To Begin!",
  }) =>{

    const router = useRouter();
    return <Heading onClick={()=>router.push("/hellouser")}>{text}</Heading>

  }

export default Header