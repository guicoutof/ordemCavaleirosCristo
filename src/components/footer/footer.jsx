import React from 'react';
import './footer.css'

// Import de componentes de icones.
import { InstagramIcon } from '../icons/instagram-icon.jsx';
import { WhatsappIcon } from '../icons/whatsapp-icon.jsx';
import { YoutubeIcon } from '../icons/youtube-icon.jsx';
import { EmailIcon } from '../icons/email-icon.jsx';
import { EmailIconSmall } from '../icons/email-icon-small.jsx';
import { FacebookIcon } from '../icons/facebook-icon.jsx';
import { PhoneIcon } from '../icons/phone-icon.jsx';

export default function footer() {
    return (
        <footer className='footerMenu'>
            <div className='footerContainer'>
                <div className='row1'>
                    <ul>
                        <li>CONTATO</li>
                        <li><PhoneIcon />(00)9999-9999</li>
                        <li><EmailIconSmall />email.contato@email.com</li>
                    </ul>
                </div>
                <div className='row2'>
                    <ul className="icon-list">
                        <li>DÚVIDAS ? CONVERSE CONOSCO</li>
                        <li><WhatsappIcon /></li>
                        <li><EmailIcon /></li>
                    </ul>
                </div>
                <div className='row3'>
                    <ul className="icon-list">
                        <li>REDES SOCIAIS</li>
                        <li><InstagramIcon /></li>
                        <li><FacebookIcon /></li>
                        <li><YoutubeIcon /></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}