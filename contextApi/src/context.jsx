import React, { useContext, createContext, Children, useState, useEffect } from "react";

export const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"))
        if(storedTodos && storedTodos.length > 0){
            setTodos(storedTodos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            todo: text,
            completed: false
        }
        setTodos([...todos,  newTodo])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id ))
    }

    const updateTodo = (id, text) => {
        setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, todo: text } : todo)));
      };

    const completeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    return(
        <TodoContext.Provider value={{addTodo, todos, deleteTodo,  updateTodo, completeTodo}}>
            {children}
        </TodoContext.Provider>
    )
}



