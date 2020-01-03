import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

import './admAulas.css'

export default (props) =>{
    return(
        <div className="principalAulas">
            <div className="containerCURSO">
                <div className="headerCursos">
                    <button className="botaoCriarCurso">Nova Aula</button>  {/*sera editavel*/}
                    <h2 className="nomeCurso">Nome do Curso</h2>
                    <input className="pesquisarCurso" placeholder='Nome da Aula' type="text"/>
                </div>

                <div className="tabelaCursos">
                    <div className="divCursos">
                        <div className="infoCurso">
                            <div className="iconeYoutube">
                                <a className="linkYoutube" target="_blanck" href="http://youtube.com">
                                    <FontAwesomeIcon icon={faYoutube} size="2x"/>
                                </a>
                            </div>
                            <div className="infoTexto">
                                <h5 className="nomeCurso">Nome da Aula</h5>
                                <p className="descricaoCurso">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia minus ab facilis praesentium ratione totam consequatur animi nisi perferendis odio! Obcaecati non earum doloribus quo natus optio iure facilis dignissimos.</p>
                            </div>
                        </div>
                        <div className="duracaoAula">
                            <h3>Duração: 5h</h3>
                        </div>
                        <div className="botoesCurso">
                            <button className="botaoEditarCurso">Editar</button>
                            <button className="botaoRemoverCurso">Remover</button>
                        </div>
                    </div>    
                </div>
                
                <div className="tabelaCursos">
                    <div className="divCursos">
                        <div className="infoCurso">
                            <div className="iconeYoutube">
                                <a className="linkYoutube" href="youtube.com">
                                    <FontAwesomeIcon icon={faYoutube} size="2x"/>
                                </a>
                            </div>
                            <div className="infoTexto">
                                <h5 className="nomeCurso">Nome da Aula</h5>
                                <p className="descricaoCurso">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia minus ab facilis praesentium ratione totam consequatur animi nisi perferendis odio! Obcaecati non earum doloribus quo natus optio iure facilis dignissimos.</p>
                            </div>
                        </div>
                        <div className="duracaoAula">
                            <h3>Duração: 5h</h3>
                        </div>
                        <div className="botoesCurso">
                            <button className="botaoEditarCurso">Editar</button>
                            <button className="botaoRemoverCurso">Remover</button>
                        </div>
                    </div>    
                </div>
                <div className="tabelaCursos">
                    <div className="divCursos">
                        <div className="infoCurso">
                            <div className="iconeYoutube">
                                <a className="linkYoutube" href="youtube.com">
                                    <FontAwesomeIcon icon={faYoutube} size="2x"/>
                                </a>
                            </div>
                            <div className="infoTexto">
                                <h5 className="nomeCurso">Nome da Aula</h5>
                                <p className="descricaoCurso">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia minus ab facilis praesentium ratione totam consequatur animi nisi perferendis odio! Obcaecati non earum doloribus quo natus optio iure facilis dignissimos.</p>
                            </div>
                        </div>
                        <div className="duracaoAula">
                            <h3>Duração: 5h</h3>
                        </div>
                        <div className="botoesCurso">
                            <button className="botaoEditarCurso">Editar</button>
                            <button className="botaoRemoverCurso">Remover</button>
                        </div>
                    </div>    
                </div>
                <div className="tabelaCursos">
                    <div className="divCursos">
                        <div className="infoCurso">
                            <div className="iconeYoutube">
                                <a className="linkYoutube" href="youtube.com">
                                    <FontAwesomeIcon icon={faYoutube} size="2x"/>
                                </a>
                            </div>
                            <div className="infoTexto">
                                <h5 className="nomeCurso">Nome da Aula</h5>
                                <p className="descricaoCurso">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia minus ab facilis praesentium ratione totam consequatur animi nisi perferendis odio! Obcaecati non earum doloribus quo natus optio iure facilis dignissimos.</p>
                            </div>
                        </div>
                        <div className="duracaoAula">
                            <h3>Duração: 5h</h3>
                        </div>
                        <div className="botoesCurso">
                            <button className="botaoEditarCurso">Editar</button>
                            <button className="botaoRemoverCurso">Remover</button>
                        </div>
                    </div>    
                </div>
                <div className="tabelaCursos">
                    <div className="divCursos">
                        <div className="infoCurso">
                            <div className="iconeYoutube">
                                <a className="linkYoutube" href="youtube.com">
                                    <FontAwesomeIcon icon={faYoutube} size="2x"/>
                                </a>
                            </div>
                            <div className="infoTexto">
                                <h5 className="nomeCurso">Nome da Aula</h5>
                                <p className="descricaoCurso">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia minus ab facilis praesentium ratione totam consequatur animi nisi perferendis odio! Obcaecati non earum doloribus quo natus optio iure facilis dignissimos.</p>
                            </div>
                        </div>
                        <div className="duracaoAula">
                            <h3>Duração: 5h</h3>
                        </div>
                        <div className="botoesCurso">
                            <button className="botaoEditarCurso">Editar</button>
                            <button className="botaoRemoverCurso">Remover</button>
                        </div>
                    </div>    
                </div>
                <div className="tabelaCursos">
                    <div className="divCursos">
                        <div className="infoCurso">
                            <div className="iconeYoutube">
                                <a className="linkYoutube" href="youtube.com">
                                    <FontAwesomeIcon icon={faYoutube} size="2x"/>
                                </a>
                            </div>
                            <div className="infoTexto">
                                <h5 className="nomeCurso">Nome da Aula</h5>
                                <p className="descricaoCurso">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia minus ab facilis praesentium ratione totam consequatur animi nisi perferendis odio! Obcaecati non earum doloribus quo natus optio iure facilis dignissimos.</p>
                            </div>
                        </div>
                        <div className="duracaoAula">
                            <h3>Duração: 5h</h3>
                        </div>
                        <div className="botoesCurso">
                            <button className="botaoEditarCurso">Editar</button>
                            <button className="botaoRemoverCurso">Remover</button>
                        </div>
                    </div>    
                </div>
                <div className="tabelaCursos">
                    <div className="divCursos">
                        <div className="infoCurso">
                            <div className="iconeYoutube">
                                <a className="linkYoutube" href="youtube.com">
                                    <FontAwesomeIcon icon={faYoutube} size="2x"/>
                                </a>
                            </div>
                            <div className="infoTexto">
                                <h5 className="nomeCurso">Nome da Aula</h5>
                                <p className="descricaoCurso">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia minus ab facilis praesentium ratione totam consequatur animi nisi perferendis odio! Obcaecati non earum doloribus quo natus optio iure facilis dignissimos.</p>
                            </div>
                        </div>
                        <div className="duracaoAula">
                            <h3>Duração: 5h</h3>
                        </div>
                        <div className="botoesCurso">
                            <button className="botaoEditarCurso">Editar</button>
                            <button className="botaoRemoverCurso">Remover</button>
                        </div>
                    </div>    
                </div>
                
            </div>
        </div>
    )
}