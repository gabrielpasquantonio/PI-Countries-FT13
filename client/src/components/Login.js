import React from "react";
import styled from "styled-components";
import imageOne from "../assets/logo1.png"


const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <Div>
          <CTALogoOne src={imageOne} alt="" /><h4>Individual Project - Henry Countries</h4></Div>
          <SignUp href="/home" >GO TO HOME PAGE</SignUp>
          <Description>
          The general idea is to create an application in which you can see information from different countries using the external api restcountries and from there, you can, among other things:<br/>
           Search countries ||        
          Filter / Sort them ||
          Create tourist activities 
          </Description>
         
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Div = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
h4{
  font-size: larger;
}
`;
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10cw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("/images/mundi.png");
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 10px;
  max-width: 150px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #090b13;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.h2`
  color: hsla(0, 0%, 95.31%, 1);
  font-size: 18px;
  margin: 0 0 24px;
  line-height: 1.6;
  letter-spacing: 1.8px;
`;

export default Login;
