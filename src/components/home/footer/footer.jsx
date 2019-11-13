import React from 'react';
import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { facebook } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function footer() {
    return (
        <footer className='footerMenu'>
            <div className="footer-container">
                <div className='row-left'>
                    <li className="liInfo" >CONTATO</li>
                    <div className="infoRowLeft">
                        <p>(18) 99698-7819</p>
                        <p>cavaleirosdecristostaff@gmail.com</p>
                    </div>
                </div>
                <div className='row-center'>
                    <li className="liInfo" >DÚVIDAS? FALE CONOSCO</li>
                    <div className="infoRowCenter">
                        <li className="liInfo" className="footer-nav"><FontAwesomeIcon icon={faWhatsapp} size="2x"/></li>
                        <li className="liInfo" className="footer-nav"><FontAwesomeIcon icon={faEnvelope} size="2x"/></li>
                    </div>
                </div>
                <div className='row-right'>
                    <li className="liInfo" >REDES SOCIAIS</li>
                    <div className="infoRowRight">
                        <li className="liInfo" className="footer-nav"><FontAwesomeIcon icon={faFacebookSquare} size="2x"/></li>
                        <li className="liInfo" className="footer-nav"><FontAwesomeIcon icon={faInstagram} size="2x"/></li>
                        <li className="liInfo" className="footer-nav"><FontAwesomeIcon icon={faYoutube} size="2x"/></li>
                    </div>
                </div>
            </div>
        </footer>
    );
}