import React from 'react'
import './home.css'
//import {Galery, GaleryImage} from 'react-gesture-gallery'

export default () => {
    return (
        <div className="principal">
            <img src={require('../../assets/img/fundoHome.png')} className="imagem" />
            <h1 className='titulo'>ORDEM DOS CAVALEIROS DE CRISTO</h1>
            <h2 className='subtitulo'>Venha aprender sobre Teologia Ancestral, Cristianismo Primitivo, Kabbalah e Alquimia</h2>
            <h2 className='subtitulo'></h2>
        </div>
    )
}