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
   <h1>How do I<br></br>Recycle Cans?</h1>
   <ProgressBar bgcolor="#54738E" height="15px" duration="1"/>
      </div></div>

      <div className="left"><div>
   <p>The best way to recycle your<br></br>cans is to sort them by size and<br></br>whether they are cans used for<br></br>alcohol or not.
</p><br></br>
<p>Sorting it allows you to bring it<br></br> to the bottle depot to get a <br></br>refund on your used cans!<br></br>So you get some money from<br></br>them, and get a bonus from us!
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