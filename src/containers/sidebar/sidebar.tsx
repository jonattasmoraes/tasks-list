import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FilterCards from '../../components/filterCards/filterCards'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/tasks'
import { Button, Input } from '../../styles/index'

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
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
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}
export default SideBar
