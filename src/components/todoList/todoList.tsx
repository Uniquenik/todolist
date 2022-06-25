import {todosStore} from "../../store/todos";
import {observer} from 'mobx-react-lite'
import { TodoCard } from "../../shared/card/todoCard";
import '../../scss/todoList-styles.scss'
import {ChangeEvent, useEffect, useState} from "react";
import {TodoElement} from "../../models/models";

export const TodoList = observer(() => {
    const {todos, checkTodo, deleteTodo} = todosStore
    const filterOptions:string[] = ['Все задачи ', 'Выполненные', 'Невыполненные']
    const [filter, setFilter] = useState<number>(0)
    const [currentTodos, setCurrentTodos] = useState<TodoElement[]>(todos)

    useEffect(()=>{
        switch (filter){
            case 0:
                setCurrentTodos(todos)
                break;
            case 1:
                setCurrentTodos(todos.filter(todos => todos.isComplete))
                break;
            case 2:
                setCurrentTodos(todos.filter(todos => !todos.isComplete))
                break;
        }
    },[todos,filter])

    const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
        setFilter(Number(event.target.value))
    }

    return (
        <>
            <div className={'todo-list__container'}>
                <div className={'todo-list__filter'}>
                    <div>
                        <select value={filter.toString()}
                                onChange={(event) => handleFilter(event)}
                                className={'todo-list__select'}
                                id="todo-list__select">
                            {
                                filterOptions.map((el, index) => {
                                    return(
                                        <option className={'todo-list__select-option'} value={index}>{el}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                {currentTodos && currentTodos.map((el) => {
                    return(
                        <>
                            <TodoCard
                                key={el.datetime}
                                index={el.id}
                                isComplete={el.isComplete}
                                title={el.title}
                                datetime={el.datetime}
                                onCheck={() => checkTodo(el.id)}
                                onDelete={() => deleteTodo(el.id)}
                            />
                        </>
                    )
                })}
            </div>
        </>
    )
})