import { useState } from 'react';
import './styles.css'


export default function BarraPesquisa() {
    const [termoPesquisa, setTermoPesquisa] = useState('');
    console.log(termoPesquisa)

    return (
        <input 
        type="search" 
        placeholder="Digite o que voce procura"
        className='barra-pesquisa'
        value={termoPesquisa}
        onChange={(evento) => setTermoPesquisa(evento.target.value)}/>

    )
}