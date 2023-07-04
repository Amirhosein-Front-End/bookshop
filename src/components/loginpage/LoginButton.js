import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
  background-color: #00a8d6;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  width: 90%;
  padding: 10px;
  font-family: inherit;
  border-radius: 8px;
  display: block;
  margin: 30px auto;
  transition: all ease 0.3s;
  &:hover {
    background-color: #036885;
  }
`;

const LoginButton = ({children}) => {
  return (
    <>
      <Button>{children}</Button>
    </>
  );
}
 
export default LoginButton;