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
import Header from '../comps/Header';
// import  from '../comps/TrashLogComponents/Discussion';


const HomeCont = styled.div`

html, body{
  margin:0px;
  padding:0px;
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
  background:#7297A0;
}


ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}



li {
  float: left;
}

li a {
  
  color: white;
  text-align: center;
  padding: 10px 16px;
  text-decoration: none;
  border-radius:3px;
}

li a:hover:not(.active) {
  background-color: #54738E;
}

.active {
  background-color: #4CAF50;
}


`;

export default function Home() {
  return <HomeCont>
  

    <div className="top"><div>
      {/* <nav><ui>
        <li><a href="">Home</a></li>
        <li><a href="#">Information</a></li>
        <li><a href="#">Trash Log</a></li>
        <li><a href="#">Rewards</a></li>
        <li><a href="#">About Us</a></li>
        </ui>
        </nav> */}
        <br></br><br></br><br></br>
        <Header />
      </div></div>


         </HomeCont>
}
{
  
  
  
  /* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
<KodiButton text="Kodi's Button" bgcolor="#856DBC" />
<BonnieButton text="Bonnie's Button"/>
<TylerButton/> */}