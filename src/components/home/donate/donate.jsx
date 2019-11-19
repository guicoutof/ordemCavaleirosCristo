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
            <div className="simbol">

            </div>
            </div>

        </div>
    
    
    )
}