import React, { useState, useEffect } from "react";

import { Link as Route, useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Input from "./LoginFields";
import Checkbox from "./LoginCheckbox";
import LoginButton from "./LoginButton";
import Label from "./ErrorLabel";

import Footer from '../footer/Footer';

import emailSvg from "../../image/email.svg";
import passSvg from "../../image/pass.svg";
import userSvg from "../../image/user.svg";

// Validation Functions
import signupValidate from '../../functions/signupValidate';

const Container = styled.div`
  margin: 170px auto 370px;
  width: 90%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 200px) and (max-width: 720px) {

    margin-bottom: 260px;
}

  @media screen and (min-width: 992px) {
    margin: 70px auto;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 342px;
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
`;

const Header = styled.h2`
  color: #0099cc;
  text-align: center;
  margin: 0 auto 20px;
`;

const Signup = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [blurState, setBlurState] = useState({});

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    setErrors(signupValidate(formFields));
  }, [formFields])

  const inputChangeHandler = (event) => {
    event.persist();
    setFormFields((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const focusHandler = event => {
    setTouched({...touched, [event.target.name]: true});
  };

  const blurHandler = event => {
    setBlurState({...blurState, [event.target.name]: true});
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      toast.success("ثبت نام با موفقیت انجام شد")
      setTimeout(() => {
        navigate('/', {replace: true})
      }, 4000);
    } else {
      setTouched({
        firstName: true,
        lastName: true,
        username: true,
        password: true,
      });
      setBlurState({
        firstName: true,
        lastName: true,
        username: true,
        password: true
      });
      toast.error("فیلدهای مورد نیاز را پر کنید")
    }
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
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="firstName"
            placeholder="نام"
            value={formFields.firstName}
            handler={inputChangeHandler}
            icon={userSvg}
            handleFocus={focusHandler}
            handleBlur={blurHandler}
          />
          {
            errors.firstName &&
            touched.firstName &&
            blurState.firstName &&
            <Label>{errors.firstName}</Label>
          }
          <Input
            type="text"
            name="lastName"
            placeholder="نام خانوادگی"
            value={formFields.lastName}
            handler={inputChangeHandler}
            icon={userSvg}
            handleFocus={focusHandler}
            handleBlur={blurHandler}
          />
          {
            errors.lastName &&
            touched.lastName &&
            blurState.lastName &&
            <Label>{errors.lastName}</Label>
          }
          <Input
            type="text"
            name="username"
            placeholder="ایمیل"
            value={formFields.username}
            handler={inputChangeHandler}
            icon={emailSvg}
            handleFocus={focusHandler}
            handleBlur={blurHandler}
          />
          {
            errors.username &&
            touched.username &&
            blurState.username &&
            <Label>{errors.username}</Label>
          }
          <Input
            type={isChecked ? "text" : "password"}
            name="password"
            placeholder="رمز عبور"
            value={formFields.password}
            handler={inputChangeHandler}
            icon={passSvg}
            handleFocus={focusHandler}
            handleBlur={blurHandler}
          />
          {
            errors.password &&
            touched.password &&
            blurState.password &&
            <Label>{errors.password}</Label>
          }
          <Checkbox
            showPass={isChecked}
            setShowPass={setIsChecked}
          />
          <LoginButton>ثبت نام</LoginButton>
        </Form>
        <ToastContainer />
      </Container>
      <Footer />
    </>
  );
};

export default Signup;
