import React from 'react'
import './cadCurso.css'
import Navbar from '../../home/navbar/navbar'
import Footer from '../../home/footer/footer'

export default () => {
    return(
        <div className="divPrincipal">
            <Navbar controle={1}></Navbar>

            <h1 className="tituloPagina">Cadastro de Curso</h1>
            <form action="" className="formularioCurso">
                <div className="infoBasica">
                    <input type="text" name="nomeCurso" placeholder="Nome do Curso" className="nomeCurso"/>
                    <input type="text" name="moduloCurso" placeholder="Módulo do Curso" className="moduloCurso"/>
                </div>
                <textarea name="nomeCurso" placeholder="Descrição do Curso" className="descricaoCurso"></textarea>

                <div className="quantidadesAulaValor">
                    <input type="text" className="aulasCurso" name="aulasCurso" placeholder="Nº Aulas"/>
                    <input type="text" className="valorCurso" name="valorCurso" placeholder="Valor"/>
                    <input type="submit" value="Salvar Curso"  className="submitCurso"/>
                </div>
            </form>


            <Footer></Footer>
        </div>
    )
}