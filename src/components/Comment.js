import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import VoteCounter from './VoteCounter'
import Form from './Form'

const GridContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 90% 10%;
  margin: 0 auto;
  background: AliceBlue;
  border: 2px solid #cdcdcd;
  border-color: rgba(0, 0, 0, .14);
  border-radius: 5px;
`

const CommentContentDiv = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background: transparent;
  padding: 25px 25px;
  border-radius: 10px;
  font-family: Arial;
`

const ReplyContentDiv = styled.div`
  grid-row: 2 / 2;
  grid-column: 1 / 2;
  text-align: left;
  padding: 25px 25px;
  border-radius: 5px;
`

const ReplyButton = styled.button`
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 0;
  font-size: 1em;
  position: relative;
  left: 0;
  outline: none;
  border: none;
  background-color: transparent;
  margin-left: auto;
  margin-right: auto;
  color: Black
  font-size: 16px;
  &:hover {
    color: Grey;
  }
`

const NameText = styled.h1`
  padding: 0;
  font-size: 1.5em;
  position: relative;
  color: MidnightBlue !important;
`

const CommentText = styled.p`
  padding: 0;
  font-size: 1em;
  position: relative;
  color: SlateGrey !important;
`

const Comment = ({ name, comment, depth }) => {
  const [replies, setReplies] = useState([])
  const [replyInputsOpen, setReplyInputsOpen] = useState(false)
  const [replyName, setReplyName] = useState('')
  const [replyComment, setReplyComment] = useState('')

  const toggleReplyBox = () => {
    if (replyInputsOpen) {
      setReplyInputsOpen(false)
    } else {
      setReplyInputsOpen(true)
    }
  }

  const postReply = (replyName, replyComment) => {
    if (replyName !== '' && replyComment !== '') {
      const id = uuidv4()
      const newReply = {
        name: replyName, comment: replyComment, depth: depth + 1, replies: [], key: `comment-${id}`,
      }
      setReplies([...replies, newReply])
      setReplyName('')
      setReplyComment('')
      toggleReplyBox()
    }
  }

  const replyBox = (
    <Form setName={setReplyName} setComment={setReplyComment} name={replyName} comment={replyComment} titleText="New Reply" buttonText="Submit Reply" buttonFunction={postReply} />
  )

  return (
    <GridContainer>
      <CommentContentDiv>
        <NameText>
          {`${name}:`}
        </NameText>
        <CommentText>
          {comment}
        </CommentText>
      </CommentContentDiv>
      <VoteCounter />
      <ReplyContentDiv>
        {
          (replies.length > 0) ? (replies.map(({
            name, comment, depth, key,
          }) => <Comment name={name} comment={comment} depth={depth} key={key} />)) : <></>
        }
        {(depth <= 2) ? <ReplyButton onClick={toggleReplyBox}> Reply 💬 </ReplyButton> : <></> }
        {replyInputsOpen ? replyBox : <></>}
      </ReplyContentDiv>
    </GridContainer>
  )
}

export default Comment
