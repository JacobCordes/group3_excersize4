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
// import  from '../comps/TrashLogComponents/Discussion';


const HomeCont = styled.div`

html, body{
  margin:0px;
  padding:0px;
}

.top{
  display:grid;
  grid-template-columns: 1fr;
  grid-auto-rows:125px;
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
  grid-auto-rows:600px;
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
  background:#54738E;
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

export default function Home() {
  return <HomeCont>
  

    <div className="top"><div>
      <h1>Trash Log</h1>
      </div></div>

    <div className="left"><div>
      <h1>Your Statistics</h1>
  <DailyTrash/>
  <DailyTrash text="Weekly Trash Collected: 27"/>
  <DailyTrash text="Weekly Trash Goal: 40"/>
      </div></div>

    <div className="mid"><div>
  <h1>Discussion is Key</h1>

  <TrashInputs />
  <TrashInputs />
  <TrashInputs />
  <TrashInputs />
  <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
<RedButton/>
<GreenButton/>
      </div></div>


    <div className="bot"></div>


  {/* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
  <KodiButton text="Kodi's Button" bgcolor="#856DBC" />
  <BonnieButton text="Bonnie's Button"/>
  <TylerButton/> */}
  <RedButton text="Nope."/>
  <GreenButton text="Yeah!"/>
  <GreenButton text="What did we do?"/>
  <RewardsHeading/>
  <RewardsSubhead/>
  <Points/>
< SquareImages/>
         </HomeCont>
}