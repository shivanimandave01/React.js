import {createContext, useContext} from "react";

export const TodoContext = createContext({
    Todos: [
        {
            id : 1,
            todoName:"Todo msg",
            complete:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(todo,id)=>{},
    removeTodo:(id)=>{},
    toggleComplete:(id)=> {}
})

export const useTodo = ()=>
{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider

