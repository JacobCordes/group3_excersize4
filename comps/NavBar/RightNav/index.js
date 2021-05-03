import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const UL = styled.ul `


    list-style:none;
    display: flex;
    flex-flow:row nowrap;
    z-index:1;


li {
    padding: 18px 10px;
}

li:hover{
    color:#54738E;
    transition:200ms;
}


@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #A88C7D;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right:0;
    height: 42vh;
    width:300;
    border-radius:20px 0px 0px 20px;
    padding-top: 2.5rem;
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