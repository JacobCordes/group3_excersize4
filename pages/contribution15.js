import styled from 'styled-components';
import {useRouter} from 'next/router'
import BackButton from '../comps/TylersComps/BackButton1';
import EarthPic from '../comps/EarthPic';
// import  from '../comps/TrashLogComponents/Discussion';


const HomeCont = styled.div`

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

.top{
  display:grid;
  grid-template-columns: 1fr;
  grid-auto-rows:1000px;
  text-align:center;
  font-family:Martel Sans;
  color:white;
}


.top > div{
  background:white;
  padding:1em;
}

.top > div:nth-child(odd){
  background:#B2A68D;
}




`;


export default function Home() {
  
  
  const router = useRouter();
  return <HomeCont>
  

    <div className="top"><div>
<h1>Cool! <br></br> You have collected 15 or more pieces of trash!</h1>
<EarthPic />
<br></br>

<h3>Litter is a safety hazard to children as they are more likely to pick up litter out of curiousity and possibly put it in their mouth. By keeping litter of the streets, you are helping to reduce this risk.</h3>
<br></br><BackButton routeTo="/rewards" text="Check Rewards!"></BackButton>
      </div></div>


         </HomeCont>
}