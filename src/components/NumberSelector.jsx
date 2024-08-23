import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
const NumberSelector = ({error,selectedNumber, setSelectedNumber}) => {
    
    
  return (
    <NumberSelectorCon>
      <p className='error'>{error}</p>
    <div className='flex'>
      <Box 
      isSelected={1 === selectedNumber}
      onClick={() => setSelectedNumber(1)}>1</Box>
      <Box 
      isSelected={2 === selectedNumber}
      onClick={() => setSelectedNumber(2)}>2</Box>
      <Box 
      isSelected={3 === selectedNumber}
      onClick={() => setSelectedNumber(3)}>3</Box>
      <Box 
      isSelected={4 === selectedNumber}
      onClick={() => setSelectedNumber(4)}>4</Box>
      <Box 
      isSelected={5 === selectedNumber}
      onClick={() => setSelectedNumber(5)}>5</Box>
      <Box 
      isSelected={6 === selectedNumber}
      onClick={() => setSelectedNumber(6)}>6</Box>
      
    </div>
    <p>Select Number</p>
    </NumberSelectorCon>
  )
}

export default NumberSelector
const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items:center;
    font-size:28px;
    font-weight: 700;
    &:hover{
    cursor: pointer;
    }
    background-color: ${(props) => props.isSelected ? "black":"white"};
    color:  ${(props) => !props.isSelected ? "black":"white"};
`;
const NumberSelectorCon = styled.div`
    display:flex;
    flex-direction: column;
    align-items: end;
    .flex{
    display:flex;
    gap: 24px;
    }
    p{
    font-size:24px;
    font-weight:700;
    }
    .error{
    color: red;
    }
`;