import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './navbar.css'

import Login from '../login/login'

export default class navbar extends React.Component {
    constructor(props){
        super();

        this.state = {
            varControle: props.controle,
            modalLogin: false,
        }
        this.openModalLogin = this.openModalLogin.bind(this);
        this.closeModalLogin = this.closeModalLogin.bind(this);

    }

    openModalLogin(){
        this.setState({ modalLogin: true });
    }
    closeModalLogin(){
        this.setState({ modalLogin: false });
    }
    
    navUsuarioNaoLogado(){
        return(
        <div className='navbar'>
            <div className="itemMenu">
                <img src={require('../../../assets/img/logo.png')} className='itemMenuLogo' alt="logo"/>
            </div>

            <Login open={this.state.modalLogin} close={()=>this.closeModalLogin()} />

            <NavLink to="/" className="itemMenu"><li>INÍCIO</li></NavLink>
            <NavLink to="/cadastro" className="itemMenu"><li>CADASTRO</li></NavLink>
            <NavLink to="/cursos" className="itemMenu"><li>CURSOS</li></NavLink>
            <NavLink to="/doacoes" className="itemMenu"><li>DOAÇÕES</li></NavLink>
            <div className="itemMenu"><li>LOJA</li></div>
            <NavLink to="/contato" className="itemMenu"><li>CONTATO</li></NavLink>

            <div className="itemMenuDireita" onClick={()=>this.openModalLogin()} ><li>ENTRAR</li></div>
        </div>
        )
    }
    navUsuarioLogado(){
        return(
        <div className='navbar'>
            <div className="itemMenu">
                <img src={require('../../../assets/img/logo.png')} className='itemMenuLogo' alt="logo"/>
            </div>

            <NavLink to="/" className="itemMenu"><li>INÍCIO</li></NavLink>
            <NavLink to="/cursos" className="itemMenu"><li>CURSOS</li></NavLink>
            <NavLink to="/doacoes" className="itemMenu"><li>DOAÇÕES</li></NavLink>
            <div className="itemMenu"><li>BLOG</li></div>
            <NavLink to="/contato" className="itemMenu"><li>CONTATO</li></NavLink>
            <div className="itemMenu"><li>CONTA</li></div>
            <div className="itemMenuDireita" ><li>SAIR</li></div>
        </div>            
        )
    } 

    navAdmin(){
        return(
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
        )

    }
    render(){
        switch(this.state.varControle) {
            case 0:
                return this.navUsuarioLogado();
            case 1:
                return this.navAdmin();
            default:
                return this.navUsuarioNaoLogado();
        }
    }    
}