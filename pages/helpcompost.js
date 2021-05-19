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
   <h1>How do I<br></br>Compost?</h1>
   <ProgressBar bgcolor="#54738E" height="15px" duration="1"/>
      </div></div>

      <div className="left"><div>
  <ol>
  <li>Start your compost pile on bare earth. This allows worms and other beneficial organisms to aerate the compost and be transported to your garden beds.</li>
  <li>Lay twigs or straw first, a few inches deep. This aids drainage and helps aerate the pile.
  <li>Add compost materials in layers, alternating moist and dry. Moist ingredients are food scraps, tea bags, seaweed, etc. Dry materials are straw, leaves, sawdust pellets and wood ashes. If you have wood ashes, sprinkle in thin layers, or they will clump together and be slow to break down.</li></li>
  <li>Add manure, green manure (clover, buckwheat, wheatgrass, grass clippings) or any nitrogen source. This activates the compost pile and speeds the process along.</li>
  <li>Keep compost moist. Water occasionally, or let rain do the job.</li>
  <li>Cover with anything you have – wood, plastic sheeting, carpet scraps. Covering helps retain moisture and heat, two essentials for compost. Covering also prevents the compost from being over-watered by rain. The compost should be moist, but not soaked and sodden.
  Turn. Every few weeks give the pile a quick turn with a pitchfork or shovel. This aerates the pile. Oxygen is required for the process to work, and turning “adds” oxygen. You can skip this step if you have a ready supply of coarse material like straw. Once you’ve established your compost pile, add new materials by mixing them in, rather than by adding them in layers. Mixing, or turning, the compost pile is key to aerating the composting materials and speeding the process to completion. If you want to buy a composter, rather than build your own compost pile, you may consider a buying a rotating compost tumbler which makes it easy to mix the compost regularly.</li>
</ol>
<InfoButton routeTo="/trashlog" text="Go Back"/>
   </div></div>


         </HomeCont>
}
{
  
  
  
  /* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
<KodiButton text="Kodi's Button" bgcolor="#856DBC" />
<BonnieButton text="Bonnie's Button"/>
<TylerButton/> */}