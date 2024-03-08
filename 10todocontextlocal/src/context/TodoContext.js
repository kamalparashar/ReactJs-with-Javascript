//1. import useContext and createContext

import { createContext, useContext } from "react";

//2. create context and export it
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Hello world",
            completed: false,
        },
    ],
    addTodo: () => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

//3. custom Hook
export const useTodo = () =>{
    return useContext(TodoContext);
}

//4. wrapping context in provider
export const TodoProvider = TodoContext.Provider