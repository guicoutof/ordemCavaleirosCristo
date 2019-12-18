import React from 'react'
import Navbar from '../home/navbar/navbar'
import Footer from '../home/footer/footer'

import Cursos from './cursos/panelCursos'
import CadastrarArtigoBlog from './blog/cadastrarArtigoBlog';

import './panelAdm.css'

export default (props)=>{
    var modulos = [
        {pk:0,name:'Modulo I',qtd:10},
        {pk:1,name:'Modulo II',qtd:8},
        {pk:2,name:'Modulo III',qtd:5},
    ]

    return(
        <div className='principalADM'>
            <Navbar controle={1}></Navbar>
            <Cursos></Cursos>
            <CadastrarArtigoBlog></CadastrarArtigoBlog>
            {/* <div className='containerADM'>
                {
                modulos.map((modulo) =>
                    <div key={modulo.pk}className='cardModulo'>
                        <h3 className='nomeCurso'>{modulo.name}</h3>
                        <p className='qtdCurso'>Cursos: {modulo.qtd}</p>
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