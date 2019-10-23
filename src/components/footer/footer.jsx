import React from 'react';
//import { FontAwesomeIcon } from './node_modules/@fortawesome/free-brands-svg-icons'
import './footer.css'

export default function footer() {
    return (
        <footer className='footerMenu'>
            <div className='footerContainer'>
                <div className='row'>
                    <ul>
                        <li>CONTATO</li>
                        <li>(00)9999-9999</li>
                        <li>email.contato@email.com</li>
                    </ul>
                </div>
                <div className='row'>
                    <ul>
                        <li>DÚVIDAS ? CONVERSE CONOSCO</li>
                        <li>ícones aquiícones aqui</li>
                    </ul>
                </div>
                <div className='row'>
                    <ul>
                        <li>REDES SOCIAIS</li>
                        <li>ícones aquiícones aquiícones aqui</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}