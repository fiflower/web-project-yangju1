import express from 'express'
import cors from 'cors'
import { nanoid } from 'nanoid'
import db from './db.js'
import path from 'path'

const app = express()

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'] }))
app.use(express.json())

app.get('/api/todos', function (req, res) {
  db.read()
  const order = req.query.order || 'asc' //'asc', 'desc'
  const done = req.query.done

  let todos = [].concat(db.data.todos)
  if (done === 'true') {
    todos = todos.filter(function (todo) {
      return todo.done
    })
  } else if (done === 'false') {
    todos = todos.filter(function (todo) {
      return !todo.done
    })
  }

  if (order === 'asc') {
    res.json(todos)
  } else if (order === 'desc') {
    res.json(todos.reverse())
  }
})
// 주소 뒤 맨 뒤 슬래시 하나 : 다 만들어지면 주소가 어차피 바뀔것이기 때문
// app.post()
// app.put()
// app.delete()

//
app.post('/api/todos', function (req, res) {
  db.read()
  const newTodo = {
    id: nanoid(12),
    text: req.body.text,
    done: req.body.done
  }
  db.data.todos.push(newTodo)
  res.json(newTodo)
  db.write()
})

//수정
app.put('/api/todos/:todoId', function (req, res) {
  db.read()
  const todoId = req.params.todoId
  const todo = db.data.todos.find(function (todo) {
    return todo.id === todoId
  })
  todo.text = req.body.text
  todo.done = req.body.done
  db.write()
  res.json(todo)
})

//삭제
app.delete('/api/todos/:todoId', function (req, res) {
  db.read()
  const todoId = req.params.todoId
  const index = db.data.todos.findIndex(function (todo) {
    return todo.id === todoId
  })
  // req의 파라미터들
  db.data.todos.splice(index, 1)
  //   db.data.todos.splice(아이템인덱스, 삭제할 아이템 갯수)
  db.write()
  res.json('삭제가 완료 되었습니다~')
})
// todoId는 주소의 변수

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.cwd(), '../client/dist')))
  app.get('/*path', function (req, res) {
    res.sendFile(path.join(process.cwd(), '../client/dist/index.html'))
  })
}

app.listen(3000, function () {
  // https://localhost:3000/api/
  console.log('서버가 3000번 포트로 열렸숨돳!!')
})
