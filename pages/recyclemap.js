import styled from 'styled-components';
import {useRouter} from 'next/router'
import NavBar from '../comps/NavBar/Nav';
import SmallLogo from '../comps/SmallLogo';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
// import  from '../comps/TrashLogComponents/Discussion';


const InformationCont = styled.div`

html, body{
  margin:0px;
  padding:0px;
}

h1,h2,h3,h4,h5,h6{
  font-family: 'Rajdhani', sans-serif;
}

h1{
  font-size:42px;
}

.PageHead{
  padding:0px;
  margin:0px;
}

.top{
  display:grid;
  grid-template-columns: 1fr;
  grid-auto-rows:150px;
  text-align:center;
  font-family:Martel Sans;
  color:white;
}


.top > div{
  background:white;
  padding:1em;
}

.top > div:nth-child(odd){
  background:#A88C7D;
}

.left{
  display:grid;
  grid-template-columns: 1fr;
  grid-auto-rows:540px;
  text-align:center;
  font-family:Martel Sans;
  color:white;
  justify-content:center;
  height:400px;
}


.left > div{
  background:white;
  padding:1em;
}

.left > div:nth-child(odd){
  background:#7297A0;
}

.mid{
  display:grid;
  grid-template-columns: 1fr;
  grid-auto-rows:1200px;
  text-align:center;
  font-family:Martel Sans;
  color:white;
}


.mid > div{
  background:white;
  padding:1em;
}

.mid > div:nth-child(odd){
  background:#9DBA94;
}

    .bot {
      padding:10px;
    }

  }
`;

export default function Information() {

  const router = useRouter();
  return <InformationCont>
 


    <div className="top"><div>
    <SmallLogo />
      <NavBar/>
      <h1 className="PageHead">Recycling Map</h1>
      </div></div>


    <div className="mid"><div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d166937.65488593958!2d-122.89450208900234!3d49.1739796353157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srecycling%20center!5e0!3m2!1sen!2sca!4v1620092919065!5m2!1sen!2sca" width="330" height="800" allowfullscreen="" loading="lazy"></iframe>

      </div></div>


         </InformationCont>
}
{
  
  
  
  /* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
<KodiButton text="Kodi's Button" bgcolor="#856DBC" />
<BonnieButton text="Bonnie's Button"/>
<TylerButton/> */}