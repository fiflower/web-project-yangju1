import { useState } from 'react'

export default function App() {
  const [text, setText] = useState('Hello~')
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={function (event) {
          // input요소에서 값이 변경될 때 마다
          // const inputEl = event.target
          setText(event.target.value)
          // inputEl은 함수.target으로 찾으면 됨
          //event.target= inputEl
          //event에는 Change했을 때의 정보가 담겨있어.
          // event.target.value는 inputEl의 value 속성의 값이야.
        }}
      />
      <button
        onClick={function () {
          console.log(text)
        }}>
        로그인
      </button>

      <h1>{text}</h1>
    </>
  )
}
