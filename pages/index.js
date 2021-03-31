import styled from 'styled-components';
import JacobButton from '../comps/Button';
import KodiButton from '../comps/kodibutton';
import BonnieButton from '../comps/BonnieButton';
import TylerButton from '../comps/TylerButton';

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
         </HomeCont>
}