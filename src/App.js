import React, { useState } from 'react'
import "./App.css"

function App() {

  const [TodoList, setTodoList] = useState([
    { Todo: 'test', }
  ])

  const [Todo, setTodo] = useState("")

  const inputTodo = (event) => {
    setTodo(event.target.value)
  }

  const chooga = () => {
    const newTodo = { Todo, }
    setTodoList([...TodoList, newTodo])
    setTodo("")
  }

  return (
    <div className="KING">

      <div className='submitBox'>
        <input value={Todo} onChange={inputTodo} />
        <button onClick={chooga}>추가하기</button>
      </div>

      <h1 className='TitleName'>Todo List</h1>

      <div className='Boxes'>
        {
          TodoList.map(v => {
            return (
              <div key={Math.random()} className='Box'>
                {v.Todo}
              </div>
            )
          })
        }

      </div>




    </div>
  )
}

export default App