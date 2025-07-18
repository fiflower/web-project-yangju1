import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo.js'
import TodoItem from '@/components/todos/TodoItem.jsx'

export default function TodoList() {
  const todos = useTodoStore(s => s.todos)
  const fetchTodos = useTodoStore(s => s.fetchTodos)
  useEffect(function () {
    fetchTodos()
    //eslint-disable-next-line
  }, [])
  return (
    <ul>
      {todos.map(function (todo) {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        )
      })}
    </ul>
  )
}
