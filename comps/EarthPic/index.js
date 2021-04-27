import React from 'react'
import styled from 'styled-components';


const LogoImg = styled.div`
background-image: url(EarthPic.png);
width: 250px;
height: 246px;
`

const CardDiv = styled.div`
margin-bottom:20px;
min-width:200px;
min-height:150px;
display:flex;
justify-content:center;
align-items:center;
`

const Earth = ({  

}) =>{

  return<CardDiv><LogoImg>

  </LogoImg>
  </CardDiv>
}

export default Earth
