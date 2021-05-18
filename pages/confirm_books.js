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
import BooksImg from '../comps/RewardsComps/RewardImagesComp/books';
import SmallLogo from '../comps/SmallLogo';
// import  from '../comps/TrashLogComponents/Discussion';


const RewardsCont = styled.div`

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
  grid-auto-rows:275px;
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

const InfoButtonCont = styled.div`

`

const ButtonInput = styled.button`
background-color:#B2A68D;
color:#FFF;
width: 324px;
height: 178px;
font-size: 24px;
border: none;
font-family: 'Martel Sans', sans-serif;

h1{
    line-break:none;
}
`




export default function Rewards() {

  function dailyCollected(){
    var canData = sessionStorage.getItem("cans");
    var bottleData = sessionStorage.getItem("bottles");
    var cardboardData = sessionStorage.getItem("cardboard");
    var organicData = sessionStorage.getItem("organics");

    var integer = parseInt(canData, 10)
    var integer2 = parseInt(bottleData, 10)
    var integer3 = parseInt(cardboardData, 10)
    var integer4 = parseInt(organicData, 10)


    var allData = document.getElementById("collected").innerHTML = integer + integer2 + integer3 + integer4;
  

 }


 
  return <RewardsCont onClick={dailyCollected}>

    <div className="top"><div>
    <SmallLogo />
      <NavBar/>
      <h1 className="PageHead">Rewards</h1>
      </div></div>

    <div className="left"><div><br></br>
    <DailyTrash text="Your Total Points: 89" />

      </div></div>

    <div className="mid"><div>
  <h1>Random E-Book</h1>
<BooksImg/>
<h2>Redeem 50 Points For <br></br>1 Book?</h2>
<GreenButton onClick={()=>router.push(routeTo)} text="Yeah!"/>
      </div></div>


    
         </RewardsCont>
}