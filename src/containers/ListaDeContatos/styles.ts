import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Cabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`

export const BotaoNovoContato = styled(Link)`
  background-color: ${variaveis.verde};
  padding: 8px 12px;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    background-color: #018749;
  }
`
