import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import "../App.css";

const StarRating = (props) => {

const size = Object.values(props)
console.log(size)
  const [rating, setRating] =  useState();
  
  return (
    <div>
       
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <Input type="radio" name="rating" />{" "}
            <FaStar
              className="star"
              color={ratingValue <= size ? "#ffc107" : "#e4e5e9"}
              size={50}
              value={ratingValue}
              
            />
          </label>
        );
      })}
    </div>
  );
};

const Input = styled.input`
  display: none;
`;
export default StarRating;
