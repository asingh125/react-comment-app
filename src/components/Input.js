import React from 'react'
import styled from 'styled-components'

const GridContainer = styled.div`
    display: grid;
    width: 40vw;
    grid-template-rows: auto 1fr;
    //grid-template-columns: 50% 50%;
    margin: 0 auto;
`

const Label = styled.div`
    grid-row: 1 / 1;
    grid-column: 1 / 2;
    padding: 0;
    font-size: 1.5em;
    position: relative;
    color: Grey !important;
    padding: 25px 25px;
    border-radius: 10px;
    font-family: Arial;
    text-align: right;
`

const InputContainer = styled.div`
    grid-row: 1 / 1;
    grid-column: 2 / 2;
    padding: 0;
    font-size: 1.5em;
    position: relative;
    color: Grey !important;
    padding: 25px 25px;
    border-radius: 10px;
    font-family: Arial;
`
const Input = ({ setInput, label }) => (
  <div>
    <GridContainer>
      <Label>{label}</Label>
      <InputContainer>
        <input onChange={e => setInput(e.target.value)} />
      </InputContainer>
    </GridContainer>
  </div>
)

export default Input
