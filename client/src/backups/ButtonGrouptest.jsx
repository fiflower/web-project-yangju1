import { useState } from 'react'
import ButtonGroup from './components/ButtonGroup.jsx'
import Button from './components/Button.jsx'

export default function App() {
  const [isLoadingCancel, setIsLoadingCancel] = useState(false)
  const [isLoadingSave, setIsLoadingSave] = useState(false)
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)
  return (
    <ButtonGroup
      direction="horizontal
    ">
      <Button
        varient="secondary"
        width={150}
        loading={isLoadingCancel}
        onClick={function () {
          setIsLoadingCancel(!isLoadingCancel)
        }}>
        취소
      </Button>
      <Button
        varient="primary"
        width={100}
        loading={isLoadingSave}
        onClick={function () {
          setIsLoadingSave(!isLoadingSave)
        }}>
        저장
      </Button>
      <Button
        varient="danger"
        width={70}
        loading={isLoadingDelete}
        onClick={function () {
          setIsLoadingDelete(!isLoadingDelete)
        }}>
        삭제
      </Button>
    </ButtonGroup>
  )
}
