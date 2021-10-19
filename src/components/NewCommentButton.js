import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 5px 5px;
  font-size: 1em;
  position: relative;
  left: 0;
  outline: none;
  border: 2px solid Grey !important;
  background-color: LightSkyBlue !important;
  color: Black
  font-size: 16px;
  text-align: center;
  &:hover {
    background-color: #b6e1fc !important;
  }
`

const NewCommentButton = ({
  nameInput, commentInput, buttonText, buttonFunction,
}) => {
  const createComment = () => {
    if (nameInput !== '' && commentInput !== '') {
      buttonFunction(nameInput, commentInput)
    }
  }

  return (
    <p align="center">
      <Button onClick={createComment}>
        {buttonText}
      </Button>
    </p>
  )
}

export default NewCommentButton
