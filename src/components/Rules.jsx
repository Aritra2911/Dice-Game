import React from 'react'
import styled from 'styled-components'
const Rules = () => {
  return (
    <RulesCon>
        <h2>How to play the game?</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>After clicking on dice, if you select the right number as the dice shows you get positive points and if you fail to predict the number you get -2</p>
        </div>
    </RulesCon>
  )
}

export default Rules
const RulesCon = styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
border-radius: 10px;
background-color: #FBF1F1;
padding: 20px;
h2{
font-size: 24px;

}
.text{
margin-top: 24px;
}
`;