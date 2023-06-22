// All state management functionality

import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: {firstName: "omar", lastName: "shah", _id:"123445"},
    token: null,
    tasks: [] ,   
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state) => {
            state.user = {firstName: "omar", lastName: "shah", _id:"123445"}
            state.token = null
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
        setPosts: (state, action) => {
            state.tasks = action.payload.tasks
        },
        setPost: (state, action) => {
            const updatedPosts = state.tasks.map((task) => {
                if(task._id === action.payload.task._id) return action.payload.task
                return task
            })
        }
    }
})

export const {setLogin, setLogout, setPosts, setPost} = authSlice.actions
export default authSlice.reducer