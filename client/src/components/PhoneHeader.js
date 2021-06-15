import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Home from "../assets/home-icon.svg";
import favoriteContext from "../context/favoritesContext";

function PhoneHeader() {
  const { favoriteCountry } = useContext(favoriteContext);

  return (
    <Nav2>
      <NavMenu1>
        <NavLink exact to="/home">
          <img src={Home} alt="HOME" />
          <span>HOME</span>
        </NavLink>
        <NavLink exact to="/create" className="favorite">
          <a>
            <span>CREATE</span>
          </a>
        </NavLink>

        <NavLink exact to="/favorite" className="favorite">
          <a>
            <span>❤️{favoriteCountry.length} FAVORITES</span>
          </a>
        </NavLink>
      </NavMenu1>
    </Nav2>
  );
}

const Nav2 = styled.nav`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  height: 25px;
  background-color: #090b13;
  display: flow-root;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const NavMenu1 = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: space-around;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 2px;

  @media (min-width: 430px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 11px;
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
      font-size: 10px;
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
`;

export default PhoneHeader;
