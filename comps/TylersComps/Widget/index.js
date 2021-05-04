import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const CardCont1 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(stanleypark.jpg);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:120px;
  width:120px;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;
  margin-right:5px;
  display:inline-flex;
  font-family: 'Martel Sans', sans-serif;
  &>*{
    color:#FFF;
  }
`;

const CardCont2 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(GranvilleIsland.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding:5px;
  border-radius:20px;
  height:120px;
  width:120px;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;
  margin-right:5px;
  display:inline-flex;
  font-family: 'Martel Sans', sans-serif;
  &>*{
    color:#FFF;
  }
`;

const CardCont3 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(Kitsilano.jpg);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:120px;
  width:120px;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;
  margin-right:5px;
  display:inline-flex;
  font-family: 'Martel Sans', sans-serif;
  &>*{
    color:#FFF;
  }
`;

const CardCont4 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(EastVan.jpg);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:120px;
  width:120px;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;
  margin-right:5px;
  display:inline-flex;
  font-family: 'Martel Sans', sans-serif;
  &>*{
    color:#FFF;
  }
`;

const CardCont5 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(VicFraserview.jpg);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:120px;
  width:120px;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;
  margin-right:5px;
  display:inline-flex;
  font-family: 'Martel Sans', sans-serif;
  &>*{
    color:#FFF;
  }
`;

const CardCont6 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(ScienceWorld.jpg);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:120px;
  width:120px;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;
  margin-right:5px;
  display:inline-flex;
  font-family: 'Martel Sans', sans-serif;
  &>*{
    color:#FFF;
  }
`;

const CardDiv = styled.div`
margin-bottom:20px;
min-width:350px;
min-height:540px;
display:flex;
justify-content:center;
align-items:center;
font-family: 'Martel Sans', sans-serif;

`

const WidgetDiv = styled.div`
width:350px;
height:540px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
flex-wrap:wrap;
font-family: 'Martel Sans', sans-serif;

div:hover{
  box-shadow: 2.5px 2.5px 6px #363636;
  transition: 200ms linear;
}

`


// const Widget = ({
//   bgcolor="#B2A68D"
  
// }) =>{

  const Widget = () => {
    useEffect(() => {
      Aos.init({ duration: 850});
    }, []);
  const router = useRouter();
  return (
  <CardDiv>
        <WidgetDiv>
        <CardCont1 className="card1" data-aos="fade-right" onClick={()=>router.push("/stanleypark")}>Stanley Park</CardCont1>
        <CardCont2 data-aos="fade-right" onClick={()=>router.push("/granville_island")}>Granville Island</CardCont2>
        <CardCont3 data-aos="fade-right" onClick={()=>router.push("/kitsilano")}>Kitsilano</CardCont3>

        <CardCont4 data-aos="fade-left" onClick={()=>router.push("/eastvan")}>East Vancouver</CardCont4>
        <CardCont5 data-aos="fade-left" onClick={()=>router.push("/victoria_fraserview")}>Victoria Fraserview</CardCont5>
        <CardCont6 data-aos="fade-left" onClick={()=>router.push("/scienceworld")}>Science World</CardCont6>
        </WidgetDiv>
  </CardDiv>

  );
  
};


export default Widget
