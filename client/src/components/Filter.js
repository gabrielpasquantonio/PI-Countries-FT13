import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  filteredData,
  getAllCountries,
  orderedData,
  setSearching,
  setTotall,
  setLimit,
  setPage
} from "../redux/actions";

function Filter(props) {
  const {pageInfo, page } = props;
  const total = useSelector((state) => state.total);
  const limit = useSelector((state) => state.limit);



  
  function handleSelectedRegion(event) {
    props.filter([...props.countriesData], { region: event.target.value }); // filter de Redux
    if (event.target.value === "SelectContinent") {
      props.getAllCountries(limit, pageInfo);
    }
  }
  function handleSelectedSeason(event) {
    if (event.target.value === "SelectSeason") {
      props.getAllCountries(limit, pageInfo);
    }
    props.filter([...props.countriesData], { season: event.target.value });
  }

  function handleSelectedName(event) {
    props.order([...props.countriesData], { name: event.target.value });
  }
  async function handleSelectedPopulation(event) {
    props.order([...props.countriesData], { population: event.target.value });
    if (event.target.value === "SelectPopulation") {
      await props.getAllCountries(limit, pageInfo);
     
    }
  }
  async function handlePages(event) {
    if (event.target.value === "SelectPage") {
      props.limit(10)
      props.search(false);
      props.total(10);
      props.setPage()
      props.getAllCountries(10, limit * pageInfo);
    }
    if (event.target.value === "250") {
      props.limit(250)
      props.total(250);
      props.setPage()
      props.search(true);
      props.getAllCountries(250, limit * pageInfo);
   
    }
    if (event.target.value === "30") {
      props.limit(30)
      props.total(30);
      props.setPage()
      props.search(true);
      props.getAllCountries(30, limit * pageInfo);
    }
    if (event.target.value === "50") {
      props.limit(50)
      props.total(50);
      props.setPage()
      props.search(true);
      props.getAllCountries(50, limit *pageInfo);
      console.log("this is the searching whenclick 50 " + props.total);
    }
    if (event.target.value === "100") {
      
      props.total(100);
      props.limit(100)
      props.setPage()
      props.search(true);
      props.getAllCountries(100, limit *pageInfo);
    }
  }

  return (
    <Container>
      <Div>
        <Label>Filter by Region: </Label>

        <Select onChange={handleSelectedRegion}>
          <option label="Select" value="SelectContinent"></option>
          {props.region.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </Select>
      </Div>
      <Div>
        <Label>Order by Population: </Label>
        <Select onChange={handleSelectedPopulation}>
          <option label="Select" value="SelectPopulation"></option>
          <option value="Ascendent" label="Ascendent"></option>
          <option value="Descendent" label="Descendent"></option>
        </Select>
      </Div>
      <Div>
        <Label>Order by Name: </Label>
        <Select onChange={handleSelectedName}>
          {/* <option label="Select  " value="SelectPopulation" ></option>    */}
          <option value="Ascendent">A-Z</option>
          <option value="Descendent">Z-A</option>
        </Select>
      </Div>

      <Div>
        <Label>Filter by Turistic Act: </Label>
        <Select onChange={handleSelectedSeason}>
          <option label="Select" value="SelectSeason"></option>
          <option value="summer"> Summer</option>
          <option value="autumn"> Autumn</option>
          <option value="winter">Winter</option>
          <option value="spring"> Spring</option>
        </Select>
      </Div>
      <Div>
        <Label>Display: </Label>
        <Select onChange={handlePages}>
          <option label="Select" value="SelectPage"></option>
          <option value="250"> All Countries</option>
          <option value="30"> 30 Countries</option>
          <option value="50">50 Countries</option>
          <option value="100"> 100 Countries</option>
        </Select>
      </Div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    region: state.region,
    countriesData: state.countriesData,
    searching: state.searching,
    total: state.total,
    limit:state.limit,
    page:state.page
  }; // bring the redux state
};
const mapDispatchToProps = (dispatch) => {
  return {
    filter: (data, option) => dispatch(filteredData(data, option)),
    order: (data, option) => dispatch(orderedData(data, option)),
    search: (data) => dispatch(setSearching(data)),
    total: (data) => dispatch(setTotall(data)),
    limit: (data) => dispatch(setLimit(data)),
    setPage: () => dispatch(setPage()),
    getAllCountries: (limit, offset) =>
      dispatch(getAllCountries(limit, offset)),
  };
};

const Div = styled.div`
  display: row;
  @media (max-width: 768px) {
    display: flex;
    margin-top: 5px;
  }
`;

const Container = styled.div`
  flex-direction: row;
  border-style: solid;
  border-color: rgba(249, 249, 249, 0.8);
  border-width: 0.1px;
  display: flex;
  margin: 0px 10px;

  flex: 1;

  padding: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  color: rgb(255, 255, 255);
  font-size: 17px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-right: 10px;
  }
`;
const Select = styled.select`
  margin-right: 10px;
  background: rgb(189, 200, 222);
  border-radius: 7px;
  font-size: 17px;
  @media (max-width: 768px) {
    font-size: 15px;
    border-radius: 7px;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
