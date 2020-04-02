import React from 'react';
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { isAuthenticated, isAdm, logout, logoutAdm } from "../../../services/auth";

import Login from '../login/login'

export default class navbar extends React.Component {
    constructor(){
        super();

        this.state = {
            varControle: isAdm()? 1 : isAuthenticated()? 0 : -1,
            modalLogin: false,
        }
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
            <NavLink to="/servicos" className="itemMenu"><li>SERVIÇOS</li></NavLink>
            <NavLink to="/blog" className="itemMenu"><li>BLOG</li></NavLink>
            <NavLink to="/doacoes" className="itemMenu"><li>DOAÇÕES</li></NavLink>
            <NavLink to="/contato" className="itemMenu"><li>CONTATO</li></NavLink>
            <div className="itemMenu"><a className="link" href="https://www.instagram.com/adharalojaocc/" target="_blank" rel="noopener noreferrer">LOJA</a></div>

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

            <NavLink to="/home" className="itemMenu"><li>INÍCIO</li></NavLink>
            <NavLink to="/biblioteca" className="itemMenu"><li>BIBLIOTECA</li></NavLink>
            <NavLink to="/conta" className="itemMenu"><li>CONTA</li></NavLink>
            <NavLink to="/cursos" className="itemMenu"><li>CURSOS</li></NavLink>
            <NavLink to="/servicos" className="itemMenu"><li>SERVIÇOS</li></NavLink>
            <NavLink to="/blog" className="itemMenu"><li>BLOG</li></NavLink>
            <NavLink to="/doacoes" className="itemMenu"><li>DOAÇÕES</li></NavLink>
            <div className="itemMenu"><a className="link" href="https://www.instagram.com/adharalojaocc/" target="_blank" rel="noopener noreferrer">LOJA</a></div>
            {/* <NavLink to="/contato" className="itemMenu"><li>CONTATO</li></NavLink> */}
            <div className="itemMenuDireita" onClick={()=>logout()}><li>SAIR</li></div>
        </div>            
        )
    } 

    navAdmin(){
        return(
        <div className='navbar'>
            <div className="itemMenu">
                <img src={require('../../../assets/img/logo.png')} className='itemMenuLogo' alt="logo"/>
            </div>

            <NavLink to="/admin" className="itemMenu"><li>INÍCIO</li></NavLink>
            <NavLink to="/user" className="itemMenu"><li>USUÁRIOS</li></NavLink>
            <NavLink to="/modules" className="itemMenu"><li>CURSOS</li></NavLink>
            <NavLink to="comments" className="itemMenu"><li>COMENTARIOS</li></NavLink>
            <NavLink to="/services" className="itemMenu"><li>SERVIÇOS</li></NavLink>
            <NavLink to="/articles" className="itemMenu"><li>BLOG</li></NavLink>
            <div className="itemMenuDireita" onClick={()=>logoutAdm()}><li>SAIR</li></div>
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