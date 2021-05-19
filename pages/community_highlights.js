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
import NavBar from '../comps/NavBar/Nav';
import SmallLogo from '../comps/SmallLogo';
// import  from '../comps/TrashLogComponents/Discussion';
import EastVanImg from '../comps/NewsComps/EastVanComp';
import StanleyParkNews from '../comps/NewsComps/NewsImgComp';
import ComHight from '../comps/TylersComps/CommunityHighlights';
import ProfileSmaller from '../comps/ReactTwitterComps/community_highlights';





const HelloUserCont = styled.div`

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
  grid-auto-rows:700px;
  text-align:center;
  font-family:Martel Sans;
  color:white;
  height:400px;
  background:#9DBA94;
}


.left > div{
  background:white;
  padding:1em;
  align-items:center;
}

.left > div:nth-child(odd){
    background:#9DBA94;
}

.mid{
  display:grid;
  grid-template-columns: 1fr;
  grid-auto-rows:775px;
  text-align:center;
  font-family:Martel Sans;
  color:white;
  background:#9DBA94;
  justify-content:center;
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

export default function HelloUser() {
  return <HelloUserCont>
 

    <div className="top"><div>
      <SmallLogo />
      <NavBar/>
      <h1 className="PageHead">Information</h1>
      
      </div></div>

    <div className="left">
      <div>
        <h1>Community Highlights</h1>
       
        <ProfileSmaller/>
      
      </div>
      
      </div>

    <div className="mid"><div>
  
      </div></div>

         </HelloUserCont>
}
