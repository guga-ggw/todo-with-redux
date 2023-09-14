import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTask = createAsyncThunk(
    '/todos/getTask',
    async(_, ThunkApi) => {
        try{
            const res = await fetch('api/v1/todos', {
                method: 'GET',
                headers :{
                    'Content-Type': "application/json",
                    "Authorization": `Bearer XHSaQmYyEYMmKGawpfgJ8InqRNdvIC0x0Qpt82jSudE_uAD--w`
                }
            })
            
            const data = await res.json()
            if (data) return ThunkApi.fulfillWithValue(data)
        }catch{
            return ThunkApi.rejectWithValue('something went wrong')
        }
    }
)

export const createTask = createAsyncThunk(
    '/todos/createTask',
    async (action, ThunkApi) => {
        try {
            const res = await fetch('api/v1/todos',{
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    Authorization: `Bearer XHSaQmYyEYMmKGawpfgJ8InqRNdvIC0x0Qpt82jSudE_uAD--w`
                },
                body: JSON.stringify([action])
            });

            const data = await res.json()
            if(data) return ThunkApi.fulfillWithValue(data)
        } catch (error) {
            console.error('Error during POST request', error);
            throw error; 
        }
    }
);

export const deleteTask = createAsyncThunk(
    '/todos/deleteTask',
    async (action, ThunkApi) => {
        try {
            const res = await fetch(action,{
                method: "DELETE",
                headers: {
                    'Content-Type': "application/json",
                    Authorization: `Bearer XHSaQmYyEYMmKGawpfgJ8InqRNdvIC0x0Qpt82jSudE_uAD--w`
                },
            });

            const data = await res.json()
            if(data) return ThunkApi.fulfillWithValue(data)
        } catch (error) {
            console.error('Error during POST request', error);
            throw error; 
        }
    }
);

export const putTask = createAsyncThunk(
    '/todos/putTask',
    async(action, ThunkApi) =>{
        try {
            const res = await fetch(action.url, {
                method: 'PUT',
                headers: {
                    'Content-Type': "application/json",
                    Authorization: `Bearer XHSaQmYyEYMmKGawpfgJ8InqRNdvIC0x0Qpt82jSudE_uAD--w`
                },
                body : JSON.stringify(action.data)
            })

            const data = await res.json()
            if(data) return ThunkApi.fulfillWithValue(data)
        } catch (error) {
            return ThunkApi.rejectWithValue(error)
        }
    }
)