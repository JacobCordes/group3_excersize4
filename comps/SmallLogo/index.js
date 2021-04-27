import React from 'react'
import styled from 'styled-components';


const LogoImg = styled.div`
background-image: url(logo.png);
width: 45px;
height: 45px;
background-size: 100% 100%;
position:absolute;
top:10;
left:0;
margin-left:15px;
`


const LogoDiv = styled.div`
width: 0px;
height: 0px;
position:absolute;
top:10;
left:0;

div:hover{
  box-shadow: 0px 0px 0px 5px;
}


`



const SmallLogo = ({  

}) =>{

  return<LogoDiv><LogoImg>
    

  </LogoImg>
  </LogoDiv>
}

export default SmallLogo