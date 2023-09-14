import { createSlice } from "@reduxjs/toolkit"
import { getTask, putTask } from "./todo.thunks"
import { createTask } from "./todo.thunks"
import { deleteTask } from "./todo.thunks"
import { specTask } from "./todo.thunks"

const initialState = {
    todoList: [],
    isloading : false,
    error : false,
    editedTask : ""
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setvalueofedit(state, action) {
            state.editedTask = action.payload
        }
    },
    extraReducers :{
        [getTask.pending.type]:(state) =>{
            state.isloading = true
        },
        [getTask.fulfilled.type]:(state, action) =>{
            state.isloading = false
            state.error = false
            state.todoList = action.payload.items
            state.editedTask = ""
        },
        [getTask.rejected.type]:(state, action) =>{
            state.isloading = false
            state.error = true
        },
        [createTask.pending.type]:(state) =>{
            state.isloading = true
        },
        [createTask.fulfilled.type]:(state, action) =>{
            state.isloading = false
            state.error = false

            state.todoList = [...state.todoList, action.payload.items[0]]
        },
        [createTask.rejected.type]:(state, action) =>{
            state.isloading = false
            state.error = true
        },
        [deleteTask.pending.type]:(state) =>{
            state.isloading = true
            state.editedTask = ''
        },
        [deleteTask.fulfilled.type]:(state, action) =>{
            state.isloading = false
            state.error = false
            state.todoList = state.todoList.filter((item) => item._uuid !== action.payload._uuid)
        },
        [deleteTask.rejected.type]:(state, action) =>{
            state.isloading = false
            state.error = true
        },
        [putTask.pending.type]:(state) =>{
            state.isloading = true
        },
        [putTask.fulfilled.type]:(state, action) =>{
            state.isloading = false
            state.error = false
        },
        [putTask.rejected.type]:(state, action) =>{
            state.isloading = false
            state.error = true
        },

    }
})

export const {setvalueofedit} = todoSlice.actions
export default todoSlice.reducer