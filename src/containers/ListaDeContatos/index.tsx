import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { BotaoNovoContato, Cabecalho } from './styles'
import { RootReducer } from '../../store'
import { MainContainer, Titulo } from '../../styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <main>
      <MainContainer>
        <Cabecalho>
          <Titulo>Lista de Contatos</Titulo>
          <BotaoNovoContato to="/novo">Novo Contato</BotaoNovoContato>
        </Cabecalho>
        <ul>
          {filtraTarefas().map((c) => (
            <li key={c.nome}>
              <Contato
                nome={c.nome}
                numero={c.numero}
                email={c.email}
                id={c.id}
              />
            </li>
          ))}
        </ul>
      </MainContainer>
    </main>
  )
}

export default ListaDeContatos
