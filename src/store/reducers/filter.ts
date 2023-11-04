import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/tasks'

type FilterState = {
  term: string
  critery: 'priority' | 'status' | 'all'
  value?: enums.priority | enums.status
}

const initialState: FilterState = {
  term: '',
  critery: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { changeTerm } = filterSlice.actions

export default filterSlice.reducer
