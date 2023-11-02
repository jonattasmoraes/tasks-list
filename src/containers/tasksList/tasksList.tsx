import { useSelector } from 'react-redux'

import Task from '../../components/task/task'
import { Container } from '../tasksList/styles'

import { RootReducer } from '../../store'

const TasksList = () => {
  const { tasks } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>
        2 Tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              description={t.Description}
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
