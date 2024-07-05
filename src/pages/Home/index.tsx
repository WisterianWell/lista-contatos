import BarraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraLateral mostrarCampoBusca={true} />
    <ListaDeContatos />
  </>
)

export default Home
