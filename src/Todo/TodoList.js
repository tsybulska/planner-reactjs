import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.tasks.map((tasks, index) => {
                return <TodoItem tasks={tasks} key={tasks.id} index={index} />
            })}
        </ul>
    )
}
