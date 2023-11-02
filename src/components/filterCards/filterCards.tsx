import * as S from './styles'

export type Props = {
  active?: boolean
  counter: number
  legend: string
}

const FilterCards = ({ active, counter, legend }: Props) => (
  <S.Card active={active}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{legend}</S.Label>
  </S.Card>
)

export default FilterCards
