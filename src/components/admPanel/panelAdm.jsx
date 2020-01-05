import React from 'react'
import Navbar from '../home/navbar/navbar'
import Footer from '../home/footer/footer'
import Title from '../home/title/title'

import Cursos from './cursos/panelCursos'

import Aulas from './admAulas/admAulas'
import CadastrarArtigoBlog from './blog/cadastrarArtigoBlog';
import AdmArtigos from './admarticles/admarticles'
import PainelUsuarios from './users/painelUsuarios'
import PainelCurso from './cursos/panelCursos'
import AdmAulas from './admAulas/admAulas'
import AdmServicos from './admServicos/admServicos'

import './panelAdm.css'

import Curso from './cadCursos/cadCurso'
import Aula from   './cadAula/cadAula'

export default (props)=>{
    
    const nome = "SOKOMO KUDIOMI DADH DAKHDSAD HAKHD AKDWH DUKWA DHAUKWDH AWKUD HAKU"
    return(
        <div className='principalADM'>
            <AdmServicos></AdmServicos>
            {/* <Cursos></Cursos> */}
            {/* <Aulas></Aulas> */}
            {/* <CadastrarArtigoBlog></CadastrarArtigoBlog> */}
            {/* <AdmArtigos/> */}
            {/* <PainelUsuarios /> */}
            {/* <PainelCurso/> */}
            {/* <AdmAulas/> */}
            {/* <Aula></Aula> */}


            <Navbar controle={1}></Navbar>
            <div className='containerADM'>
            <Title titulo={`Bem vindo Administrador`}  subtitulo={nome}/>
                {/* {
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
            } */}
            </div>
            <Footer />
        </div>
    )
}