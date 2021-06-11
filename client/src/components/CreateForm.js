import React, { useEffect, useState } from "react";
import "./CreateForm.css";
import { Formik, Form, Field } from "formik";
import TextField from "./TextField.js";
import * as Yup from "yup";
import PrimaryButton from "./PrimaryButton";
import styled from "styled-components";
import SelectField from "./SelectField";
import CheckBoxField from "./CheckBoxField";
import {createActivity} from "../redux/actions"
import { useDispatch,connect } from "react-redux";



function CreateForm() {
  const dispatch = useDispatch();
  const initialValues= {name: "",
    difficulty:"",
    duration: "",
    season: "",
    country: "",
    id: ""
}

  
  const validate = Yup.object({
    name: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    difficulty: Yup.number()
      .min(1, "Must  have a minimun value of 1")
      .max(5, "Must have a maximun value of 5")
      .required("Required"),
    duration: Yup.number()
      .min(1, "Must  have a minimun value of 1")
      .max(24, "Must have a maximun value of 24")
      .required("Required"),
    season: Yup.string()
      .required("Required"),
    country: Yup.lazy(val => (Array.isArray(val) ? Yup.array().of(Yup.string().required("Please select at least one Country"),) : Yup.string().required("Please select at least one Country")))
   
    
  });



  


  return (
    <Formik initialValues={initialValues} validationSchema={validate} dispatch={dispatch}
    onSubmit={async (values,{ resetForm }) => {
      
      await new Promise((r) => setTimeout(r, 500));
      await dispatch(createActivity(values))
      resetForm()
    }} >
      {(formik) => (
        <div>
          <div
            className="my-4 font-weight-bold-display-4"
            className="contact-title"
          >
            <H2>Create New Activity</H2>
          </div>
          <Form className="Form"  >
          <Diiv className="form-field" name="id"   />
            <div className="form-field">
              <TextField
                label="Activity Name*"
                name="name"
                type="text"
                className="input"
              />
            </div>
            <div className="form-field">
              <TextField
                label="Enter Difficulty Level * (1 to 5)"
                name="difficulty"
                type="number"
                className="input"
              />
            </div>
            <div className="form-field">
              <TextField
                label="Enter Activity Duration - Calculated in hours (1 to 24)"
                name="duration"
                type="number"
                className="input"
              />
            </div>
            <div className="form-field">
             
              <CheckBoxField
                label="Please Select the Season"
                name="season"
                //type="text"
                className="input"
              />
            </div>
            <div className="form-field">
              <SelectField
                label="Select the Activity Countrry"
                as="select"
                name="country"
                className="input"
              ></SelectField>
              
            </div>
            {/*<pre>{JSON.stringify(formik, null, 4)}</pre>*/}
            <div className="but">
              <div className="form-field f-button">
                <PrimaryButton title="create" type="submit" formik={formik} />
              </div>

              <div className="form-field f-button">
                <ResetButton className="buttin" type="reset">
                  Reset
                </ResetButton>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

const Diiv = styled.div`
display: none;
`;
const ResetButton = styled.button`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
const H2 = styled.h2`
  font-size: 60px;
  margin-bottom: 60px;
  color: var(--font-light-color);
`;

export default connect(null,{createActivity}) (CreateForm);
