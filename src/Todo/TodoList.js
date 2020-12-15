import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.tasks.map((tasks, index) => {
                return <TodoItem
                    tasks={tasks}
                    key={tasks.id}
                    index={index}
                    onChange={props.onToggle}
                />
            })}
        </ul>
    )
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList
