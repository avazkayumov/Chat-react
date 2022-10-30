import React, { useState } from 'react'
import styled from "styled-components"
import Users from "../components/Users"
import Chat from "../components/Chat"
 
function Home() {
  const [showChat, setShowChat] = useState(false)  

  window.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
      setShowChat(false)
    }
  })

  return (
    <Wrapper>
      <Users showChat={showChat} setShowChat={setShowChat} />
      {showChat ? (
        <Chat setShowChat={setShowChat} />
      ) : (
        <div className='before-chat'>
          <p>Select a chat to start messaging</p>
        </div>
      )}
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr;
 
  .before-chat {
    width: 100%;
    height: 100vh;
    background: #212f3f;
    display: grid;
    place-content: center;

    p {
      color: #B2C3D5;
      background-color: #18222d;
      border-radius: 8px;
      padding: 1px 5px;
      display: inline;
    }

  }

  @media(max-width: 650px) {
    grid-template-columns: 1fr;

    .before-chat {
      display: none;
      background-color: red;
    }
  }
` 