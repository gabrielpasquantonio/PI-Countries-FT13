import styled from "styled-components";
import userPhoto from "../assets/avatar.png";
import { NavLink } from "react-router-dom";
import Henry from "../assets/logo.png";
import Home from "../assets/home-icon.svg";
import React,{useContext} from "react";


function Footer() {
    return (
   
             <Nav>
      <NavLink exact to="/">
        <Logo>
          <img src={Henry} alt="Henry" />
          
        </Logo>
        
      </NavLink>
      <NavMenu1>
      <a>
            <span>@2021 PI FT13 - All rights reserved</span>
          </a>
              
      </NavMenu1>
      <NavMenu>
        <NavLink exact to="/create" className="favorite">
          <a>
            <span>@2021 PI FT13 - All rights reserved</span>
          </a>
        </NavLink>
        
     
      </NavMenu>

 
        



    </Nav>
     
    )
}


const Nav = styled.nav`
  position: relative;
  top: 10;
  bottom:0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;


const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 10px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
  @media (max-width: 468px) {
      display: none;
    }
`;
const UserImg = styled.img`
  height: 100%;
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

    @media (max-width: 468px) {
      display: none;
    }
  
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    @media (max-width: 768px) {
      padding: 0 6px;
    }
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  .hidden {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .favorite {
    @media (max-width: 768px) {
      justify-content: space-between;
    }
  }
`;
const NavMenu1 = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  

    @media (mIN-width: 468px) {
      display: none;
    }
  
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    @media (max-width: 768px) {
      padding: 0 6px;
    }
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  .hidden {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .favorite {
    @media (max-width: 768px) {
      justify-content: space-between;
    }
  }
`;


const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  color: rgb(249, 249, 249);

  a{
      text-decoration: none;
      color:rgb(249, 249, 249);
  }
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
export default Footer
