import React from 'react'
import './css/Header.css';

import imgHeader from './img/imgHeader.png'

export default function Header() {
  return (
    <header className='header'>
        <div className='headline'>
            <h1>Energize sua <br/> vida com sustentabilidade</h1>
            <p>Veja nosso comparativo detalhado entre energia elétrica e energia limpa, analisando os custos envolvidos em cada opção para tomar uma decisão sustentável e econômica.</p>
            <button id='btnSaiba'>Saiba mais</button>
        </div>
        <div className='imgHeader'>
            <img className='imgT' src={imgHeader} />
        </div>

    </header>
  )
}
