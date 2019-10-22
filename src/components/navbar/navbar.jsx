import React from 'react';
import './navbar.css'

export default function navbar(){
    return(
        <div className='navbar'>
            <img src={require('../../assets/img/logo.png')} alt="logo"/>
            
            <div className="itemMenu">
                <li>HOME</li>
            </div>
            <div className="itemMenu">
                <li >DOAÇÕES</li>
            </div>
            <div className="itemMenu">
                <li >BLOG</li>
            </div>
            <div className="itemMenu">
                <li >CONTATO</li>
            </div>
            <div className="itemMenu">
                <li >LOGIN</li>
            </div>
        </div>
    ) 
} 
