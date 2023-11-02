import Task from '../../components/task/task'
import { Container } from '../tasksList/styles'

import * as enums from '../../utils/enums/tasks'

const tasks = [
  {
    title: 'Estudar TypeScript',
    description: 'Ver aula 3 novamente',
    priority: enums.priority.IMPORTANT,
    status: enums.status.PENDING
  },
  {
    title: 'Pagar contas',
    description: 'Conferir fatura',
    priority: enums.priority.URGENT,
    status: enums.status.DONE
  },
  {
    title: 'Comprar comida para os Pets',
    description: 'Passar no Pet Store',
    priority: enums.priority.IMPORTANT,
    status: enums.status.PENDING
  }
]

const TasksList = () => (
  <Container>
    <p>2 Tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tasks.map((t) => (
        <li key={t.title}>
          <Task
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

export default TasksList
