//----IMPORTS----//

import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


//----COMPONENT STYLING----//


// const InfoCont = styled.div `
// display:flex;
// position:absolute;
// background-color:#7297A0;
// width:30px;
// height:30px;
// border-radius:30px;
// color:white;
// border-style: none;
// font-size:25px;
// text-align:center;
// align-items: center;
// margin-left:-5px;
// margin-top:-145px;

const Margins = styled.div `
margin-right:350px;
margin-top:375px;
position:absolute;

`;


// `;


// const Info = styled.div `
// margin-left:10px;
// margin-top:5px;

// `;







//----COMPONENT BUILDS----//

const InfoIcon4 = ({

}) => {

   
   return <Margins><Popup
   trigger={<button className="button"> ? </button>}
   modal
   nested
 >
   {close => (
     <div className="modal">
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header"> How do I recycle Organics? </div>
       <div className="content">
         {' '}
         
  1. Start your compost pile on bare earth. <br></br><br></br>
  2. Lay twigs or straw first, a few inches deep. This aids drainage and helps aerate the pile.<br></br><br></br>
  3. Add compost materials in layers, alternating moist and dry.<br></br>
  4. Add manure<br></br><br></br>
  5. Keep compost moist. Water occasionally, or let rain do the job.<br></br><br></br>
  6.Cover with anything you have – wood, plastic sheeting, carpet scraps.<br></br><br></br> 
  7. Turn. Every few weeks give the pile a quick turn with a pitchfork or shovel.

       </div>
       <div className="actions">
         
    
       </div>
     </div>
   )}
 </Popup>
 </Margins>
}



//----EXPORTS----//

export default InfoIcon4