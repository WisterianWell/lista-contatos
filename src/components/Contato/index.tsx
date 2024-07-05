import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { editarContato, removerContato } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  numero: numeroOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [nomeOriginal, numeroOriginal, emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setNumero(numeroOriginal)
    setEmail(emailOriginal)
  }

  function salvarEdicao() {
    dispatch(editarContato({ nome, numero, email, id }))
    setEstaEditando(false)
  }

  return (
    <S.Card>
      <S.DadosContato>
        <S.Nome
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          disabled={!estaEditando}
        />
        <S.Dado
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          disabled={!estaEditando}
        />
        <S.Dado
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!estaEditando}
        />
      </S.DadosContato>
      <S.AcoesContato>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvarEdicao}>Salvar</BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover
              onClick={() => dispatch(removerContato(id))}
            >
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.AcoesContato>
    </S.Card>
  )
}

export default Contato
