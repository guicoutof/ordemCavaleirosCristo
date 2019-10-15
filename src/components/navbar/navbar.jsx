import React from 'react';
import './navbar.css'

export default function navbar(){
    return(
        <div className='navbar'>
            <img src={require('../../assets/img/logo.png')} className='imagemLogo'/>
            
            <div className="itemMenu">
                <a href="#">HOME</a>
            </div>
            <div className="itemMenu">
                <a href="#">DOAÇÕES</a>
            </div>
            <div className="itemMenu">
                <a href="#">BLOG</a>
            </div>
            <div className="itemMenu">
                <a href="#">CONTATO</a>
            </div>
            <div className="itemMenu">
                <a href="#">LOGIN</a>
            </div>
        </div>
    ) 
} 
