import styled from 'styled-components'
import variables from '../../styles/variables'

import * as enums from '../../utils/enums/tasks'
import { Button } from '../../styles'

type TagProps = {
  priority?: enums.priority
  status?: enums.status
  parameter: 'status' | 'prioridade'
}

function returnBackColor(props: TagProps): string {
  if (props.parameter === 'prioridade') {
    if (props.priority === enums.priority.URGENT) return variables.red
    if (props.priority === enums.priority.IMPORTANT) return variables.yellowTwo
  } else {
    if (props.status === enums.status.PENDING) return variables.yellow
    if (props.status === enums.status.DONE) return variables.green
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 8px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => returnBackColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionsBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const ButtonCancelRemove = styled(Button)`
  background-color: ${variables.red};
`
