import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, Title, Input, ButtonSave } from '../../styles/index'
import { Form, Options, Option } from '../form/styles'
import * as enums from '../../utils/enums/tasks'
import Task from '../../models/Tasks'
import { register } from '../../store/reducers/tasks'

const FormAddTask = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.priority.NORMAL)

  const registerTask = (event: FormEvent) => {
    event.preventDefault()
    const taskToAdd = new Task(
      title,
      priority,
      enums.status.PENDING,
      description,
      9
    )

    dispatch(register(taskToAdd))
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Cadastrar nova tarefa</Title>
      <Form onSubmit={registerTask}>
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Input
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descricão da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                onChange={(event) =>
                  setPriority(event.target.value as enums.priority)
                }
                id={priority}
                defaultChecked={priority === enums.priority.NORMAL}
              />{' '}
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <ButtonSave type="submit">Cadastrar</ButtonSave>
      </Form>
    </MainContainer>
  )
}

export default FormAddTask
