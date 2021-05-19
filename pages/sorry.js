import styled from 'styled-components';
import BackButton from '../comps/TylersComps/BackButton1';
import SadEarth from '../comps/SadEarthPic';
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
  grid-auto-rows:200px;
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

export default function Rewards() {
  return <RewardsCont>
  


    <div className="mid"><div>
        <br></br>     <br></br>      <br></br> <br></br>     <br></br>      <br></br>
<h1>Sorry! <br></br>You do not have enough points</h1>
<SadEarth />
<br></br>
<BackButton text="Go Back" routeTo="/rewards" />
      </div></div>


    
         </RewardsCont>
}
{
  
  
  
  /* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
<KodiButton text="Kodi's Button" bgcolor="#856DBC" />
<BonnieButton text="Bonnie's Button"/>
<TylerButton/> */}