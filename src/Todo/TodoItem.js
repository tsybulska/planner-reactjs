import React from 'react'
import PropTypes from 'prop-types'

const styles ={
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '.5rem',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '5px'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({ tasks, index, onChange }) {
    const classes = []

    if (tasks.completed) {
        classes.push('done')
    }

    console.log(classes)

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                    type='checkbox'
                    checked={tasks.completed}
                    style={styles.input}
                    onChange={() => onChange(tasks.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {tasks.title}
            </span>

            <button className='del'>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    tasks: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem
