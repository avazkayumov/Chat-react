import { createSlice } from '@reduxjs/toolkit'
import { fetchMessages, signin, signup } from './actions'


const initialState = {
    messages: [],
    token: localStorage.getItem("token"),
    auth: Boolean(localStorage.getItem("token")),
    username: localStorage.getItem("username"),
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    logout: (state) => {
      state.auth = false
      state.username = null
      state.token = null

      localStorage.removeItem("username")
      localStorage.removeItem("token")
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = action.payload
   });

   builder.addCase(signup.fulfilled, (state, action) => {
    
   });

   builder.addCase(signin.fulfilled, (state, action) => {
      state.auth = true

      localStorage.setItem("username", action.payload.data.username)
      localStorage.setItem("token", action.payload.data.token)
   })
  }
})  

export const { logout } = chatSlice.actions 

export default chatSlice.reducer
