import { useSelector } from 'react-redux'

import Task from '../../components/task/task'
import { Container } from '../tasksList/styles'

import { RootReducer } from '../../store'

const TasksList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)

  return (
    <Container>
      <p>
        2 Tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {items.map((t) => (
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
