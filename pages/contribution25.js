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
<h1>Fantastic! <br></br>You have collected 25 or more pieces of trash!</h1>
<EarthPic />
<br></br>

<h3>Improper disposal of trash is a potential breeding ground for bacteria and diseases. It spreads diseases, viruses, and parasites through direct and indirect contact. Through proper trash disposal, you are reducing the spread of dieseases.</h3><br></br>
<BackButton routeTo="/rewards" text="Check Rewards!"></BackButton>
      </div></div>


         </HomeCont>
}