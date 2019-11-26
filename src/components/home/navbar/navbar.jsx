import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './navbar.css'

import Login from '../login/login'

export default function navbar(props) {
    const varControle = props.controle;

    // const [login,setLogin] = useState(false);
    
    const navUsuarioNaoLogado = 
        <div className='navbar'>
            <div className="itemMenu">
                <img src={require('../../../assets/img/logo.png')} className='itemMenuLogo' alt="logo"/>
            </div>

            <Login open={login} />

            <NavLink to="/" className="itemMenu"><li>INÍCIO</li></NavLink>
            <NavLink to="/cadastro" className="itemMenu"><li>CADASTRO</li></NavLink>
            <div className="itemMenu"><li>CURSOS</li></div>
            <NavLink to="/doacoes" className="itemMenu"><li>DOAÇÕES</li></NavLink>
            <div className="itemMenu"><li>LOJA</li></div>
            <NavLink to="/contato" className="itemMenu"><li>CONTATO</li></NavLink>

            <div className="itemMenuDireita" ><li>ENTRAR</li></div>
        </div>

    const navUsuarioLogado = 
        <div className='navbar'>
            <div className="itemMenu">
                <img src={require('../../../assets/img/logo.png')} className='itemMenuLogo' alt="logo"/>
            </div>

            <NavLink to="/" className="itemMenu"><li>INÍCIO</li></NavLink>
            <NavLink to="/doacoes" className="itemMenu"><li>DOAÇÕES</li></NavLink>
            <div className="itemMenu"><li>BLOG</li></div>
            <NavLink to="/contato" className="itemMenu"><li>CONTATO</li></NavLink>
            <div className="itemMenu"><li>CONTA</li></div>
            <div className="itemMenuDireita" ><li>SAIR</li></div>
        </div>

    const navAdmin = 
        <div className='navbar'>
            <div className="itemMenu">
                <img src={require('../../../assets/img/logo.png')} className='itemMenuLogo' alt="logo"/>
            </div>

            <NavLink to="/" className="itemMenu"><li>INÍCIO</li></NavLink>
            <div className="itemMenu"><li>USUÁRIOS</li></div>
            <div className="itemMenu"><li>CURSOS</li></div>
            <div className="itemMenu"><li>BLOG</li></div>
            <div className="itemMenuDireita"><li>SAIR</li></div>
        </div>

    switch(varControle) {
        case 0:
            return navUsuarioLogado;
        case 1:
            return navAdmin;
        default:
            return navUsuarioNaoLogado;
    }
}