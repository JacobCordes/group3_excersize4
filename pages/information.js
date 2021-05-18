import styled from 'styled-components';
import {useRouter} from 'next/router'
import DailyTrash from '../comps/TrashLogComponents/YourStatistics';
import GreenButton from '../comps/TrashLogComponents/GreenButton';
import RedButton from '../comps/TrashLogComponents/RedButton';
import TrashInputs from '../comps/TrashLogComponents/TrashInputs';
import TrashInputs2 from '../comps/TrashLogComponents/TrashInputs2';
import TrashInputs3 from '../comps/TrashLogComponents/TrashInputs3';
import TrashInputs4 from '../comps/TrashLogComponents/TrashInputs4';
import Points from '../comps/RewardsComps/PointsComp';
import RewardsHeading from '../comps/RewardsComps/RewardsHeadingComp';
import RewardsSubhead from '../comps/RewardsComps/Subheading';
import SquareImages from '../comps/RewardsComps/HelpYourselfComp';
import Clock from '../comps/TylersComps/Clock';
import InfoButton from '../comps/TylersComps/Button'
import InfoButton2 from '../comps/TylersComps/Button2'
import InfoButton3 from '../comps/TylersComps/Button3'
import Widget from '../comps/TylersComps/Widget'
import NavBar from '../comps/NavBar/Nav';
import ComHight from '../comps/TylersComps/CommunityHighlights';
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
  grid-auto-rows:540px;
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
      <h1 className="PageHead">Information</h1>
      </div></div>

    <div className="left"><div>
      <h1>Community Highlights</h1>
      <ComHight routeTo="/community_highlights"/>
      </div></div>

    <div className="mid"><div>
  <h1>Discussion is Key</h1>
<InfoButton routeTo="/recyclingtips" text="Pro-Recycling Tips" /><br></br>
<InfoButton2 /><br></br>
<InfoButton3 />

      </div></div>


         </InformationCont>
}
{
  
  
  
  /* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
<KodiButton text="Kodi's Button" bgcolor="#856DBC" />
<BonnieButton text="Bonnie's Button"/>
<TylerButton/> */}