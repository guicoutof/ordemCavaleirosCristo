import React from 'react';
import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {  faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function footer() {
    return(
        <footer className='footerMenu'>
            <div className="footer-container">
                <div className='row'>
                    <li>CONTATO</li>
                    <div className="infoRowContato">
                        <div className="info">
                            <FontAwesomeIcon className="icon" icon={faPhone} /><p>(18) 99698-7819</p>
                        </div>
                        <div className="info">
                            <FontAwesomeIcon className="icon" icon={faEnvelope} /><p>cavaleirosdecristostaff@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <li className="duvidas">DÚVIDAS? FALE CONOSCO</li>
                    <div className="infoRow">
                        <a href="https://wa.me/5514996903532" target='_blank' rel="noopener noreferrer" className="liInfo" id="wpp">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
                        </a>
                        <a id="mail" className="liInfo" href="mailto:cavaleirosdecristostaff@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
                    </div>
                </div>
                <div className='row'>
                    <li>REDES SOCIAIS</li>
                    <div className="infoRow">
                        <a href="https://www.facebook.com/Ordem-dos-Cavaleiros-de-Cristo-112236390227358/" target='_blank' rel="noopener noreferrer" id="fb" className="liInfo">
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x"/></a>
                        <a href="https://www.instagram.com/ordemdoscavaleirosdecristo/?hl=pt-br" target='_blank' rel="noopener noreferrer" id="ig" className="liInfo">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                        <a href="https://www.youtube.com/channel/UC6akthgrzhxVHOhF9zWSNVw" target='_blank' rel="noopener noreferrer" id="yt" className="liInfo">
                            <FontAwesomeIcon icon={faYoutube} size="2x"/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}