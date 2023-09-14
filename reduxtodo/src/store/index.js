import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todo.slice";
import modeReducer from './lightmode/toggle.slice'

const rootReducer = combineReducers({
    todo: todoReducer,
    mode : modeReducer
})

export const store = configureStore({
    reducer : rootReducer
}) 