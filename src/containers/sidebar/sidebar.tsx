import FilterCards from '../../components/filterCards/filterCards'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Buscar" />
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
export default SideBar
