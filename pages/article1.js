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
   <h1>How Does Recycling<br></br>Aluminum Cans Help<br></br>the Environment?</h1>
      </div></div>

      <div className="left"><div>
   <h2>Why Recycle Aluminum Cans?</h2>
   <p>What makes aluminum so different from other metals is that it is a 100 percent recyclable material. Aluminum cans are the most common form of processed aluminum available for recycling, which makes them the focus of the aluminum recycling program. For people who do not recycle aluminum cans on their own, several states have passed laws applying deposits to their aluminum can purchases as incentives for people to recycle. By returning aluminum cans for deposit, the market can count on a certain supply of recycled aluminum for further aluminum production demands. Aluminum can manufacturers want to use recycled aluminum because it takes 95 percent less energy to transform into another aluminum can than it takes to mine the aluminum ore and make a can from scratch.
</p><br></br>
<h2>The Environmental Impact</h2>
<p>Because of the 95 percent less energy it takes to transform a recycled can, manufacturers also emit 95 percent fewer production emissions, which has a significant effect on reduced carbon emissions and global warming contributions. This reduces the demand on energy and natural resources needed to manufacture new aluminum cans. Because the cans are recycled, there is a reduced cost in waste disposal from the consumer and industry. The use of deposits also discourages consumers from simply discarding their aluminum cans, so it cuts down on litter and trash along the highways and the streets. If all aluminum cans were recycled, there would be no need for destructive aluminum ore mining because supply would always meet demand. Recycling just 40 aluminum cans has the effect of reducing gasoline consumption by a single gallon.
</p><br></br>
<h2>How to Recycle Aluminum Cans</h2>
<p>Recycling aluminum cans is easy. When they are empty, rinse them out so they are clean and either return them to the store for deposit or recycle them with the rest of your recyclable household materials. If your state has an aluminum can deposit, it is marked on the can and the store charges you that extra deposit amount at the time of purchase. Most facilities that pay deposits do not take crushed aluminum cans. If there is no deposit, crushing the cans saves on storage space until recycled. Most disposal services pick up recycling with the rest of the garbage but may have specific requirements such as certain pickup days and no co-mingling with other recyclables. Other cities have recycling facilities at designated areas, at community transfer stations, or even offer recycling services through the school. Regardless of how aluminum cans are recycled, within 60 days they are back on the shelf as new aluminum cans and ready to repeat the cycle for the next 400 years.
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