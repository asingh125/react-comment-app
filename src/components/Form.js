import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Input from './Input'
import NewCommentButton from './NewCommentButton'

const FormWrapper = styled.div`
  padding: 20px 20px;
  width: 40vw;
  font-size: 1em;
  position: relative;
  background-color: WhiteSmoke;
  border: 2px solid #cdcdcd;
  border-color: rgba(0, 0, 0, .14);
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 30px;
`

const Title = styled.h1`
  padding: 0px 20px;
  font-size: 2em;
  color: DimGrey !important;
  font-family: Arial;
  margin-top: 5;
`

const NameInput = styled(Input)`
  padding: 0;
  font-size: 0.75em;
  position: relative;
  color: Grey !important;
`

const CommentInput = styled(Input)`
  padding: 0;
  font-size: 0.75em;
  position: relative;
  color: Grey !important;
`

const Form = ({
  setName, setComment, name, comment, titleText, buttonText, buttonFunction,
}) => (
  <FormWrapper>
    <Title>
      {titleText}
    </Title>
    <NameInput setInput={setName} label="Name " height={30} />
    <CommentInput setInput={setComment} label="Comment " height={90} />
    <div style={{ margin: '0 auto' }}>
      <NewCommentButton nameInput={name} commentInput={comment} buttonText={buttonText} buttonFunction={buttonFunction} />
    </div>
  </FormWrapper>
)

export default Form
