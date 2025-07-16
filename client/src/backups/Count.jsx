import { useState } from 'react'
// 나 리엑트에서 useState를 불러서 실행할거야.
//useState는 리엑트에서 상태를 관리하는 훅이야. = 상태는 반응형 데이터

export default function App() {
  //이 함수의 이름은 지워지고 나간다. 리엑트에서 내보내는 함수는 컴포넌트 함수인데 컴포넌트는
  //이름이 있어야 해. 그래서 export default로 내보내는 함수의 이름은 App으로 지어줬어.
  // 이 함수는 리엑트 컴포넌트야. 리엑트의 문법 중 하나다.

  // JS 모듈(Module) : export는 내 안에있는걸 내보내는 것. import는 밖에서 가져오는 것.
  // export default(: 기본)는 두 번 작성하는건 가능하지 않음 무조건 하나에 파일에 한번만.
  // export const ~ 는 이름 내보내기 이름을 지시하는 방식은 여러번 가능.
  // 기본 가져오기는 가져
  // 올 때 이름을 지어줌.
  // 이름 가져오기와 기본 가져오기는 같이 쓸 수 있음. 기본 가져오기는 앞에

  // let count = 0
  const [count, Setcount] = useState(0)
  // count는 getter, Setcount는 setter
  // getter는 읽기 언어, setter는 쓰기 언어

  function increase() {
    Setcount(count + 1)
    // Setcount는 setter 함수로, count의 값을 인수로 넣어 할당하는 거야.
  }
  function decrease() {
    Setcount(count - 1)
  }
  return (
    <>
      <div>안녕! {count}번째 방문자!?</div>
      <button onClick={increase}>방문</button>
      <button onClick={decrease}>퇴장</button>
    </>
  )
}
