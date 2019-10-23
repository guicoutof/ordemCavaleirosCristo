import React from 'react';
import './navbar.css'

export default function navbar(){
    const varControle = -1;

    const navUsuarioNaoLogado = 
        <div className='navbar'>
            <div className="itemMenu">
                <img src={require('../../assets/img/logo.png')} className='itemMenuLogo'/>
            </div>
            
            <div className="itemMenu"> <a href="#">INÍCIO</a> </div>
            <div className="itemMenu"> <a href="#">DOAÇÕES</a> </div>
            <div className="itemMenu"> <a href="#">BLOG</a> </div>
            <div className="itemMenu"> <a href="#">CONTATO</a> </div>
            <div className="itemMenuDireita"> <a href="#">LOGIN</a> </div>
        </div>

    const navUsuarioLogado = 
        <div className='navbar'>
            <img src={require('../../assets/img/logo.png')} className='itemMenuLogo'/>

            <div className="itemMenu"> <a href="#">INÍCIO</a> </div>
            <div className="itemMenu"> <a href="#">CURSOS</a> </div>
            <div className="itemMenu"> <a href="#">BIBLIOTECA</a> </div>
            <div className="itemMenu"> <a href="#">BLOG</a> </div>
            <div className="itemMenuDireita"> <a href="#">SAIR</a> </div>
        </div>

    const navAdmin = 
        <div className='navbar'>
            <img src={require('../../assets/img/logo.png')} className='itemMenuLogo'/>

            <div className="itemMenu"> <a href="#">INÍCIO</a> </div>
            <div className="itemMenu"> <a href="#">USUÁRIOS</a> </div>
            <div className="itemMenu"> <a href="#">CURSOS</a> </div>
            <div className="itemMenu"> <a href="#">BLOG</a> </div>
            <div className="itemMenuDireita"> <a href="#">SAIR</a> </div>
        </div>

    switch(varControle) {
        case -1:
            return navUsuarioNaoLogado;
        case 0:
            return navUsuarioLogado;
        case 1:
            return navAdmin;
    }
}