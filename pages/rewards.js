import styled from 'styled-components';
import SquareImages from '../comps/RewardsComps/HelpYourselfComp';
import NavBar from '../comps/NavBar/Nav';
import SmallLogo from '../comps/SmallLogo';
import TotalPoints from '../comps/TrashLogComponents/TotalPoints';
import Pointer from '../comps/Pointer';
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
  grid-auto-rows:525px;
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
  grid-auto-rows:775px;
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

    <div className="left"><div>
    <h1>Tap For Stats</h1>
    <Pointer />
<TotalPoints />

      </div></div>

    <div className="mid"><div>
  <h1>Help the World, Help Yourself!</h1>
< SquareImages/>
      </div></div>


    
         </RewardsCont>
}
{
  
  
  
  /* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
<KodiButton text="Kodi's Button" bgcolor="#856DBC" />
<BonnieButton text="Bonnie's Button"/>
<TylerButton/> */}