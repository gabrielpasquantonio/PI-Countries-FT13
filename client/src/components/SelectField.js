import React, {useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCountries} from "../redux/actions"
import { ErrorMessage, useField } from "formik";
import './TextField.css'
import styled from "styled-components"


function SelectField({ label, ...props }) {
  const [field, meta] = useField(props);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
   
    dispatch(getAllCountries(250, 0));
   
  
}, []);
  return (
    
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <Select
        className={`form-control shadow-none ${meta.touched && meta.error && `is-invalid`}`}
        {...field}
        {...props}
        autoComplete="off"
       
        multiple={true}
      >
          <option value="">Select</option>
  {countries && countries.map((country) => (
      
                
                <option key={country.id} value={country.id}>{country.name}</option>
              
              ))}




      </Select>
    
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
}


const Select = styled.select`
margin-top:10px;
height: 1000px;
`;


export default SelectField;