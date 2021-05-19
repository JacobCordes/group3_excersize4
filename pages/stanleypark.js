import styled from 'styled-components';
import NavBar from '../comps/NavBar/Nav';
import SmallLogo from '../comps/SmallLogo';
// import  from '../comps/TrashLogComponents/Discussion';
import StanleyParkImg from '../comps/NewsComps/StanleyParkComp';
import StanleyParkLive from '../comps/ReactTwitterComps/StanleyParkLiveComp';


const HelloUserCont = styled.div`

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
    <h1>What's Going on Nearby?</h1>
    <StanleyParkLive/>
      </div></div>

         </HelloUserCont>
}
