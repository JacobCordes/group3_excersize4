import styled from 'styled-components';
import JacobButton from '../comps/JacobButton';
import KodiButton from '../comps/Kodibutton';
import BonnieButton from '../comps/BonnieButton';
import TylerButton from '../comps/TylerButton';
import DailyTrash from '../comps/TrashLogComponents/YourStatistics';
import GreenButton from '../comps/TrashLogComponents/GreenButton';
import RedButton from '../comps/TrashLogComponents/RedButton';
import TrashInputs from '../comps/TrashLogComponents/Discussion';
import Points from '../comps/RewardsComps/PointsComp';
import RewardsHeading from '../comps/RewardsComps/RewardsHeadingComp';
import RewardsSubhead from '../comps/RewardsComps/Subheading';
import SquareImages from '../comps/RewardsComps/HelpYourselfComp';
import Clock from '../comps/TylersComps/Clock';
import InfoButton from '../comps/TylersComps/Button'
import Widget from '../comps/TylersComps/Widget'
// import  from '../comps/TrashLogComponents/Discussion';


const HomeCont = styled.div`

html, body{
  margin:0px;
  padding:0px;
}

.top{
  display:grid;
  grid-template-columns: 1fr;
  grid-auto-rows:1500px;
  text-align:center;
  font-family:Martel Sans;
  color:white;
}


.top > div{
  background:white;
  padding:1em;
}

.top > div:nth-child(odd){
  background:#7297A0;
}


`;

export default function Home() {
  return <HomeCont>
  

    <div className="top"><div>
      <h1>Main Logo goes here</h1>
      </div></div>


  <DailyTrash/>
  <DailyTrash text="Weekly Trash Collected: 27"/>
  <DailyTrash text="Weekly Trash Goal: 40"/>
  <TrashInputs />
  <TrashInputs />
  <TrashInputs />
  <TrashInputs />
  <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
<RedButton/>
<GreenButton/>





  <RedButton text="Nope."/>
  <GreenButton text="Yeah!"/>
  <GreenButton text="What did we do?"/>
  <Clock></Clock>
  <InfoButton></InfoButton>
  <Widget></Widget>
  <RewardsHeading/>
  <RewardsSubhead/>
  <Points/>
< SquareImages/>
         </HomeCont>
}
{
  
  
  
  /* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
<KodiButton text="Kodi's Button" bgcolor="#856DBC" />
<BonnieButton text="Bonnie's Button"/>
<TylerButton/> */}