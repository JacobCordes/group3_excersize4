import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const CardCont1 = styled.div`
  background-color:${props=>props.bg};
  background-image: url(Stationery.png);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:120px;
  width:120px;
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
  background-image: url(Cineplex.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding:5px;
  border-radius:20px;
  height:120px;
  width:120px;
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
  background-image: url(Grad.png);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:120px;
  width:120px;
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
  background-image: url(Fortnite.jpg);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:120px;
  width:120px;
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
  background-image: url(Bus.jpg);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:120px;
  width:120px;
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
  background-image: url(Books.jpg);
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:120px;
  width:120px;
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
min-width:350px;
min-height:540px;
display:flex;
justify-content:center;
align-items:center;

`

const WidgetDiv = styled.div`
width:350px;
height:540px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
flex-wrap:wrap;

div:hover{
  box-shadow: 2.5px 2.5px 6px #363636;
  transition: 200ms linear;
}
`
const SquareImages = () => {
  useEffect(() => {
    Aos.init({ duration: 850});
  }, []);

  const router = useRouter();

  return (
  <CardDiv>
        <WidgetDiv>
        <CardCont1 data-aos="fade-right" onClick={()=>router.push("/confirm_stationery")}>School Supplies</CardCont1>
        <CardCont2 data-aos="fade-right" onClick={()=>router.push("/confirm_cineplex")}>Cineplex Movie Ticket</CardCont2>
        <CardCont3 data-aos="fade-right" onClick={()=>router.push("/confirm_grad")}>Credit For Tuition</CardCont3>

        <CardCont4 data-aos="fade-left" onClick={()=>router.push("/confirm_fortnite")}>V-Bucks</CardCont4>
        <CardCont5 data-aos="fade-left" onClick={()=>router.push("/confirm_bus")}>One-Day Bus pass</CardCont5>
        <CardCont6 data-aos="fade-left" onClick={()=>router.push("/confirm_books")}>Random E-Book</CardCont6>
        </WidgetDiv>
  </CardDiv>
  );  
};



export default SquareImages
