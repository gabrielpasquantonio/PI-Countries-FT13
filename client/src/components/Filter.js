import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import { filteredData, getAllCountries, orderedData } from "../redux/actions";

function Filter(props) {
  const { limit, pageInfo,page} = props;
 
var pageUpdated = page +1
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
    console.log([...props.countriesData]);
    props.order([...props.countriesData], { name: event.target.value });
    console.log(
      props.order([...props.countriesData], { name: event.target.value })
    );
  }
  function handleSelectedPopulation(event) {
    props.order([...props.countriesData], { population: event.target.value });
    if (event.target.value === "SelectPopulation") {
      props.getAllCountries(limit, pageInfo);
    }
  }
  function handlePages(event) {
    if (event.target.value === "SelectPage") {
      let limit = 10;
      props.getAllCountries(limit, limit*pageUpdated);
    }
    if (event.target.value === "250") {
      let limit = 250;
      props.getAllCountries(limit, limit*pageUpdated);
    }
    if (event.target.value === "30") {
      let limit = 30;
      props.getAllCountries(limit, limit*pageUpdated);
    }
    if (event.target.value === "50") {
      let limit = 50;
      props.getAllCountries(limit, pageUpdated);
    }
    if (event.target.value === "100") {
      let limit = 100;
      props.getAllCountries(limit, pageUpdated);
    }
  };
  
  return (
    <div className={styles.container}>
      <div>
        <label>Filter by Region: </label>

        <select onChange={handleSelectedRegion}>
          <option label="Select" value="SelectContinent"></option>
          {props.region.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
      <div>
        <label>Order by Population: </label>
        <select
          onChange={handleSelectedPopulation}
          className={styles.btnfilter}
        >
          <option label="Select" value="SelectPopulation"></option>
          <option value="Ascendent" label="Ascendent"></option>
          <option value="Descendent" label="Descendent"></option>
        </select>
      </div>
      <div>
        <label>Order by Name: </label>
        <select onChange={handleSelectedName} className={styles.btnfilter}>
          {/* <option label="Select  " value="SelectPopulation" ></option>    */}
          <option value="Ascendent">A-Z</option>
          <option value="Descendent">Z-A</option>
        </select>
      </div>

      <div>
        <label>Filter by Turistic Act: </label>
        <select className={styles.btnfilter} onChange={handleSelectedSeason}>
          <option label="Select" value="SelectSeason"></option>
          <option value="summer"> Summer</option>
          <option value="autumn"> Autumn</option>
          <option value="winter">Winter</option>
          <option value="spring"> Spring</option>
        </select>
      </div>
      <div>
        <label>Display: </label>
        <select className={styles.btnfilter} onChange={handlePages}>
          <option label="Select" value="SelectPage"></option>
          <option value="250" > All Countries</option>
          <option value="30" > 30 Countries</option>
          <option value="50" >50 Countries</option>
          <option value="100" > 100 Countries</option>
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    region: state.region,
    countriesData: state.countriesData,
  }; // bring the redux state
};
const mapDispatchToProps = (dispatch) => {
  return {
    filter: (data, option) => dispatch(filteredData(data, option)),
    order: (data, option) => dispatch(orderedData(data, option)),
    getAllCountries: (limit, offset) =>
      dispatch(getAllCountries(limit, offset)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
