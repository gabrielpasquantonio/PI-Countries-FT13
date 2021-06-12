import React from "react";
import { ErrorMessage, useField, Formik, Field, Form } from "formik";
import './TextField.css'
import styled from 'styled-components'


function CheckBoxField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="my-radio-group">
     <H2> Please Select the season activity </H2>
          <Div role="group" aria-labelledby="my-radio-group">
            <Label >
              <Field type="radio" name="season" value="winter" />
              Winter
            </Label>
            <Label>
              <Field type="radio" name="season" value="spring" />
              Spring
            </Label>
            <Label>
              <Field type="radio" name="season" value="summer" />
              Summer
            </Label>
            <Label>
              <Field type="radio" name="season" value="autumn" />
              Autumn
            </Label>
          </Div>
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
}



const Label = styled.label`
padding-right: 20px;
margin-right: 20px;
@media (max-width: 400px) {
    font-size: 14px!important;
    margin-right: 3px;
    padding-right: 3px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin-right: 6px;
    padding-right: 5px;
  }
`;


const H2 = styled.label`
  @media (max-width: 768px) {
    font-size: 20px;
    //margin-bottom: 30px;
  }

`;

const Div = styled.div`
display: row;
align-items:center
`;


export default CheckBoxField;