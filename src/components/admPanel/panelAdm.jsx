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

export default function panelAdm(){
    return(
        <div className='principalADM'>
            <Navbar/>
            <div className='containerADM'>
            <Title titulo={`Bem vindo Administrador`}/>
            {/* <CadastrarArtigoBlog></CadastrarArtigoBlog> */}
            {/* <AdmArtigos/> */}
            {/* <PainelUsuarios /> */}
            {/* <PainelCurso/> */}
            {/* <AdmAulas/> */}
            {/* <Aula></Aula> */}
            </div>
            <Footer />
        </div>
    )
}
export function AdmUser(){
    return(
        <div className='principalADM'>
            <Navbar/>
            <div className='containerADM'>
                <PainelUsuarios/>
            </div>
            <Footer/>
        </div>
    )
}
export function AdmModule(){
    const modulos = []
    return(
        <div className='principalADM'>
            <Navbar/>
            <div className='containerADM'>
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
                }
            </div>
            <Footer/>
        </div>
    )
}
export function AdmService(){
    return(
        <div className='principalADM'>
            <Navbar/>
            <div className='containerADM'>
                <AdmServicos/>
            </div>
            <Footer/>
        </div>
    )
}
export function AdmBlog(){
    return(
        <div className='principalADM'>
            <Navbar/>
            <div className='containerADM'>
                <AdmArtigos/>
            </div>
            <Footer/>
        </div>
    )
}