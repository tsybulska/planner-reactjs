import React from 'react'
import TodoList from './Todo/TodoList'

function App() {
    const [tasks, setTasks] = React.useState([
        { id: 1, completed: false, title: 'Buy books' },
        { id: 2, completed: false, title: 'Buy flowers' },
        { id: 3, completed: false, title: 'Buy sunglasses' },
    ])

    function toggleTasks(id) {
        setTasks(
            tasks.map(tasks => {
                if (tasks.id === id) {
                    tasks.completed = !tasks.completed
                }
                return tasks
            })
        )
    }

    return (
        <div className="wrapper">
            <h1>ReactJS ToDo</h1>
            <TodoList tasks={tasks} onToggle={toggleTasks} />
        </div>
    );
}

export default App;
