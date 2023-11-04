import { useDispatch, useSelector } from 'react-redux'

import FilterCards from '../../components/filterCards/filterCards'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Input
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <S.Filters>
          <FilterCards legend="pendentes" counter={1} />
          <FilterCards legend="concluídas" counter={2} />
          <FilterCards legend="urgentes" counter={3} />
          <FilterCards legend="importantes" counter={4} />
          <FilterCards legend="normal" counter={5} />
          <FilterCards legend="todas" counter={10} active />
        </S.Filters>
      </div>
    </S.Aside>
  )
}
export default SideBar
