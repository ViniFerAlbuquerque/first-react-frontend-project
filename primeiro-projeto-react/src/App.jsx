import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'



import { Container, ToDoList, Input, Button, ListItem, Trash, Check } from './styles'


function App() {
  const [List, setList] = useState([])
  const [inputTask, setInputTask] = useState('')

  // const List = [
  //   { id: uuid(), task: "Dar remédio para a Lila!"},
  //   { id: uuid(), task: "Manter a roupa lavada!" },
  //   { id: uuid(), task: "Terminar os projetos de React!" },
  //   { id: uuid(), task: "Reunião..." }
  // ]

  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {
    if (inputTask) {
    setList([...List, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  function finalizarTarefa(id) {

    const newList = List.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item,
    )
    setList(newList)
  }

  function deletarItem(id) {
    const newList = List.filter((item) => item.id !== id)

    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tenho para fazer..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {
            List.length > 0 ? (
              List.map((item) => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deletarItem(item.id)} />
                </ListItem>
              ))
            ) : (
              <h3>Não há itens na lista</h3>
            )}
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
