import React, { Component } from 'react';
import imagem from '../../assets/imagem.png';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container">
          <div className="titulo">
            <span>FACEBOOK</span>
          </div>
          <div className="perfil">
            <a href="http://facebook.com.br">Meu Perfil</a>
            <img src={imagem} alt="Profile" />
          </div>
        </div>
      </div>
    )
  }

}

export default Header;
