import styled from 'styled-components';
import {useRouter} from 'next/router'
import NavBar from '../comps/NavBar/Nav';
import SmallLogo from '../comps/SmallLogo';
import BackButton from '../comps/TylersComps/BackButton1';
// import  from '../comps/TrashLogComponents/Discussion';


const InformationCont = styled.div`

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
  grid-auto-rows:850px;
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
  background:#9DBA94;
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

export default function Information() {

    const router = useRouter();
  return <InformationCont>
 

    <div className="top"><div>
    <SmallLogo />
      <NavBar/>
      <h1 className="PageHead">Information</h1>
      </div></div>

    <div className="left"><div>
      <h2>Discussion is Key.</h2>
      <h1>Minding your <br></br>Eco-Footprint</h1>
      <p>• Don't drive when there is an alternative <br></br><br></br>
      • Install energy-saving lamps in your home <br></br><br></br>
      • Dry your clothes naturally whenever possible <br></br><br></br>
      • Take shorter, less frequent showers <br></br><br></br>
      • Run the dishwasher and the washing machine only when full. <br></br><br></br></p>
  <br></br>
  <BackButton routeTo="/information" text="Go Back"/>
      </div></div>

   
         </InformationCont>
}
{
  
  
  
  /* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
<KodiButton text="Kodi's Button" bgcolor="#856DBC" />
<BonnieButton text="Bonnie's Button"/>
<TylerButton/> */}