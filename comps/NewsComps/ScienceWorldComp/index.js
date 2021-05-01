import React from 'react'
import styled from 'styled-components';

const ImgDiv = styled.div`
background-color:${props=>props.bg};
background-image: url(ScienceWorld.jpg);
background-size: 100% 100%;
padding:5px;
border-radius:20px;
height:186px;
width:300px;
justify-content:center;
flex-direction:column;
margin-bottom:20px;
margin-left:5px;
display:inline-flex;
`
const ImgBorder = styled.div`
margin-top:10px;
`

const CardDiv = styled.div`
margin-bottom:20px;
min-width:200px;
min-height:150px;
display:flex;
justify-content:center;
align-items:center;
`
  const ScienceWorldImg = ({

  }) =>{
  
    return <CardDiv>
        <ImgBorder>
      <ImgDiv></ImgDiv>
      </ImgBorder>
    </CardDiv>
    
  }
  
  export default ScienceWorldImg