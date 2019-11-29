import React from 'react'
import './donate.css'


export default (props) => {
    return(
        <div className="backimg">
            <div className="option">
                <h1 className="tit">{props.titulo}</h1>
            </div>
            <div className="Content">
                <div className="introText">
                    <p className="texto">{props.conteudo}</p>
                </div>
                <a className="simbol" href="https://www.mercadopago.com.br" target='_blank' rel="noopener noreferrer">
                    <img src={require('../../../assets/img/mercado-pago-logo.png')} alt="Doação Mercado Pago"/>
                </a>
            </div>

        </div>
    
    
    )
}