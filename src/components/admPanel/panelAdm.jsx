import React from 'react'
import Navbar from '../home/navbar/navbar'
import Footer from '../home/footer/footer'

import './panelAdm.css'

export default (props)=>{
    var modulos = ['la','la', 'la', 'la', 'la']
    return(
        <div className='principalADM'>
            <Navbar controle={1}></Navbar>
            <div className='containerADM'>
                {
                modulos.map((modulo) =>
                    <div className='cardModulo'>
                        <h1 className='nomeCurso'>Nome do Curso</h1>
                        <p className=''>Quantidade de cursos:</p>
                        <br/>
                        <div className="botoes">
                            <button className="abrirModulo">Abrir</button>
                            <button className="removerModulo">Remover</button>
                        </div>
                    </div>
                )
            }</div>
            <Footer></Footer>
        </div>
    )
}