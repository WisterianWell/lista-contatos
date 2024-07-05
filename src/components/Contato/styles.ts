import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-top: 40px;
  border-radius: 16px;
`

export const DadosContato = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  column-gap: 32px;
  margin-left: 32px;
`

export const Dado = styled.textarea`
  font-size: 18px;
  text-align: center;
  background-color: #fcfcfc;
  color: #002147;
  border: none;
  height: 24px;
  resize: none;
`

export const Nome = styled(Dado)`
  font-weight: bold;
`

export const AcoesContato = styled.div`
  justify-content: end;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};

  &:hover {
    background-color: #aa0000;
  }
`
