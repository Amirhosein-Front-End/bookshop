import React, { useState } from "react";

import { Link as Route, useLocation } from "react-router-dom";

import styled from "styled-components";

import Input from "./LoginFields";
import Checkbox from "./LoginCheckbox";
import Button from "./LoginButton";

import Footer from '../footer/Footer';

import emailSvg from "../../image/email.svg";
import passSvg from "../../image/pass.svg";

const Container = styled.div`
  margin: 120px auto;
  width: 90%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

@media screen and (min-width: 200px) and (max-width: 720px) {
  margin-bottom: 390px;
}

  @media screen and (min-width: 992px) {
    margin: 70px auto;
  }
  @media screen and (max-width: 420px) {
    width: 80%;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 342px;
  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <Route {...props}>{children}</Route>;
};

const AuthLink = styled(Link)`
  display: block;
  width: 50%;
  text-align: center;
  color: black;
  text-decoration: none;
  padding: 5px;
  background-color: ${(props) => (props.isActive ? "white" : "none")};
`;

const Form = styled.form`
  background-color: white;
  width: 310px;
  border: 1px solid #eee;
  padding: 16px;
  box-shadow: 1px 1px 5px -4px;
  @media screen and (max-width: 420px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

const Header = styled.h2`
  color: #0099cc;
  text-align: center;
  margin: 0 auto 20px;
`;

const Login = () => {
  const { pathname } = useLocation();

  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const inputChangeHandler = (event) => {
    event.persist();
    setFormFields((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <Container>
        <Header>ثبت نام | ورود</Header>
        <LinksContainer>
          <AuthLink to="/signup" isActive={pathname === "/signup" ? true : false}>
            ثبت نام
          </AuthLink>
          <AuthLink to="/login" isActive={pathname === "/login" ? true : false}>
            ورود
          </AuthLink>
        </LinksContainer>
        <Form>
          <Input
            type="text"
            name="username"
            placeholder="ایمیل"
            value={formFields.username}
            handler={inputChangeHandler}
            icon={emailSvg}
          />
          <Input
            type={isChecked ? "text" : "password"}
            name="password"
            placeholder="رمز عبور"
            value={formFields.password}
            handler={inputChangeHandler}
            icon={passSvg}
          />
          <Checkbox
            showPass={isChecked}
            setShowPass={setIsChecked}
          />
          <Button>ورود</Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
