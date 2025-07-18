import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo.js'
import TodoItem from '@/components/todos/TodoItem.jsx'

export default function TodoFilters() {
  const ascending = useTodoStore(s => s.ascending)
  const descending = useTodoStore(s => s.descending)
  const setDone = useTodoStore(s => s.setDone)

  return (
    <>
      <div>
        <button onClick={ascending}>오름차순</button>
        <button onClick={descending}>내림차순</button>
        <button
          onClick={function () {
            setDone(undefined)
          }}>
          전체
        </button>
        <button
          onClick={function () {
            setDone(true)
          }}>
          완료
        </button>
        <button
          onClick={function () {
            setDone(false)
          }}>
          해야 할 일
        </button>
      </div>
    </>
  )
}
