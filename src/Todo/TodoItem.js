export default function TodoItem({ tasks, index }) {
    return (
        <li>
            <strong>{index + 1}</strong>
            {tasks.title}
            </li>
    )
}