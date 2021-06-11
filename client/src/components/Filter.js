import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import {
  
  filteredData,
  getAllCountries,
  
} from "../redux/actions";

function Filter(props) {
const {limit, pageInfo} = props
console.log(limit,pageInfo)
  function handleSelectedRegion(event) {
    props.filter([...props.countriesData], { region: event.target.value });
    console.log(props.countries) // filter de Redux
    if (event.target.value === "SelectContinent") {
      props.getAllCountries(limit,pageInfo);
    }
  }

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
              className={styles.btnfilter}>
          <option label="Select" value="SelectPopulation"></option>
          <option value="Ascendent" label="Ascendent"></option>
          <option value="Descendent" label="Descendent"></option>
        </select>
      </div>
      <div>
        <label>Order by Name: </label>
        <select  className={styles.btnfilter}>
          {/* <option label="Select  " value="SelectPopulation" ></option>    */}
          <option value="Ascendent">A-Z</option>
          <option value="Descendent">Z-A</option>
        </select>
      </div>

      <div>
        <label>Filter by Turistic Act: </label>
        <select  className={styles.btnfilter}>
          <option label="Select" value="SelectSeason"></option>
          <option value="Verano"> Summer</option>
          <option value="Otoño"> Autumn</option>
          <option value="Invierno">Winter</option>
          <option value="Primavera"> Spring</option>
          <option value="AllSeasons"> All seasons</option>
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
  }; // consumo state
};
const mapDispatchToProps = (dispatch) => {
  return {
   filter: (data, option) => dispatch(filteredData(data, option)),
    //order: (data, option) => dispatch(ordenadoAction(data, opciones)),
    getAllCountries: (limit,offset) => dispatch(getAllCountries(limit,offset)),
   
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);