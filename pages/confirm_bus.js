import styled from 'styled-components';
import DailyTrash from '../comps/TrashLogComponents/YourStatistics';
import GreenButton from '../comps/TrashLogComponents/GreenButton';
import RedButton from '../comps/TrashLogComponents/RedButton';
import TrashInputs from '../comps/TrashLogComponents/Discussion';
import Points from '../comps/RewardsComps/PointsComp';
import RewardsHeading from '../comps/RewardsComps/RewardsHeadingComp';
import RewardsSubhead from '../comps/RewardsComps/Subheading';
import SquareImages from '../comps/RewardsComps/HelpYourselfComp';
import NavBar from '../comps/NavBar/Nav';
import BusImg from '../comps/RewardsComps/RewardImagesComp/bus';
import SmallLogo from '../comps/SmallLogo';
// import  from '../comps/TrashLogComponents/Discussion';


const RewardsCont = styled.div`

html, body{
  margin:0px;
  padding:0px;
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
  grid-auto-rows:200px;
  text-align:center;
  font-family:Martel Sans;
  color:white;
  justify-content:center;
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
  grid-auto-rows:1000px;
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

export default function Rewards() {
  return <RewardsCont>
  

    <div className="top"><div>
    <SmallLogo />
      <NavBar/>
      <h1 className="PageHead">Rewards</h1>
      </div></div>

    <div className="left"><div><br></br>
    <DailyTrash text="Your Total Points: 89" />

      </div></div>

    <div className="mid"><div>
  <h1>One Day Buss Pass</h1>
<BusImg/>
<h2>Redeem 50 Points For <br></br> One Day Buss Pass?</h2>
<GreenButton text="Yeah!"/>
      </div></div>


    
         </RewardsCont>
}
{
  
  
  
  /* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
<KodiButton text="Kodi's Button" bgcolor="#856DBC" />
<BonnieButton text="Bonnie's Button"/>
<TylerButton/> */}