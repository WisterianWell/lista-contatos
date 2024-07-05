import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25vw auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  margin-top: 56px;
`

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #002147;
`

export const Campo = styled.input`
  padding: 16px;
  width: 100%;
  margin-top: 32px;
  background-color: #fff;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #002147;
  border-color: #002147;
`

export const Botao = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007fff;
  padding: 8px 12px;
  margin-left: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #3457d5;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};

  &:hover {
    background-color: #018749;
  }
`

export default EstiloGlobal
