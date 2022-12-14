/** @jsxImportSource @emotion/react */
import { useContext, useRef } from "react"
import { css } from "@emotion/react"
import { createTodoApi } from "../../api/todo"
import { COLOR } from "../../shared/style"
import { dispatchContext } from "../../context/TodoContext"

const TodoCreate = () => {
  const inputRef = useRef()
  const dipatch = useContext(dispatchContext)
  const handleCreatedTodo = (e) => {
    e.preventDefault()
    if (!inputRef.current.value) return
    createTodoApi(inputRef.current.value)
      .then((res) => {
        dipatch({ type: "ADD", todo: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={handleCreatedTodo} css={todoCreateContainer}>
      <input autoFocus placeholder="todo List" css={inputCss} ref={inputRef} />
      <button css={buttonCss}>추가</button>
    </form>
  )
}

const todoCreateContainer = css`
  margin: 10px 0px;
  justify-content: center;
  display: flex;
`

const inputCss = css`
  width: 58%;
  height: 20px;
  background: ${COLOR.White200};
  justify-content: center;
  display: flex;
  margin-right: 12px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`

const buttonCss = css`
  color: ${COLOR.White100};
  padding: 10px;
  font-weight: bold;
  background-color: ${COLOR.Purple200};
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
`

export default TodoCreate
