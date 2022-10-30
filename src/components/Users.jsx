import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as MenuBtn } from "../assets/menubtn.svg"
import Logo from "../assets/chat-logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'
import { logout } from '../store/reducer'
import userImg from "../assets/photo_2021-11-12_21-40-57.jpg"

function Users(props) {
  const [toggleAside, setToggleAside] = useState(true)
  const { username } = useSelector(store => store)
  const dispatch = useDispatch()
  const messages = useSelector(store => store.messages.data)

  function toggleAsideFunc() {
    setToggleAside(!toggleAside)
  }

  window.addEventListener('click', () => {
      if (toggleAside === 'false') {
      setToggleAside(true)
    }
  })                                 

  return (
    <Wrapper toggleAside={toggleAside} showChat={props.showChat}>        
        <div className="menu">
          <MenuBtn onClick={() => toggleAsideFunc()} className='menu-ic' />
          <p>{toggleAside ? "Chats" : "Settings"}</p>
        </div>

        {toggleAside ? (
          <div className="groups">
            <div className="group-pdp" onClick={() => props.setShowChat(true)}>
              <img src={Logo} alt="" />
              <div className="group-name">
                <b>Pdp Group</b>
                <p>{messages?.length} messages</p>
              </div>
            </div>
            <div className='line'></div>
          </div>
        ) : ""}


        <div className="aside">
          <div className="username-box">
            <img className='user-img' src={userImg} alt="" />  
            <p className='username'>{username}</p>
          </div>

          <div className="logout-container">
            <Button className='logout-btn' variant="contained" onClick={() => dispatch(logout())}>Log Out</Button>
          </div>
        </div>

    </Wrapper>
  )
}

export default Users

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 18px 0 0 0;
  background-color: #1a1c26;
  border-right: 1px solid #213040;
  overflow: hidden;

  @media(max-width: 650px) {
    display: ${({showChat}) => showChat ? "none" : "block"};

    
  }

  .menu {
    display: flex;
    align-items: center;
    transition: 0.3s;
    margin-left: 18px;
    /* margin-bottom: 30px; */

    .menu-ic {
     cursor: pointer; 
    }

    p {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      font-feature-settings: 'fina' on, 'init' on;
      color: #FFFFFF;
      border-radius: 2px;
    }

  }
  
  .groups {
    margin-top: 20px;
    padding: 18px;
    background-color: ${({showChat}) => showChat ? "#213040" : "transparent"};
    
    .group-pdp {
      width: 100%;
      height: 25px;
      display: flex;
      gap: 20px;
      align-items: center;  
      cursor: pointer;

      b {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 21px;
        color: #FFFFFF;
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        margin-top: 5px;
        color: #888888;
      }
    }
  }

  .line {
    width: 77%;
    height: 2px;
    background-color:  #213040;
    position: relative;
    top: 18px;
    margin-left: auto;
  }

  .aside {
    position: relative;
    left: ${({ toggleAside }) => toggleAside ? "-120%" : "0px"};
    width: 100%;
    height: 100%;
    background-color: #1a1c26;
    padding: 18px;
    transition: 0.3s;

    .user-img {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }

    .username-box {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 7px;
      border-bottom: 1px solid grey;
      margin-bottom: 15px;

      .username {
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        font-feature-settings: 'fina' on, 'init' on;
        color: #FFFFFF;
      }
    }

    .logout-btn {
      background-color: red;
      height: 30px;
    }
  }
`