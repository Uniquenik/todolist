import React from 'react';
import {NewTodo} from "./components/newTodo/newTodo";
import {TodoList} from "./components/todoList/todoList";
import './scss/app-styles.scss'

function App() {
  return (
      <div className={'container'}>
          <NewTodo/>
          <TodoList/>
      </div>
  );
}

export default App;
