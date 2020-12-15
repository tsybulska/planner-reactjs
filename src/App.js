import TodoList from './Todo/TodoList'

function App() {
    const tasks = [
        { id: 1, completed: false, title: 'Buy books' },
        { id: 2, completed: false, title: 'Buy flowers' },
        { id: 3, completed: false, title: 'Buy sunglasses' },
    ]

    return (
        <div className="wrapper">
            <h1>ReactJS ToDo</h1>
            <TodoList tasks={tasks} />
        </div>
    );
}

export default App;
