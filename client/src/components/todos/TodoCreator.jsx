import { useTodoStore } from '@/stores/todo.js'

export default function TodoCreator() {
  const text = useTodoStore(s => s.text)
  const setText = useTodoStore(s => s.setText)
  const createTodo = useTodoStore(s => s.createTodo)
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={function (event) {
          setText(event.target.value)
        }}
        onKeyDown={function (event) {
          if (event.nativeEvent.isComposing) return
          if (event.key == 'Enter') createTodo()
        }}
      />
      <button onClick={createTodo}>+</button>
    </div>
  )
}
