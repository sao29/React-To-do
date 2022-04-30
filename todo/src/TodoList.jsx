import React from 'react'
import './TodoList.css';

function TodoList(yo) {
  return (
    <section>
    <ul>
        {yo.children}
    </ul>
</section>
  )
}

export default TodoList