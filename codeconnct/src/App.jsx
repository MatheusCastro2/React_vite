import './App.css'
import BarraPesquisa from './componentes/BarraPesquisa'
import Card from './componentes/Card'
import Filtro from './componentes/Filtro'
import SideBar from './componentes/SideBar'
import './componentes/Card'
import { useEffect, useState } from 'react'

function App() {

  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
    .then(response => response.json())
    .then(dados => setDados(dados))
  }, [])  

  return (
    <div className='container'>
        <SideBar />
        <div>
          <BarraPesquisa />
          <Filtro />
          <Card />
        </div>
    </div>

  )
}

export default App
