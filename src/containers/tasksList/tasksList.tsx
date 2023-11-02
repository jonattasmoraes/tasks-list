import Task from '../../components/task/task'
import { Container } from '../tasksList/styles'

const tasks = [
  {
    title: 'Estudar TypeScript',
    description: 'Ver aula 3 novamente',
    priority: 'Importante',
    status: 'Pendente'
  },
  {
    title: 'Pagar contas',
    description: 'Conferir fatura',
    priority: 'urgente',
    status: 'concluída'
  },
  {
    title: 'Comprar comida para os Pets',
    description: 'Passar no Pet Store',
    priority: 'Importante',
    status: 'Pendente'
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
