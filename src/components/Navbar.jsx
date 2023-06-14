import React from 'react'
import './css/Navbar.css';

import logoRaio from './img/logo.png'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>
          <img src={logoRaio}/>
          <h1>OpenEnergy</h1>
      </div>
      <div className="menu">
            <a href="#">Projetos</a>
            <a href="#">Sobre Nós</a>
            <a href="#">Serviços</a>
            <a id="botao"  href="#">Fale Conosco</a>
        </div>
    </nav>
  )
}
