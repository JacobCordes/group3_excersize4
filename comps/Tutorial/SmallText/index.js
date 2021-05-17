import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Heading = styled.h1`
  font-family: 'Rajdhani', sans-serif;
  font-size:48px;
  font-weight:bold;
  color:white;
`;

const SmallText = ({
    text="Click To Begin!",
  }) =>{

    const router = useRouter();
    return <Heading >{text}</Heading>

  }

export default SmallText