import React from 'react'
import styled from 'styled-components';


const LogoImg = styled.div`
background-image: url(Sad_Earth.png);
width: 242px;
height: 242px;
`

const CardDiv = styled.div`
margin-bottom:20px;
min-width:200px;
min-height:150px;
display:flex;
justify-content:center;
align-items:center;
`

const SadEarth = ({  

}) =>{

  return<CardDiv><LogoImg>

  </LogoImg>
  </CardDiv>
}

export default SadEarth
