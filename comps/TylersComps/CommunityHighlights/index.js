import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ComHight = styled.div`

background-image: url(van.png);
width: 260px;
height: 200px;
border-radius:25px;
background-size: 100% 100%;
`;

const CardDiv = styled.div`
margin-bottom:20px;
min-width:200px;
min-height:150px;
display:flex;
justify-content:center;
align-items:center;
`



const CommunityHighlights = () => {
    useEffect(() => {
      Aos.init({ duration: 1500});
    }, []);
    
    const router = useRouter();

    return <CardDiv data-aos="flip-up"><ComHight onClick={()=>router.push("/community_highlights")}>
        
        </ComHight>
        </CardDiv>
}

export default CommunityHighlights;