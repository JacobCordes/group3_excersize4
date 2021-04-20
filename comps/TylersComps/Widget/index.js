import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

const CardCont1 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(stanleypark.jpg);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;
  margin-left:5px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;

const CardCont2 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(stanleypark.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;
  margin-left:5px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;

const CardCont3 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(stanleypark.jpg);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;
  margin-left:5px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;

const CardCont4 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(stanleypark.jpg);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;
  margin-left:5px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;

const CardCont5 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(stanleypark.jpg);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;
  margin-left:5px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;

const CardCont6 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(stanleypark.jpg);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;
  margin-left:5px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;

const CardDiv = styled.div`
margin-bottom:20px;
min-width:414px;
min-height:634px;
display:flex;
justify-content:center;
align-items:center;

`

const WidgetDiv = styled.div`
width:414px;
height:634px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
flex-wrap:wrap;
`

const Widget = ({
  bgcolor="#B2A68D"
  
}) =>{
  const router = useRouter();
  return <CardDiv>
        <WidgetDiv>
        <CardCont1 bg={bgcolor} onClick={()=>router.push("/")}></CardCont1>
        <CardCont2 bg={bgcolor} onClick={()=>router.push("/")}></CardCont2>
        <CardCont3 bg={bgcolor} onClick={()=>router.push("/")}></CardCont3>

        <CardCont4 bg={bgcolor} onClick={()=>router.push("/")}></CardCont4>
        <CardCont5 bg={bgcolor} onClick={()=>router.push("/")}></CardCont5>
        <CardCont6 bg={bgcolor} onClick={()=>router.push("/")}></CardCont6>
        </WidgetDiv>
  </CardDiv>
  
}


export default Widget
