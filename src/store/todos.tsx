import { makeAutoObservable } from "mobx"
import { TodoElement } from "../models/models"

const initTodos:TodoElement[] = []

const todos = () => {
    const store = {
        todos: initTodos,
        addTodo(title:string){
            store.todos.push({
                id: store.todos.length ? store.todos[store.todos.length-1].id+1 : 0,
                isComplete: false,
                title: title,
                datetime: Number(Date.now())
            })
            console.log(store.todos)
        },
        checkTodo(id:number){
            //чтобы при фильтре невыполненных задач при выполнении сразу исчезали
            store.todos = [...store.todos]
            store.todos[id].isComplete = !store.todos[id].isComplete
        },
        deleteTodo(id:number){
            store.todos = store.todos.filter(todo => todo.id !== id)
        },
    }

    return makeAutoObservable(store)
}

export const todosStore = todos()