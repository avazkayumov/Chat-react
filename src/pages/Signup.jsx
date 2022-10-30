import { TextField, Button } from '@mui/material'
import React, { useRef } from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux"
import { signup } from '../store/actions'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Signup() {
  const inputRef = useRef()
  const passRef = useRef()
  const confirmPassRef = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function signupHandler() {
    const data = {
      username: inputRef.current.value,
      password: passRef.current.value,
      confirmPassword: confirmPassRef.current.value 
    }

    dispatch(signup(data)).then(() => navigate("/signin"))
  }

  return (
    <Wrapper>
      <div>
          <h1>Sign Up</h1>
          <TextField inputRef={inputRef} id="standard-basic" label="Username" variant="standard" />
          <TextField inputRef={passRef} id="standard-basic" type="password" label="Password" variant="standard" />
          <TextField inputRef={confirmPassRef} id="standard-basic" type="password" label="Confirm Password" variant="standard" />
          <Button onClick={signupHandler} variant="contained">Submit</Button>
          <div className='tosignup'>
              <p>Already have an account ? </p>
              <Link className='signup-btn' to="/signin">Sign In</Link>
          </div>
      </div>
    </Wrapper>
  )
}

export default Signup

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f9f9f9;
  
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    width: 350px;
    margin: auto;
    position: relative;
    top: 25%;

    @media(max-width: 500px) {
      width: 300px;
    }

    input {
      padding: 10px 20px;
      outline: none;
    }

  }
  .tosignup {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`