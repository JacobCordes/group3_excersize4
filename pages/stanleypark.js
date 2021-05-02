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
import NavBar from '../comps/NavBar/Nav';
import SmallLogo from '../comps/SmallLogo';
// import  from '../comps/TrashLogComponents/Discussion';
import StanleyParkImg from '../comps/NewsComps/StanleyParkComp';
import StanleyParkNews from '../comps/NewsComps/NewsImgComp';


const HelloUserCont = styled.div`

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
  grid-auto-rows:700px;
  height:327px;
  text-align:center;
  font-family:Martel Sans;
  color:white;
}


.left > div{
  background:white;
  padding:1em;
  align-items:center;
}

.left > div:nth-child(odd){
  background:#7297A0;
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
      <h1 className="PageHead">Hello User</h1>
      
      </div></div>

    <div className="left"><div>
      <h1>Stanley Park</h1>
        <StanleyParkImg/>
      </div></div>

    <div className="mid"><div>
  <h1>Stanley Park</h1>
  <a className="twitter-timeline" data-width="500px" data-height="600px" href="https://twitter.com/StanleyParkEco?ref_src=twsrc%5Etfw">Tweets by StanleyParkEco</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div></div>

         </HelloUserCont>
}
