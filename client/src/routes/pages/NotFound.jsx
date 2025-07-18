import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>페이지를 잘못 접근 하셨습니다!!</h1>
      <Link to="/">잘못 접속하셨으니 홈으로 돌아가세요!"</Link>
    </div>
  )
}
