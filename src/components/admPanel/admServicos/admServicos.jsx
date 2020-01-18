import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import './admServicos.css'

export default class Services extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    
    
    
    render(){
        return(
        <div className="principalAulas">
            <div className="containerServico">
                <div className="headerServicos">
                    <NavLink to={"/services/create"}><button className="botaoCriarServico">Criar Serviço</button></NavLink>
                    <input className="pesquisarServico" placeholder='Nome da Aula' type="text"/>
                </div>

                <div className="tabelaServicos">
                    <div className="divServicos">
                        <img src={require('../../../assets/img/curso-image-header.jpg')} alt='imagem' className='imgServico'/>
                        <div className="infoServico">
                            <div className="infoTexto">
                                <h5 className="nomeServico">Nome do Serviço</h5>
                                <p className="descricaoServico">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia minus ab facilis praesentium ratione totam consequatur animi nisi perferendis odio! Obcaecati non earum doloribus quo natus optio iure facilis dignissimos.</p>
                            </div>
                        </div>
                        <div className="duracaoAula">
                            <h3>Preço: </h3>
                        </div>
                        <div className="botoesServico">
                            <button className="botaoEditarServico">Editar</button>
                            <button className="botaoRemoverServico">Remover</button>
                        </div>
                    </div>    
                </div>                
            </div>
        </div>
        )
    }
}