import styled from 'styled-components';
import GreenButton from '../comps/TrashLogComponents/GreenButton';
import Tutorial1 from '../comps/Tutorial/1';
import Tutorial2 from '../comps/Tutorial/2';
import Tutorial3 from '../comps/Tutorial/3';
import Tutorial4 from '../comps/Tutorial/4';
import TutorialText from '../comps/Tutorial/Text';
import SmallText from '../comps/Tutorial/SmallText';
// import  from '../comps/TrashLogComponents/Discussion';


const HomeCont = styled.div`

html, body{
  margin:0px;
  padding:0px;
}

.top{
  display:grid;
  grid-template-columns: 1fr;
  grid-auto-rows:1900px;
  text-align:center;
  font-family:Martel Sans;
  color:white;
}


.top > div{
  background:white;
  padding:1em;
}

.top > div:nth-child(odd){
  background:#7297A0;
}




`;

export default function Home() {
  return <HomeCont>
  

    <div className="top"><div>
     <TutorialText text="How to use MyWaste!"/>
     <br></br>
     <SmallText text="#1 Pick Up Trash" />
    <Tutorial1 />
    <SmallText text="#2 Recycle or Find a Trash Can" />
    <Tutorial2 />
    <SmallText text="#3 Input What You Collected" />
    <Tutorial3 />
    <SmallText text="#4 Get Rewards!" />
    <Tutorial4 /> <br></br><br></br>
    <GreenButton text="Try Now!" routeTo="/hellouser"/>
        <br></br><br></br><br></br>
      
      </div></div>


         </HomeCont>
}
{
  
  
  
  /* <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
<KodiButton text="Kodi's Button" bgcolor="#856DBC" />
<BonnieButton text="Bonnie's Button"/>
<TylerButton/> */}