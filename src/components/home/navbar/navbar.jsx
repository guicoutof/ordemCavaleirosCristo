import React from 'react';
import './navbar.css'

export default function navbar(props){
    const varControle = props.controle;

    const navUsuarioNaoLogado = 
        <div className='navbar'>
            <div className="itemMenu">
                <img src={require('../../../assets/img/logo.png')} className='itemMenuLogo' alt="logo"/>
            </div>

            <div className="itemMenu"><li>INÍCIO</li></div>
            <div className="itemMenu"><li>CADASTRO</li></div>
            <div className="itemMenu"><li>CURSOS</li></div>
            <div className="itemMenu"><li>DOAÇÕES</li></div>
            <div className="itemMenu"><li>LOJA</li></div>
            <div className="itemMenu"><li>CONTATO</li></div>

            <div className="itemMenuDireita"><li>ENTRAR</li></div>
        </div>

    const navUsuarioLogado = 
        <div className='navbar'>
            <div className="itemMenu">
                <img src={require('../../../assets/img/logo.png')} className='itemMenuLogo' alt="logo"/>
            </div>

            <div className="itemMenu"> <li>INÍCIO </li> </div>
            <div className="itemMenu"> <li>DOAÇÕES </li> </div>
            <div className="itemMenu"> <li>BLOG </li> </div>
            <div className="itemMenu"> <li>CONTATO </li> </div>
            <div className="itemMenu"> <li>CONTA </li> </div>
            <div className="itemMenuDireita"> <li>SAIR </li> </div>
        </div>

    const navAdmin = 
        <div className='navbar'>
            <div className="itemMenu">
                <img src={require('../../../assets/img/logo.png')} className='itemMenuLogo' alt="logo"/>
            </div>

            <div className="itemMenu"> <li>INÍCIO </li> </div>
            <div className="itemMenu"> <li>USUÁRIOS </li> </div>
            <div className="itemMenu"> <li>CURSOS </li> </div>
            <div className="itemMenu"> <li>BLOG </li> </div>
            <div className="itemMenuDireita"><li> SAIR </li> </div>
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