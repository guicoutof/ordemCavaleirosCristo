import React from 'react'
import Navbar from '../home/navbar/navbar'
import Footer from '../home/footer/footer'

import './panelCurso.css'

export default function panelCurso (props){
    return(
        <div className="principalCursos">
            {/* <Navbar></Navbar> */}

            <div className="containerCURSO">
                <div className="headerCursos">
                    <button className="botaoCriarCurso">Novo Curso</button>
                    <h2 className="nomeCurso">Nome do Curso</h2>
                    <input className="pesquisarCurso" placeholder='Nome do Curso' type="text"/>
                </div>

                <div className="tabelaCursos">
                    <div className="divCursos">
                        <div className="infoCurso">
                            <img src={require("../../../src/assets/img/soldier.jpg")} className="imgCurso"/>
                            <div className="infoTexto">
                                <h5 className="nomeCurso">ABC do Amor</h5>
                                <p className="descricaoCurso">Principais conselhos e dicas para arrasar na paquera.</p>
                            </div>
                        </div>
                        <h4 className="precoCurso">R$ 0,00</h4>
                        <div className="botoesCurso">
                            <button className="botaoEditarCurso">Editar</button>
                            <button className="botaoRemoverCurso">Remover</button>
                        </div>
                    </div>
                    
                    <div className="divCursos">
                        <div className="infoCurso">
                            <img src={require("../../../src/assets/img/soldier.jpg")} className="imgCurso"/>
                            <div className="infoTexto">
                                <h5 className="nomeCurso">ABC do Amor</h5>
                                <p className="descricaoCurso">Principais conselhos e dicas para arrasar na paquera.</p>
                            </div>
                        </div>
                        <h4 className="precoCurso">R$ 0,00</h4>
                        <div className="botoesCurso">
                            <button className="botaoEditarCurso">Editar</button>
                            <button className="botaoRemoverCurso">Remover</button>
                        </div>
                    </div>
                    <div className="divCursos">
                        <div className="infoCurso">
                            <img src={require("../../../src/assets/img/soldier.jpg")} className="imgCurso"/>
                            <div className="infoTexto">
                                <h5 className="nomeCurso">ABC do Amor</h5>
                                <p className="descricaoCurso">Principais conselhos e dicas para arrasar na paquera.</p>
                            </div>
                        </div>
                        <h4 className="precoCurso">R$ 0,00</h4>
                        <div className="botoesCurso">
                            <button className="botaoEditarCurso">Editar</button>
                            <button className="botaoRemoverCurso">Remover</button>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* <Footer></Footer> */}
        </div>
    )
}