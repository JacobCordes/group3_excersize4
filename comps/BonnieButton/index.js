import React from 'react';
import styled from 'styled-components';

const ButtonCont = styled.span`
  margin:5px;
`;

const Button_div = styled.div`
  margin:10px;
`;

const Button_h3 = styled.h3`
  font-size:20px;
`;

const ButtonInput = styled.button`
  background-color:${props=>props.bg};
  color:#FFF;
  padding:10px;
  border:none;
  border-radius:5px;
`;

const BonnieButton = ({
  bgcolor="green",
  text="Button",
}) => {

  return <Button_div><ButtonCont>
    <ButtonInput bg={bgcolor}>
      <Button_h3>{text}</Button_h3>
    </ButtonInput>
  </ButtonCont>
  </Button_div>
}


export default BonnieButton;