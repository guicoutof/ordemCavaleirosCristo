import React, {Component} from 'react'
import './panelCurso.css'
import api from '../../../services/api'
import Navbar from '../../home/navbar/navbar'
import { NavLink } from 'react-router-dom'

export default class panelCurso extends Component{
    state={
        courses:[],
    }

    componentDidMount = async ()=>{
        const params = {
            page:1
        }
        await api.get(`/courses/module/${this.props.match.params.id}`,{params})
            .then(
                res=>{console.log(res)
                    this.setState({courses:res.data})
                }
            )
    }
    
    render(){
        return(
            <div className="principalCursos">
            <Navbar/>
            <div className="containerCURSO">
                <div className="headerCursos">
                    <NavLink to={`/module/${this.props.match.params.id}/create`}><button className="botaoCriarCurso">Novo Curso</button></NavLink>
                        <h2 className="nomeCurso">Modulo {this.props.match.params.id}</h2>
                    <input className="pesquisarCurso" placeholder='Nome do Curso' type="text"/>
                </div>

                <div className="tabelaCursos">
                    {
                        this.state.courses.map(course=>
                            <div key={course.id} className="divCursos">
                                <div className="infoCurso">
                                    <img src={course.url} alt={course.path}className="imgCurso"/>
                                    <div className="infoTexto">
                                        <h5 className="nomeCurso">{course.name}</h5>
                                        <p className="descricaoCurso">{course.description}</p>
                                        <p className="descricaoCurso">{course.hours}</p>
                                        <p className="descricaoCurso">{course.assistance}</p>
                                        <p className="descricaoCurso">{course.highlight}</p>
                                        <p className="descricaoCurso">{course.id}</p>
                                        <p className="descricaoCurso">{course.module_id}</p>
                                    </div>
                                </div>
                                <h4 className="precoCurso">{course.price}</h4>
                                <div className="botoesCurso">
                                    <NavLink to={`/course/${course.id}`}><button className="botaoEditarCurso">Abrir</button></NavLink>
                                    <button className="botaoEditarCurso">Editar</button>
                                    <button className="botaoRemoverCurso">Remover</button>
                                </div>
                            </div>
                        )    
                    }
                    <NavLink to={`/modules`}><button>Voltar</button></NavLink>
                </div>
                
            </div>
        </div>
        )
    }
}