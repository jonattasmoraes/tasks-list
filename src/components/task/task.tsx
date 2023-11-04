import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './style'

import * as enums from '../../utils/enums/tasks'

import { remove } from '../../store/reducers/tasks'
import TaskClass from '../../models/Tasks'

type Props = TaskClass

const Task = ({ title, priority, status, description, id }: Props) => {
  const dispatch = useDispatch()
  const [itsEditing, setItsEditing] = useState(false)
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="prioridade" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionsBar>
        {itsEditing ? (
          <>
            <S.ButtonSave>Salvar</S.ButtonSave>
            <S.ButtonCancelRemove onClick={() => setItsEditing(false)}>
              Cancelar
            </S.ButtonCancelRemove>
          </>
        ) : (
          <>
            <S.Button onClick={() => setItsEditing(true)}>Editar</S.Button>
            <S.ButtonCancelRemove onClick={() => dispatch(remove(id))}>
              Remover
            </S.ButtonCancelRemove>
          </>
        )}
      </S.ActionsBar>
    </S.Card>
  )
}

export default Task
