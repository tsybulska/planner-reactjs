import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'

function App() {
    const [todos, setTodos] = React.useState([
        { id: 1, title: 'Buy books', completed: false },
        { id: 2, title: 'Buy flowers', completed: false },
        { id: 3, title: 'Buy sunglasses', completed: false },
    ])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    id: Date.now(),
                    title,
                    completed: false
                }
            ])
        )
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className="wrapper">
                <h1>ReactJS ToDo</h1>
                
                <AddTodo onCreate={addTodo} />

                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo} />
                ) : (
                    <p>No ToDos</p>
                )}
            </div>
        </Context.Provider>
    )
}

export default App
