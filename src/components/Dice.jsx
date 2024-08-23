import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
const Dice = ({currentDice, roleDice}) => {
  
  return (
    <DiceCon>
      <div className='dice'
      onClick={roleDice}
      >
        <img src={`/images/faces/${currentDice}.png`} alt="Dice 1" />
      </div>
      <p>Click on dice to roll</p>
    </DiceCon>
  )
}

export default Dice

const DiceCon = styled.div`
display: flex;
flex-direction: column;

align-items: center;
margin-top: 48px;
p{
font-size:24px;
}

.dice{
cursor: pointer;

}
`;
