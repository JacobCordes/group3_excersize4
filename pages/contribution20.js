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
import Clock from '../comps/TylersComps/Clock';
import InfoButton from '../comps/TylersComps/Button'
import Widget from '../comps/TylersComps/Widget'
import Header from '../comps/Header';
import NavBar from '../comps/NavBar/Nav';
import {useRouter} from 'next/router'
import SmallLogo from '../comps/SmallLogo';
import IsThisRight1 from '../comps/IsThisRight';
import Pointer from '../comps/Pointer';
import BackButton from '../comps/TylersComps/BackButton1';
import EarthPic from '../comps/EarthPic';
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
  font-size:38px;
}

.top{
  display:grid;
  grid-template-columns: 1fr;
  grid-auto-rows:1000px;
  text-align:center;
  font-family:Martel Sans;
  color:white;
}


.top > div{
  background:white;
  padding:1em;
}

.top > div:nth-child(odd){
  background:#B2A68D;
}




`;


export default function Home() {
  
  
  const router = useRouter();
  return <HomeCont>
  

    <div className="top"><div>
<h1>Great! <br></br> You have collected 20 or more pieces of trash!</h1>
<EarthPic />
<br></br>

<h3>Litter is an eyesore, after all. Litter can negatively impact your sense of community and make people feel less safe. By picking it up, you’re showing pride for your community and beautifying the area.</h3><nr></nr>
<br></br><BackButton routeTo="/rewards" text="Check Rewards!"></BackButton>
      </div></div>


         </HomeCont>
}