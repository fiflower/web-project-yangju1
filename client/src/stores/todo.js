import { create } from 'zustand'

export const useTodoStore = create(function (set, get) {
  return {
    todos: [],
    text: '',
    order: 'desc',
    done: undefined,
    setText: function (text) {
      set({
        text: text
      })
    },

    ascending: function () {
      set({
        order: 'asc'
      })
      get().fetchTodos()
    },

    descending: function () {
      set({
        order: 'desc'
      })
      get().fetchTodos()
    },

    setDone: function (done) {
      set({
        done: done
      })
      get().fetchTodos()
    },

    fetchTodos: async function () {
      const order = get().order
      const done = get().done
      const res = await fetch(
        `http://localhost:3000/api/todos?order=${order}&done=${done}`,
        {
          method: 'GET'
          // 기본 값이 Get
          // JSON에 stringify라는 함수가 있음. 문자화 해주는 함수를 호출 해서 소괄호 사이에 데이터를 넣으면
          //그 데이터를 json 포멧의 문자를 만들어줌.
          //body에는 문자열만 들어갈 수 있음.
        }
      )

      const data = await res.json()
      // setTodos(data)
      set({
        todos: data
      })
    },
    createTodo: async function () {
      const text = get().text
      const todos = get().todos
      if (text.trim() === '') return
      const res = await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: text.trim(),
          done: false
        })
      })
      const todo = await res.json()
      //   setTodos(todos.concat([todo]))
      //   setText('')
      set({
        todos: todos.concat([todo]),
        text: ''
      })
      //   console.log(todo)
    },
    updateTodo: async function (todo) {
      const res = await fetch(`http://localhost:3000/api/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
      const newTodo = await res.json()
      const todos = get().todos
      // const index = todos.findIndex(function (todo) {
      //   return todo.id === newTodo.id
      // })
      set({
        todos: todos.map(function (todo) {
          if (todo.id === newTodo.id) {
            return newTodo
          } else {
            return todo
          }
        })
      })
    },
    deleteTodo: async function (todoId) {
      const todos = get().todos
      const res = await fetch(`http://localhost:3000/api/todos/${todoId}`, {
        method: 'DELETE'
      })
      const message = await res.json()
      // 목록에서 삭제
      const newTodos = todos.filter(function (todo) {
        return todo.id !== todoId
      })
      //   setTodos(newTodos)
      set({
        todos: newTodos
      })
      // 메세지 출력
      alert(message)
    }
  }
})
