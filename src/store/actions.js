import { api } from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMessages = createAsyncThunk("chat/fetchMessages", 
    async () => api.fetchMessages()
)

export const signup = createAsyncThunk("chat/signup", 
    async (data) => api.signup(data)
)

export const signin = createAsyncThunk("chat/signin", 
    async (data) => api.signin(data)
)

export const addMessage = createAsyncThunk("chat/message", 
    async (data) => api.addMessage(data)
)