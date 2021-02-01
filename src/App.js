import React, { useEffect } from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import Loader from './Loader'
import Modal from './Modal/Modal'

const AddTodo = React.lazy(() => new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./Todo/AddTodo'))
    }, 4000)
}))

function App() {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setLoading(false)
                    setTodos(todos)
                }, 2000)
            })
    }, [])

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
                <Modal />

                <React.Suspense fallback={<p style={{textAlign: 'center'}}>Loading..</p>}>
                    <AddTodo onCreate={addTodo} />
                </React.Suspense>

                {loading && <Loader />}

                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo} />
                ) : loading ? null : (
                    <p>No ToDos</p>
                )}

                <p className="copy">Developed by <a href="https://tsybulska.github.io/" target="_blank" rel="nofollow noopener">Olena Tsybulska</a></p>
            </div>
        </Context.Provider>
    )
}

export default App
