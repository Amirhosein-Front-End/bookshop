import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  max-width: 304px;
  height: fit-content;
  margin-bottom: 13px;
  display: flex;
  align-items: center;
`;

const CheckboxDiv = styled.div`
  display: flex;
  width: 50%;
  margin-left: 25px;
`;

const InputElement = styled.input`
  width: 17px;
  margin-left: 10px;
  font-family: inherit;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 0.78rem;
  cursor: pointer;
`;

const ForgottenPass = styled(Link)`
  font-size: 0.6rem;
  text-decoration: none;
  color: blue;
  &:hover {
    color: green;
  }
`;

const Checkbox = ({ showPass, setShowPass }) => {

  const { pathname } = useLocation();

  const handleChange = () => {
    setShowPass(prevState => !prevState);
  };

  return (
    <>
      <Div>
        <CheckboxDiv>
          <InputElement
            id='check'
            type='checkbox'
            checked={showPass}
            onChange={handleChange}
            value='showpass'
          />
          <Label htmlFor='check'>نمایش رمزعبور</Label>
        </CheckboxDiv>
        {
          pathname === "/login" && <ForgottenPass to='/signup'>رمز عبور خود را فراموش کرده‌اید؟</ForgottenPass>
        }
      </Div>
    </>
  );
}
 
export default Checkbox;