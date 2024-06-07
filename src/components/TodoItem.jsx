import React from 'react'

const TodoItem = ({ todo }) => {
  return (
    <div style={styles.todoItem}>
      <p>{todo.title}</p>
    </div>
  )
}

const styles = {
  todoItem: {
    fontSize: '24px',
    border: '1px solid #BDBDBD',
    borderRadius:'8px',
    marginBottom: '10px',
  },
}
export default TodoItem