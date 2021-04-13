import React from 'react';
import styled from 'styled-components';

const WidgetCont = styled.div`
display: flex;
align-items: flex-end;
background-image: url(stanleypark.jpg);
width: 158px;
height: 158px;
font-size: 24px;
border-radius: 20px;
`

const WidgetText = styled.div`
color:#FFF;
border: none;
padding:6px;
`

const Widget = ({
    text1="Stanley",
    text2="Park"
}) => {

    return <WidgetCont>
        <WidgetText>{text1}<br></br>{text2}</WidgetText>
    </WidgetCont>
}

export default Widget;