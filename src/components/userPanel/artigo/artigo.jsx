import React from 'react';
import './artigo.css'
import Modal from 'react-modal';

export default function artigo(props) {
    const title = props.title;
    const url = props.url;
    const text = props.text;
    return(
        <Modal className="modalArtigo" isOpen={props.open} onRequestClose={props.handleClose} ariaHideApp={false} >
            <div className="divArtigo">
                <h1>{title}</h1>       
                <img className="art0" src={url} alt={title} />
                <div className="divTexto" dangerouslySetInnerHTML={{__html: text}}></div>
            </div>
        </Modal>
    ) 
}