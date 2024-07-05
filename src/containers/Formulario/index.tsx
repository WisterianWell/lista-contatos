import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, useNavigate } from 'react-router-dom'
import { Campo, MainContainer, Titulo } from '../../styles'
import { adicionarContato } from '../../store/reducers/contatos'
import { BotaoCadastrar } from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      adicionarContato({
        nome,
        numero,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Nome"
          required
        />
        <Campo
          value={numero}
          onChange={({ target }) => setNumero(target.value)}
          type="tel"
          placeholder="Número"
          required
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="E-mail"
        />
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
