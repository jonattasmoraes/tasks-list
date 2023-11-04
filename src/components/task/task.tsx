import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './style'

import { remove, edit } from '../../store/reducers/tasks'
import TaskClass from '../../models/Tasks'
import { ButtonSave } from '../../styles'

type Props = TaskClass

const Task = ({
  description: OriginalDescription,
  priority,
  status,
  title,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [itsEditing, setItsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (OriginalDescription.length > 0) {
      setDescription(OriginalDescription)
    }
  }, [OriginalDescription])

  function cancelEditing() {
    setItsEditing(false)
    setDescription(OriginalDescription)
  }

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="prioridade" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!itsEditing}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <S.ActionsBar>
        {itsEditing ? (
          <>
            <ButtonSave
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    priority,
                    status,
                    title,
                    id
                  })
                )
                setItsEditing(false)
              }}
            >
              Salvar
            </ButtonSave>
            <S.ButtonCancelRemove onClick={cancelEditing}>
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
