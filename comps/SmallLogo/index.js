import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

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
`



const SmallLogo = ({  

}) =>{
  const router = useRouter();
  return<LogoDiv><LogoImg onClick={()=>router.push("/hellouser")}>
    

  </LogoImg>
  </LogoDiv>
}

export default SmallLogo