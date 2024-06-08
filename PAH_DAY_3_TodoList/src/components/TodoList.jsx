import React, { useState } from 'react';
import TodoItem from './TodoItem';
import '../assets/css/TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            console.log('Adding todo:', newTodo);
            setTodos(prevTodos => [...prevTodos, newTodo]);
            setNewTodo('');
            console.log('Updated todos:', todos);
        }
    };

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <h1 className="heading">Todo List</h1>

            <div className="inputContainer">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                    className="input"
                />
                <button onClick={addTodo} className="addButton">
                    Add
                </button>
            </div>

            <div className="todoList">
                {todos.map((todo, index) => (
                    <TodoItem key={index} text={todo} onDelete={() => deleteTodo(index)} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;