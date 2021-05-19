import styled from 'styled-components';
import InfoButton from '../comps/TylersComps/Button'
import ProgressBar from "react-scroll-progress-bar";
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
   <h1>How do I<br></br>Recycle Cardboard?</h1>
   <ProgressBar bgcolor="#54738E" height="15px" duration="1"/>
      </div></div>

      <div className="left"><div>
   <p>Residential cardboard can be recycled for free<br></br> through the provincial Recycle BC program.<br></br>In the Capital Region this is available through<br></br>the curbside blue box recycling program as well as <br></br>some drop off locations.
</p><br></br>

<InfoButton routeTo="/trashlog" text="Go Back"/>
   </div></div>


         </HomeCont>
}
{
  
  
  
  /* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
<KodiButton text="Kodi's Button" bgcolor="#856DBC" />
<BonnieButton text="Bonnie's Button"/>
<TylerButton/> */}