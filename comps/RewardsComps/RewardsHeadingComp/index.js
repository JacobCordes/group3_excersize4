import React from 'react'
import styled from 'styled-components';

const Heading = styled.h1`
  font-family: 'Rajdhani', sans-serif;
  font-size:24px;
  font-weight:bold;
`;

const RewardsHeading = ({
    text="Rewards",
    textColor="black"
  }) =>{

    return <Heading>{text}</Heading>

  }

export default RewardsHeading