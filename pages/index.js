import styled from 'styled-components';
import JacobButton from '../comps/Button';

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
           </HomeCont>
}