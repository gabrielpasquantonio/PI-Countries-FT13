import React from "react";
import { ErrorMessage, useField, Formik, Field, Form } from "formik";
import './TextField.css'
import styled from 'styled-components'


function CheckBoxField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="my-radio-group">
     <H2> Please Select the season activity </H2>
          <div role="group" aria-labelledby="my-radio-group">
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
          </div>
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
}



const Label = styled.label`
padding-right: 20px;
margin-right: 20px;
`;


const H2 = styled.h2`
margin-bottom: 20px;
`;
export default CheckBoxField;