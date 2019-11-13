import React from 'react'
import './home.css'
//import {Galery, GaleryImage} from 'react-gesture-gallery'

export default (props) => {
    return <div id="home" className="principal">
                <div className="conteudo">
                    <div className="divLogo">
                        <img src={require('../../assets/img/logo.png')} alt="" className="imagemLogo"/>
                    </div>

                    <div className="titulo">
                        <h1>{props.titulo}</h1>
                        <div className="subtitulo">
                            <h4>{props.subtitulo}</h4>
                        </div>
                    </div>
                </div>
            </div>
    
}