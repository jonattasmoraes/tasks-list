import { useDispatch, useSelector } from 'react-redux'

import FilterCards from '../../components/filterCards/filterCards'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/tasks'
import { Input } from '../../styles/index'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <Input
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <S.Filters>
          <FilterCards
            value={enums.status.PENDING}
            critery="status"
            legend="pendentes"
          />
          <FilterCards
            value={enums.status.DONE}
            critery="status"
            legend="concluídas"
          />
          <FilterCards
            value={enums.priority.URGENT}
            critery="priority"
            legend="urgentes"
          />
          <FilterCards
            value={enums.priority.IMPORTANT}
            critery="priority"
            legend="importantes"
          />
          <FilterCards
            value={enums.priority.NORMAL}
            critery="priority"
            legend="normal"
          />
          <FilterCards critery="all" legend="todas" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}
export default SideBar
