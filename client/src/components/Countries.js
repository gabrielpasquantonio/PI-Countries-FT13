import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import React, { useState, useEffect } from "react";

function Countries(props) {
const {  loading, page, setPage, total,countries,data } = props;



  const previousPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };





  
  return (
    <div>
      {data? (
        <>
        <Container>
          <h1>Countries </h1>
          
        </Container>
        <Content>
          {data ? (
            
              <Card>
                <Wrap key={data.name}>
                  <Link to={`/countries/${data.id}`}>
                    <img src={data.flag} alt={data.name} />
                  </Link>
                </Wrap>
                <Bottom>
                  <h4>Name: {data.name}</h4>
                  <h4>Region: {data.region}</h4>
                </Bottom>
              </Card>
            
          ) : (
            <h1>Loading...</h1>
          )}
        </Content>
      </>
      ) : (
        <>
          <Container>
            <h1>Countries </h1>
            <Pagination
              page={page + 1}
              totalPages={total}
              onLeftClick={previousPage}
              onRightClick={nextPage}
            />
          </Container>
          <Content>
            {Array.isArray(countries) ? (
              countries.map((country) => (
                <Card>
                  <Wrap key={country.name}>
                    <Link to={`/countries/${country.id}`}>
                      <img src={country.flag} alt={country.name} />
                    </Link>
                  </Wrap>
                  <Bottom>
                    <h4>Name: {country.name}</h4>
                    <h4>Region: {country.region}</h4>
                  </Bottom>
                </Card>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </Content>
        </>
      )}
    </div>
  );
}

const Container = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;

const Bottom = styled.div`
  margin-top: 20px;
  display: row;
  padding: 20px;
`;

const Card = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
const Content = styled.div`
  padding: 40px;
  margin-top: 100px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
`;
export default Countries;
