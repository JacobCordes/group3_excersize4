import styled from 'styled-components';
import React, {useState} from 'react';
import Clock from '../comps/TylersComps/Clock';
import Widget from '../comps/TylersComps/Widget'
import NavBar from '../comps/NavBar/Nav';
import SmallLogo from '../comps/SmallLogo';
import LiveClock from '../comps/LiveClock';
// import  from '../comps/TrashLogComponents/Discussion';


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
  grid-auto-rows:600px;
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
      <h1>Good Morning.</h1>
        <Clock/>
        <LiveClock />
      </div></div>

    <div className="mid"><div>
  <h1>What's going on nearby?</h1>
  <Widget/>
      </div></div>


    
         </HelloUserCont>
}
{
  
  
  
  /* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
<KodiButton text="Kodi's Button" bgcolor="#856DBC" />
<BonnieButton text="Bonnie's Button"/>
<TylerButton/> */}