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




// `;


// const Info = styled.div `
// margin-left:10px;
// margin-top:5px;

// `;





//----COMPONENT BUILDS----//

const InfoIcon1 = ({

}) => {

   
   return <Popup
   trigger={<button className="button"> ? </button>}
   modal
   nested
 >
   {close => (
     <div className="modal">
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header"> How do I recycle cans? </div>
       <div className="content">
         {' '}
         The best way to recycle your cans is to sort them by size and whether they are cans used for alcohol or not.

Sorting it allows you to bring it to the bottle depot to get a refund on your used cans! So you get some money from them, and get a bonus from us!
       </div>
       <div className="actions">
         
    
       </div>
     </div>
   )}
 </Popup>
}



//----EXPORTS----//

export default InfoIcon1