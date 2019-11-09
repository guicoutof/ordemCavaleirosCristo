import React from 'react';
import './footer.css'

// Import de componentes de icones.
import MdPhonePortrait from 'react-ionicons/lib/MdPhonePortrait'
import LogoWhatsapp from 'react-ionicons/lib/LogoWhatsapp'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'
import LogoYoutube from 'react-ionicons/lib/LogoYoutube'
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import MdMail from 'react-ionicons/lib/MdMail'

/*
import { InstagramIcon } from '../icons/instagram-icon.jsx';
import { WhatsappIcon } from '../icons/whatsapp-icon.jsx';
import { YoutubeIcon } from '../icons/youtube-icon.jsx';
import { EmailIcon } from '../icons/email-icon.jsx';
import { EmailIconSmall } from '../icons/email-icon-small.jsx';
import { FacebookIcon } from '../icons/facebook-icon.jsx';
import { PhoneIcon } from '../icons/phone-icon.jsx';
*/

/*
export default function footer() {
    return (
        <footer className='footerMenu'>
            <div className="footer-container">
                <div className='row-left'>
                    <li>CONTATO</li>
                    <li><PhoneIcon />(00)9999-9999</li>
                    <li><EmailIconSmall />email.contato@email.com</li>
                </div>
                <div className='row-center'>
                    <li>DÚVIDAS ? CONVERSE CONOSCO</li>
                    <li className="icon-list"><WhatsappIcon /></li>
                    <li className="icon-list"><EmailIcon /></li>
                </div>
                <div className='row-right'>
                    <li>REDES SOCIAIS</li>
                    <li className="icon-list"><InstagramIcon /></li>
                    <li className="icon-list"><FacebookIcon /></li>
                    <li className="icon-list"><YoutubeIcon /></li>
                </div>
            </div>
        </footer>
    );
}
*/

export default function footer() {
    return (
        <footer className='footerMenu'>
            <div className="footer-container">
                <div className='row-left'>
                    <li>CONTATO</li>
                    <li><MdPhonePortrait className="icon-list icon2" color="#000000" />(00)0000-0000</li>
                    <li><MdMail className="icon-list icon2" color="#000000" />email_contato@email.com</li>
                </div>
                <div className='row-center'>
                    <li>DÚVIDAS ? CONVERSE CONOSCO</li>
                    <li className="footer-nav"><LogoWhatsapp className="icon-list icon" color="#000000" /></li>
                    <li className="footer-nav"><MdMail className="icon-list icon" color="#000000" /></li>
                </div>
                <div className='row-right'>
                    <li>REDES SOCIAIS</li>
                    <li className="footer-nav"><LogoFacebook className="icon-list icon" color="#000000" /></li>
                    <li className="footer-nav"><LogoInstagram className="icon-list icon" color="#000000" /></li>
                    <li className="footer-nav"><LogoYoutube className="icon-list icon" color="#000000" /></li>
                </div>
            </div>
        </footer>
    );
}