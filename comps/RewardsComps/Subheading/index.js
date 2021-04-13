import React from 'react'
import styled from 'styled-components';

const Heading = styled.p`
font-family: 'Martel Sans', sans-serif;
font-size:24px;
margin-left:5px;
justify-content:center;
`;

const RewardsSubhead = ({
    text="Help The World, Help Yourself",
    textColor="black"
  }) =>{

    return <Heading>{text}</Heading>

  }

export default RewardsSubhead