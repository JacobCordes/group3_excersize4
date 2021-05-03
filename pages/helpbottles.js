import styled from 'styled-components';
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
import NavBar from '../comps/NavBar/Nav';
import Earth from '../comps/EarthPic';
import SmallLogo from '../comps/SmallLogo';
// import  from '../comps/TrashLogComponents/Discussion';


const HomeCont = styled.div`

html, body{
  margin:0px;
  padding:0px;
}

.top{
  display:grid;
  grid-template-columns: 1fr;
  grid-auto-rows:250px;
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
    grid-auto-rows:2400px;
    text-align:center;
    font-family:Martel Sans;
    color:white;
  }
  
  
  .left > div{
    background:white;
    padding:1em;
  }
  
  .left > div:nth-child(odd){
    background:#B2A68D;
  }



`;

export default function Home() {
  return <HomeCont>
  

    <div className="top"><div>
   <h1>How do I<br></br>Recycle Bottles?</h1>
      </div></div>

      <div className="left"><div>
   <p>The best way to recycle your<br></br>bottles is to sort them by size and<br></br>whether they are bottles used for<br></br>alcohol or not. Then you want to sort them<br></br>on if they are glass or plastic.
</p><br></br>
<p>Sorting it allows you to bring it<br></br> to the bottle depot to get a <br></br>refund on your used bottles!<br></br>So you get some money from<br></br>them, and get a bonus from us!
</p>
<InfoButton routeTo="/trashlog" text="Go Back"/>
   </div></div>


         </HomeCont>
}
{
  
  
  
  /* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
<KodiButton text="Kodi's Button" bgcolor="#856DBC" />
<BonnieButton text="Bonnie's Button"/>
<TylerButton/> */}