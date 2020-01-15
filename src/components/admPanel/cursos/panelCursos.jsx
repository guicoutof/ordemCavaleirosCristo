import React, {Component} from 'react'
import './panelCurso.css'
import api from '../../../services/api'
import Navbar from '../../home/navbar/navbar'
import { NavLink } from 'react-router-dom'
import Confirm from '../confirm/confirm'

export default class panelCurso extends Component{
    constructor(){
        super()
        this.state={
            courses:[],
            modalC:false,
            id:0
        }
        
        this.close = this.close.bind(this)
        this.confirm = this.confirm.bind(this)
    }

    componentDidMount = async ()=>{
        const params = {
            page:1
        }
        await api.get(`/courses/module/${this.props.match.params.id}`,{params})
            .then(
                res=>{
                    this.setState({courses:res.data})
                }
            )
    }
    
    close(){
        this.setState({modalC:false})
    }

    async confirm(){
        this.setState({modalC:false})
        await api.delete(`/courses/${this.state.id}`)
        window.location.reload();
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

                <Confirm open={this.state.modalC}  title={'Deseja realmente excluir este curso?'} close={this.close} confirm={this.confirm}/> 
                <div className="tabelaCursos">
                    {
                        this.state.courses.map(course=>
                            <div key={course.id} className="divCursos">
                                <div className="infoCurso">
                                    <img src={course.url} alt={course.path}className="imgCurso"/>
                                    <div className="infoTexto">
                                        <h5 className="nomeCurso">{course.name}</h5>
                                        {/* <p className="descricaoCurso">{course.id}</p> */}
                                        {/* <p className="descricaoCurso">{course.module_id}</p> */}
                                        <p className="descricaoCurso">{course.description}</p>
                                        <p className="descricaoCurso">{course.hours}</p>
                                        <p className="descricaoCurso">{course.assistance}</p>
                                        <p className="descricaoCurso">{course.book}</p>
                                        <p className="descricaoCurso">{course.highlight?'Destaque':'Sem destaque'}</p>
                                    </div>
                                </div>
                                <h4 className="precoCurso">{course.price}</h4>
                                <div className="botoesCurso">
                                    <NavLink to={`/course/${course.id}`}><button className="botaoEditarCurso">Abrir</button></NavLink>
                                    <NavLink to={`/course/${course.id}/edit`}><button className="botaoEditarCurso">Editar</button></NavLink>
                                    <button className="botaoRemoverCurso" onClick={()=>this.setState({modalC:true,id:course.id})}>Remover</button>
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