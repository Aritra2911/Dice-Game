import React from 'react'
import Total from './Total'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import Dice from './dice'
import { useState } from 'react'
import Rules from './Rules'

const Game = () => {
  const[score, setScore] = useState(0);
  const[selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const[error, setError] = useState("");
  const[showRules, setShowRules] = useState(false);
  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max-min) + min);
  };
  const roleDice = () =>{
    if (!selectedNumber){
      setError("You have not selected any number");
      return;
    }
     setError("") 
    const RandomNumber = generateRandomNumber(1,7);
      setcurrentDice((prev) => RandomNumber);
    
      if(selectedNumber == RandomNumber)
          setScore((prev) => prev + RandomNumber);
      else
        setScore((prev) => prev - 2);

        setSelectedNumber(undefined);
  }
  const resetScore = () => {
    setScore(0);
  }
  
  return (
    <MainContainer>
      <div className='top'>
      <Total score={score} />
      <NumberSelector 
      error={error}
      selectedNumber={selectedNumber}
      setSelectedNumber={setSelectedNumber}/>
      </div>
      <Dice currentDice={currentDice}
      roleDice={roleDice}/>
      <div className='btns'>
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={() => setShowRules((prev) => !prev)}>{
          showRules? "Hide":"Show Rules" 
          }</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
    
  )
}

export default Game
const MainContainer = styled.main`
    padding-top:40px;
    .top {
    display:flex;
    justify-content: space-around;
    align-items: end;
    }
    .btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    }
`;
const Button = styled.button`

padding: 10px 18px;
min-width: 220px;
background: black;
border-radius: 5px;
color: white;
border: none;
font-size: 16px;
border: 2px solid black;

&:hover{
background-color: white;
color: black;
cursor: pointer;
transition: 0.3s;
}
`;
