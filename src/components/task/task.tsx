import { useState } from 'react'

import * as S from './style'

type Props = {
  title: string
  priority: string
  status: string
  description: string
}

const Task = ({ title, priority, status, description }: Props) => {
  const [itsEditing, setItsEditing] = useState(false)
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag>{priority}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Description value={description} />
      <S.ActionsBar>
        {itsEditing ? (
          <>
            <S.Button>Editar</S.Button>
            <S.Button onClick={() => setItsEditing(false)}>Excluir</S.Button>
          </>
        ) : (
          <>
            <S.Button onClick={() => setItsEditing(true)}>Editar</S.Button>
            <S.Button>Excluir</S.Button>
          </>
        )}
      </S.ActionsBar>
    </S.Card>
  )
}

export default Task
