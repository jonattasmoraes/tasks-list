import * as enums from '../utils/enums/tasks'

class Task {
  title: string
  priority: enums.priority
  status: enums.status
  description: string
  id: number

  constructor(
    title: string,
    priority: enums.priority,
    status: enums.status,
    description: string,
    id: number
  ) {
    this.title = title
    this.priority = priority
    this.status = status
    this.description = description
    this.id = id
  }
}

export default Task
