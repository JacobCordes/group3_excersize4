import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const UL = styled.ul `


    list-style:none;
    display: flex;
    flex-flow:row nowrap;


li {
    padding: 18px 10px;
}

li:hover{
    color:#54738E;
}


@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #A88C7D;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right:0;
    height: 100vh;
    width:300;
    padding-top: 3.5rem;
    translation; transform 0.3s ease-in-out;

    li{
        color:#fff;
    }
}

`;


const RightNav = ({ open }) => {
    
    const router = useRouter();

   return  <UL open={open}>
           <li onClick={()=>router.push("/hellouser")}>Home</li>
           <li onClick={()=>router.push("/information")}>Information</li>
           <li onClick={()=>router.push("/trashlog")}>Trash Log</li>
           <li onClick={()=>router.push("/rewards")}>Rewards</li>
           <li onClick={()=>router.push("/aboutus")}>About</li>
       </UL>
}

export default RightNav