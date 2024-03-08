import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "hello"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
                // giving text as name "text" in payload so no need to write '.text' at the end of payload(payload is an object) 
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos =  state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos.map((todo) => (todo.id === action.payload.id ? todo.text = action.payload.text : todo)
            )
        }
    }
})

export const{addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer