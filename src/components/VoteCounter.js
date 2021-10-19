import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const VoteCountDiv = styled.div`
    grid-row: 1 / 2;
    grid-column: 2 / 2;
    text-align: right;
    padding: 25px 25px;
    border-radius: 5px;
    font-family: Arial;
`

const VoteCounter = () => {
  const [votes, setVotes] = useState(0)
  const upVote = () => setVotes(votes + 1)
  const downVote = () => setVotes(votes - 1)

  return (
    <VoteCountDiv>
      <button onClick={upVote} type="button">⬆</button>
      <p>{votes}</p>
      <button onClick={downVote} type="button">⬇</button>
    </VoteCountDiv>
  )
}

export default VoteCounter
