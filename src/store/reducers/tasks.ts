import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Tasks'

import * as enums from '../../utils/enums/tasks'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Estudar Javascript',
      enums.priority.IMPORTANT,
      enums.status.PENDING,
      '',
      1
    ),
    new Task(
      'Estudar Java',
      enums.priority.URGENT,
      enums.status.DONE,
      'Rever aula dois do mudúlo sobre classes Java',
      2
    ),
    new Task(
      'Estudar Python',
      enums.priority.IMPORTANT,
      enums.status.PENDING,
      'Estudar loops e condicionais',
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = tasksSlice.actions

export default tasksSlice.reducer
