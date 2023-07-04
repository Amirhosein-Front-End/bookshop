import React from 'react';

import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  max-width: 304px;
  height: 15px;
  margin-bottom: 13px;
  background-color: white;
`;

const ErrorLabel = styled.label`
  display: block;
  width: 250px;
  height: 15px;
  margin-right: 15px;
  background-color: white;
  font-family: inherit;
  font-size: 12px;
  color: red;
  @media screen and (max-width: 420px) {
    width: 100%;
    max-width: 250px;
  }
`;

const Label = (props) => {
  return (
    <Div>
      <ErrorLabel>{props.children}</ErrorLabel>
    </Div>
  );
}

export default Label;