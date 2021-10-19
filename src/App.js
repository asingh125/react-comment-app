import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import Input from './components/Input'
import Comment from './components/Comment'
import Form from './components/Form'

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: SteelBlue;
  font-family: Arial;
`

const StyledComment = styled(Comment)`
  color: palevioletred;
  font-weight: bold;
  border: solid;
`

const Name = styled(Input)`
  color: palevioletred;
  font-weight: bold;
  border: solid;
`

const App = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])

  const addComment = (n, c) => {
    const id = uuidv4()
    const newComment = {
      name: n, comment: c, depth: 1, key: `comment-${id}`,
    }
    setComments([...comments, newComment])
  }

  return (
    <>
      <Title>CIS 197 Comment Board 💬</Title>
      <Form setName={setName} setComment={setComment} name={name} comment={comment} titleText="New Post" buttonText="Submit Post" buttonFunction={addComment} />
      {
      (comments.length > 0) ? (comments.map(({
        name, comment, depth, key,
      }) => <Comment name={name} comment={comment} depth={depth} key={key} />)) : <></>
      }
    </>
  )
}

export default App
