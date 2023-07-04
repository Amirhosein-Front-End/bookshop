import React from 'react';

import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  max-width: 304px;
  height: 37px;
  margin-bottom: 13px;
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  cursor: text;
`;

const InputElement = styled.input`
  display: block;
  width: 250px;
  height: 20px;
  margin-right: 15px;
  background-color: white;
  border: none;
  outline: none;
  font-family: inherit;
  @media screen and (max-width: 420px) {
    width: 100%;
    max-width: 250px;
  }
`;

const Image = styled.img`
  width: 18px;
  height: 22px;
  margin-right: 15px;
  color: lightgray;
`;

const Input = ({type, name, placeholder, value, handler, icon, handleFocus, handleBlur}) => {

  return (
    <>
      <Div>
        <Image src={icon} alt='icon' />
        <InputElement
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handler}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Div>
    </>
  );
}
 
export default Input;