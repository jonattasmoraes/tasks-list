import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/tasks'
import { RootReducer } from '../../store'

export type Props = {
  legend: string
  critery: 'priority' | 'status' | 'all'
  value?: enums.priority | enums.status
}

const FilterCards = ({ legend, critery, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const checkIsActive = () => {
    const sameCritery = filter.critery === critery
    const sameValue = filter.value === value

    return sameCritery && sameValue
  }

  const countTasks = () => {
    if (critery === 'all') return tasks.items.length
    if (critery === 'priority') {
      return tasks.items.filter((item) => item.priority === value).length
    }
    if (critery === 'status') {
      return tasks.items.filter((item) => item.status === value).length
    }
  }

  const toFilter = () => {
    dispatch(
      changeFilter({
        critery,
        value
      })
    )
  }

  const counter = countTasks()
  const active = checkIsActive()

  return (
    <S.Card active={active} onClick={toFilter}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{legend}</S.Label>
    </S.Card>
  )
}

export default FilterCards
