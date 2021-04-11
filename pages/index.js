import styled from 'styled-components';
import JacobButton from '../comps/JacobButton';
import KodiButton from '../comps/Kodibutton';
import BonnieButton from '../comps/BonnieButton';
import TylerButton from '../comps/TylerButton';
import DailyTrash from '../comps/TrashLogComponents/YourStatistics';
import GreenButton from '../comps/TrashLogComponents/GreenButton';
import RedButton from '../comps/TrashLogComponents/RedButton';
import TrashInputs from '../comps/TrashLogComponents/Discussion'
// import  from '../comps/TrashLogComponents/Discussion';


const HomeCont = styled.div`
  .header {
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px;
  }

  .bottom {
    display:flex;

    .left {
      display:flex;
      flex-direction:column;
      padding:10px;
    }

    .right {
      padding:10px;
    }

  }
`;

export default function Home() {
  return <HomeCont>
  <JacobButton text="Jacob's Button" bgcolor="#FAD"/>
  <KodiButton text="Kodi's Button" bgcolor="#856DBC" />
  <BonnieButton text="Bonnie's Button"/>
  <TylerButton/>
  <DailyTrash/>
  <DailyTrash text="Weekly Trash Collected: 27"/>
  <DailyTrash text="Weekly Trash Goal: 40"/>
  <TrashInputs />
  <TrashInputs />
  <TrashInputs />
  <TrashInputs />
  <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
<RedButton/>
<GreenButton/>
         </HomeCont>
}