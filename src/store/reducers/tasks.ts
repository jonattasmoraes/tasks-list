import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Tasks'

import * as enums from '../../utils/enums/tasks'

type TaskState = {
  items: Task[]
}

const initialState: TaskState = {
  items: [
    {
      id: 1,
      description:
        'Estudar React Native e Typescript ambos no mudúlo 17 do curso de TS',
      priority: enums.priority.NORMAL,
      status: enums.status.DONE,
      title: 'Estudar React Native e Typescript'
    },
    {
      id: 2,
      description:
        'Estudar loops while e for em Python, aulas do mudúlo 23 do curso',
      priority: enums.priority.NORMAL,
      status: enums.status.PENDING,
      title: 'Estudar Python'
    },
    {
      id: 3,
      description:
        'Estudar aulas do modúlo 30 do curso de Java e conferir anotações',
      priority: enums.priority.NORMAL,
      status: enums.status.PENDING,
      title: 'Estudar Java'
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((task) => task.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.items.findIndex((t) => t.id !== action.payload.id)
      if (taskIndex >= 0) {
        state.items[taskIndex] = action.payload
      }
    }
  }
})

export const { remove, edit } = tasksSlice.actions

export default tasksSlice.reducer
