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
margin-right:365px;
margin-top:70px;
position:absolute;

`;


// `;


// const Info = styled.div `
// margin-left:10px;
// margin-top:5px;

// `;





//----COMPONENT BUILDS----//

const InfoIcon3 = ({

}) => {

   
   return<Margins><Popup
   trigger={<button className="button"> ? </button>}
   modal
   nested
 >
   {close => (
     <div className="modal">
       <button className="close" onClick={close}>
         &times;
       </button>
       <div className="header"> How do I recycle cardboard? </div>
       <div className="content">
         {' '}
        Residential cardboard can be recycled for free through the provincial Recycle BC program. In the Capital Region this is available through the curbside blue box recycling program as well as some drop off locations.
       </div>
       <div className="actions">
         
    
       </div>
     </div>
   )}
 </Popup>
 </Margins> 
}



//----EXPORTS----//

export default InfoIcon3