import React from 'react'
import styled from 'styled-components'

const Start = ({toggle}) => {
  return (
      <Container>
        <div><Img src="/images/dice.png" alt="" /></div>
        
        <div className='content'>
            <H>Make your Fortune!</H>
            <Button onClick={toggle}>Try your luck</Button>
        </div>
      </Container>
  )
}

export default Start
const Img = styled.img`
width:400px;
`;
const H = styled.h1`
font-size: 50px;
white-space: nowrap;
`;
const Container =styled.div`
max-width: 1180px;
height: 100vh;
display: flex;
margin:0 auto;

align-items: center;
`;
const Button = styled.button`

padding: 10px 18px;
min-width: 220px;
background: black;
border-radius: 5px;
color: white;
border: none;
font-size: 16px;

&:hover{
background-color: #383838;
cursor: pointer;
transition: 0.3s;
}
`;

