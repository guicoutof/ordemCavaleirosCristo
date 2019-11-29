import React from 'react'
import Navbar from '../home/navbar/navbar'
import Footer from '../home/footer/footer'

import Cursos from '../admCursos/panelCursos'

import './panelAdm.css'

export default (props)=>{
    var modulos = ['la','la', 'la']

    return(
        <div className='principalADM'>
            <Navbar controle={1}></Navbar>
            <Cursos></Cursos>
            {/* <div className='containerADM'>
                {
                modulos.map((modulo) =>
                    <div className='cardModulo'>
                        <h3 className='nomeCurso'>Nome do Curso</h3>
                        <p className='qtdCurso'>Cursos:</p>
                        <div className="botoes">
                            <button className="abrirModulo">Abrir</button>
                            <button className="removerModulo">Remover</button>
                        </div>
                    </div>
                )
            }</div> */}
            <Footer></Footer>
        </div>
    )
}