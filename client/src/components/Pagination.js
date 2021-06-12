import React from 'react'
import styled from 'styled-components'
import { LeftArrow, RightArrow } from "./Arrows";

function Pagination(props) {
    const {onLeftClick, onRightClick, page,setPage, totalPages,favorite}= props;


    
    return (

        <Paginationn>
            {!favorite? (<>
            <Button onClick={onLeftClick}><LeftArrow /></Button>
            <H2>{page} de {totalPages}</H2>
            <Button onClick={onRightClick}><RightArrow /></Button></>):(<Div></Div>)}
        </Paginationn>
    )
}


const H2 = styled.div`
@media (max-width: 768px) {
    font-size: small;
  }
`;


const Paginationn = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const Button = styled.button`
background-color: #363636;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 5px;
    padding: 10px;
    width: 32px;
    margin: 0px 4px;
    height: 22px;
  }
`;

const Div = styled.div`
display:none
`;
export default Pagination