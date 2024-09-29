import { createSlice, nanoid } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
    todos: []
}

export const TodoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                todo: action.payload,
                completed: false
            }
            state.todos.push(newTodo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todos => todos.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload
            const todo = state.todos.find(todo => todo.id === id)
            if(todo)todo.todo = text
        },
        completeTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if(todo)todo.completed = !todo.completed

        },
    }

})

export const  {addTodo, deleteTodo, completeTodo, updateTodo} = TodoSlice.actions

export const reducer = TodoSlice.reducer