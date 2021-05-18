import styled from 'styled-components';
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
import NavBar from '../comps/NavBar/Nav';
import {useRouter} from 'next/router'
import SmallLogo from '../comps/SmallLogo';
import InfoIcon1 from '../comps/TrashLogComponents/InfoButton1'
import InfoIcon2 from '../comps/TrashLogComponents/InfoButton2'
import InfoIcon3 from '../comps/TrashLogComponents/InfoButton3'
import InfoIcon4 from '../comps/TrashLogComponents/InfoButton4'
import TrashGoal from '../comps/TrashLogComponents/TrashGoal';


// import  from '../comps/TrashLogComponents/Discussion';


const HomeCont = styled.div`

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
  grid-auto-rows:585px;
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
  grid-auto-rows:1100px;
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


  

  const router = useRouter();
  
  return <HomeCont>
  

    <div className="top"><div>
    <SmallLogo />
      <NavBar/>
      <h1 className="PageHead">Trash Log</h1>
      </div></div>

    <div className="left"><div>
      <h1>Your Statistics</h1>
  <DailyTrash/><br></br>
  <TrashGoal />
      </div></div>

    <div className="mid"><div>
  <h1>What did you collect today?</h1>

  <TrashInputs className="Input" text="Cans"/>




  
  
  <br></br> <br></br> <br></br>
{/* <RedButton/><br></br> */}
<br></br>
{/* <GreenButton routeTo="/isthisright"/> */}
      </div></div>
         </HomeCont>
}
{
  
  
  
  /* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
<KodiButton text="Kodi's Button" bgcolor="#856DBC" />
<BonnieButton text="Bonnie's Button"/>
<TylerButton/> */}