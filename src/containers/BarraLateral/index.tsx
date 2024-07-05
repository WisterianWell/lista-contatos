import { useDispatch, useSelector } from 'react-redux'
import { Aside } from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { Botao, Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarCampoBusca: boolean
}

const BarraLateral = ({ mostrarCampoBusca }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Aside>
      <div>
        {mostrarCampoBusca ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
            />
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar</Botao>
        )}
      </div>
    </Aside>
  )
}
export default BarraLateral
