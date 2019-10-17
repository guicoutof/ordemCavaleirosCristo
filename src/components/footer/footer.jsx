import React from 'react';
//import { FontAwesomeIcon } from './node_modules/@fortawesome/free-brands-svg-icons'
import './footer.css'

export default function footer() {
    return (
        <footer className='footerMenu'>
            <div className='footerContainer'>
                <div className='row'>
                    <ul>
                        <li><a href='#'>CONTATO</a></li>
                        <li><a href='#'>(00)9999-9999</a></li>
                        <li><a href='#'>email.contato@email.com</a></li>
                    </ul>
                </div>
                <div className='row'>
                    <ul>
                        <li><a href='#'>DÚVIDAS ? CONVERSE CONOSCO</a></li>
                        <li><a href='#'>ícones aqui</a><a href='#'>ícones aqui</a></li>
                    </ul>
                </div>
                <div className='row'>
                    <ul>
                        <li><a href='#'>REDES SOCIAIS</a></li>
                        <li><a href='#'>ícones aqui</a><a href='#'>ícones aqui</a><a href='#'>ícones aqui</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}