import React from 'react'
import './home.css'
//import {Galery, GaleryImage} from 'react-gesture-gallery'

export default () => {
    return <div id="home" className="principal">
                {/* <img src={require('../../assets/img/fundoHome.png')} alt="Background" className="imagem" /> */}
                <h1 className='titulo'>ORDEM DOS CAVALEIROS DE CRISTO</h1>
                <h2 className='subtitulo'>Venha aprender sobre Teologia Ancestral, Cristianismo Primitivo, Kabbalah e Alquimia</h2>

                <a href="https://wa.me/5514996903532" target='_blank' rel="noopener noreferrer">
                    <img src={require('../../assets/img/wpp.png')} alt="Background" className="whats" />
                </a>
            </div>
    
}