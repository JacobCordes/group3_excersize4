import React from 'react';
import styled from 'styled-components';


const ComHight = styled.div`

background-image: url(van.png);
width: 340px;
height: 270px;
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

    return <CardDiv><ComHight>
        
        </ComHight>
        </CardDiv>
}

export default CommunityHighlights;