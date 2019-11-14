import React from 'react';
import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function footer() {
    return (
        <footer className='footerMenu'>
            <div className="footer-container">
                <div className='row'>
                    <li>CONTATO</li>
                    <div className="infoRowContato">
                        <p>(18) 99698-7819</p>
                        <p>cavaleirosdecristostaff@gmail.com</p>
                    </div>
                </div>
                <div className='row'>
                    <li>DÚVIDAS? FALE CONOSCO</li>
                    <div className="infoRow">
                        <li className="liInfo"><FontAwesomeIcon icon={faWhatsapp} size="2x"/></li>
                        <li className="liInfo"><FontAwesomeIcon icon={faEnvelope} size="2x"/></li>
                    </div>
                </div>
                <div className='row'>
                    <li>REDES SOCIAIS</li>
                    <div className="infoRow">
                        <li className="liInfo"><FontAwesomeIcon icon={faFacebookSquare} size="2x"/></li>
                        <li className="liInfo"><FontAwesomeIcon icon={faInstagram} size="2x"/></li>
                        <li className="liInfo"><FontAwesomeIcon icon={faYoutube} size="2x"/></li>
                    </div>
                </div>
            </div>
        </footer>
    );
}