import React, { useRef } from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { signin } from '../store/actions'
import { Link, useNavigate } from 'react-router-dom'

function Signin() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function signinHandler() {
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    }

    dispatch(signin(data)).then(() => navigate("/"))
  }

  return (
    <Wrapper>
      <div className='signin-form'>
            <h1>Sign In</h1>
            <TextField inputRef={usernameRef} id="standard-basic" label="Username" variant="standard" />
            <TextField inputRef={passwordRef} id="standard-basic" type="password" label="Password" variant="standard" />
            <Button onClick={signinHandler} variant="contained">Submit</Button>
            <div className='tosignup'>
              <p>Don't have an account? </p>
              <Link className='signup-btn' to="/signup">Sign Up</Link>
            </div>
            <p></p>
      </div>
    </Wrapper>
  )
}

export default Signin

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color:  #f9f9f9;
  
  .signin-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    width: 350px;
    margin: auto;
    position: relative;
    top: 30%;

    @media(max-width: 500px) {
      width: 300px;
    }

    input {
      padding: 10px 20px;
      outline: none;
    }

    .tosignup {
      display: flex;
      gap: 10px;
    }
  }
`