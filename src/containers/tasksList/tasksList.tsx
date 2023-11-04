import { useSelector } from 'react-redux'

import Task from '../../components/task/task'
import { Container, Result } from '../tasksList/styles'

import { RootReducer } from '../../store'

const TasksList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)
  const { term, critery, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const taskFilter = () => {
    let filteredTasks = items

    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) =>
          item.title.toLocaleLowerCase().search(term.toLocaleLowerCase()) >= 0
      )

      if (critery === 'priority') {
        filteredTasks = filteredTasks.filter((item) => item.priority === value)
      } else if (critery === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === value)
      }

      return filteredTasks
    } else {
      return items
    }
  }

  const resultFilter = (amount: number) => {
    let message = ''
    const completed =
      term !== undefined && term.length > 0 ? ` e "${term}"` : ''

    if (critery === 'all') {
      message = `${amount} tarefa(s) encontrada(s) como: todas${completed}`
    } else {
      message = `${amount} tarefa(s) encontrada(s) como: "${`${critery} = ${value}`}" ${completed}`
    }

    return message
  }

  const tasks = taskFilter()
  const message = resultFilter(tasks.length)

  return (
    <Container>
      <Result>{message}</Result>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TasksList
