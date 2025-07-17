import { useState } from 'react'

export default function App() {
  const [movies, setMovies] = useState([])
  const [searchText, setSearchText] = useState('')

  //useEffect(실행할 함수, 의존성배열)
  //useEffect(function() {}, [])
  //의존성 배열이 실행될 때마다 함수가 실행됨
  //의존성 배열이 없으면 컴포넌트가 실행될 때 가장 마지막에 한번 실행 됨.
  //아래 비어있는 useEffect는 건너뛰고 나머지가 실행된 후 올라와서 실행됨.
  // useEffect(function () {
  //   fetchMovies()
  // }, [])

  async function fetchMovies() {
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    const data = await res.json()
    setMovies(data.Search || [])
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={function (event) {
            setSearchText(event.target.value)
          }}
          onKeyDown={function (event) {
            if (event.nativeEvent.isComposing) return
            if (event.key === 'Enter') fetchMovies()
          }}
        />
        <button onClick={fetchMovies}>검색</button>
      </div>
      <ul>
        {movies.map(function (movie) {
          return <li key={movie.imdbID}>{movie.Title}</li>
        })}
      </ul>
    </>
  )
}

//린터 => ESLint : anti-pattern을 방지
//포매터 => Prettier : 코드 스타일을 통일
