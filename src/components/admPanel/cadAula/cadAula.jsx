import React from 'react'
import './cadAula.css'

import Footer from '../../home/footer/footer'
import Navbar from '../../home/navbar/navbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


export default function (props){
    return(
        <div className="divPrincipal">
            <Navbar controle={1}></Navbar>
            <div className="divContainerTitulo">
                <div className="divArrowLeft">
                    <FontAwesomeIcon icon={faArrowLeft} className="seta" onClick={()=>{console.log("Clicou, rapaz!")}}/>
                </div>
                <div className="divTitulo">
                    <h1 className="tituloPagina">Cadastro de Aulas</h1>
                </div>
            </div>
            <div className="divModulo">
                <h3 className="tituloModulo">Curso: props</h3>
            </div>
            <form action="" className="formularioAula">
                <div className="infoBasica">
                    <input type="text" name="nomeAula" placeholder="Nome da Aula" className="nomeAula"/>
                    <input type="text" name="moduloAula" placeholder="Link" className="moduloAula"/>
                </div>
                <div className="divDescricao">
                    <textarea name="nomeAula" placeholder="Descrição da Aula" className="descricaoAula"></textarea>
                </div>
                <div className="divSubmit">
                    <input type="submit" value="Salvar Aula"  className="submitAula"/>
                </div>
            </form>

            <Footer></Footer>
        </div>
    )
}