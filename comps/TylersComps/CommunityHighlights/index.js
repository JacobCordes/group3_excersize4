import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

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



const CommunityHighlights = ({
    routeTo="/"

}) => {
    
    const router = useRouter();

    return <CardDiv><ComHight onClick={()=>router.push(routeTo)}>
        
        </ComHight>
        </CardDiv>
}

export default CommunityHighlights;