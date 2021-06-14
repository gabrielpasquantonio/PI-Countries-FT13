import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import React, { useState, useEffect,useContext } from "react";
import FavoriteContext from "../context/favoritesContext";
import { useDispatch, useSelector,connect } from "react-redux";

import {
  previousPage,
  nextPage
} from "../redux/actions";
function Countries(props) {
  const { loading,setPage,  countries, data,favorite } = props;
  const {favoriteCountry,updateFavoriteCountry}=useContext(FavoriteContext);
  const total = useSelector((state) => state.total)
  const page = useSelector((state) => state.page);
 
  console.log(page)


  function previous() {
    props.previousPage(page)
  }
  function next() {
    props.nextPage(page,total)
  }
 
console.log(total)
 


  const redHeart = "❤️";
  const blackHeart = "🖤";
  const clickHeart = (e) =>{
    e.preventDefault();
    updateFavoriteCountry(data.id);
   
}


  return (
    <div>
      {data ? (
        <>
        
          <Container>
            <H1>Countries </H1>
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
                  <Div>
                    <H4>Name: {data.name}</H4>
                    <H4>Region: {data.region}</H4>
                  </Div>
                  <Button onClick={clickHeart}>
                    <Favorite>{favoriteCountry && favoriteCountry.includes(data.id) ? redHeart : blackHeart}</Favorite>
                  </Button>
                </Bottom>
              </Card>
            ) : (
              <H1>Loading...</H1>
            )}
          </Content>
        </>
      ) : (
        <>
          <Container>
          {!favorite?(<H1>Countries </H1>):(<H11>Favorite Countries </H11>)}
            <Pagination
              page={page + 1}
              totalPages={total}
              onLeftClick={previous}
              onRightClick={next}
              favorite={favorite}
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
                    <Div>
                    <H4>Name: {country.name}</H4>
                    <H4>Region: {country.region}</H4>
                    </Div>
                    <Button onClick={() => updateFavoriteCountry(country.id)}>
                    <Favorite>{favoriteCountry && favoriteCountry.includes(country.id) ? redHeart : blackHeart}</Favorite>
                  </Button>
                  </Bottom>
                </Card>
              ))
            ) : (
              <H1>Loading...</H1>
            )}
          </Content>
        </>
      )}
    </div>
  );
}






const Button = styled.button`
background-color:transparent;
height: 40px;
`;

const Div = styled.div`
display: row;
`;
const H4 = styled.h4`
display: flex;
justify-content: space-between;
@media (max-width: 768px) {
    font-size: smaller;
  }
`;

const H1 =styled.h1`
 @media (max-width: 768px) {
    font-size: x-large;
  }
`;
const H11 =styled.h1`
margin-top:100px;
 @media (max-width: 768px) {
    font-size: x-large;
  }
`;

const Favorite = styled.div`
`;

const Container = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media (max-width: 1280px) {
    margin-top: 5px;
    padding: 10px;
  }
  @media (max-width: 768px) {
    margin-top: 5px;
    padding: 10px;
  }
`;

const Bottom = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 768px) {
    margin-top: 5px;
    padding: 10px;
  }
  @media (max-width: 1280px) {
    margin-top: 5px;
    padding: 10px;
  }
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
  padding: 20px;
  
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 10px;
  }
  @media (max-width: 780px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 10px;
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 10px;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 10px;
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



const mapStateToProps = (state) => {
  return {
    page:state.page
  }; // bring the redux state
};
const mapDispatchToProps = (dispatch) => {
  return {
    previousPage: (page) => dispatch(previousPage(page)),
    nextPage: (page,total) => dispatch(nextPage(page,total)),
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Countries);
