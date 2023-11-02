import * as enums from '../utils/enums/tasks'

class Task {
  title: string
  priority: enums.priority
  status: enums.status
  Description: string
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
    this.Description = description
    this.id = id
  }
}

export default Task
