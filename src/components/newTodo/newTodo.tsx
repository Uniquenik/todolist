import {ChangeEvent, useState } from 'react'
import '../../scss/newTodo-styles.scss'
import {todosStore} from "../../store/todos"

export const NewTodo = () => {
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const {todos, addTodo} = todosStore

    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const onAdd = () => {
        if (value) {
            setError(false)
            addTodo(value)
        }
        else setError(true)
    }

    return(
        <div className={'header'}>
            <h2 className={'header__title'}>Todo List</h2>
            <div className={'new-todo'}>
                <input value={value}
                       onChange={(event) => changeInput(event)}
                       onKeyDown={(event)=> {
                           if (event.key === "Enter") {
                               onAdd()
                           }
                       }}
                       className= {error && 'new-todo__input new-todo__input-error' || 'new-todo__input'} />
                <button className={'new-todo__button'}
                        onClick={() => onAdd()}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}