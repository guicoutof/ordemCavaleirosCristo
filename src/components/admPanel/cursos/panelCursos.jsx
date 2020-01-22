import React, {Component} from 'react'
import './panelCurso.css'
import api from '../../../services/api'
import Navbar from '../../home/navbar/navbar'
import { NavLink } from 'react-router-dom'
import Confirm from '../confirm/confirm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';

export default class panelCurso extends Component{
    constructor(){
        super()
        this.state={
            courses:[],
            modalC:false,
            id:0,
            page:1,
            limite:false,
            search:'',
            loading:true
        }
        this.close = this.close.bind(this)
        this.confirm = this.confirm.bind(this)

    }

    async exibirCursos(id){
        this.setState({loading:true})
        const params = {
            page:id,
        }
        await api.get(`/courses/module/${this.props.match.params.id}`,{params})
        .then(res=>{
            res.data.length<3?this.setState({courses:res.data,page:id,limite:true,loading:false}):this.setState({courses:res.data,page:id,limite:false,loading:false})
        })
        
    }

    componentDidMount(){
        this.exibirCursos(1)
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
                    <input className="pesquisarCurso" placeholder='Pesquisar' type="text" value={this.state.search} onChange={e=>this.setState({search:e.target.value})}/>
                </div>

                <Confirm open={this.state.modalC}  title={'Deseja realmente excluir este curso?'} close={this.close} confirm={this.confirm}/> 
                <div className="tabelaCursos">
                    {this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                        :this.state.courses.map(course=>
                            <div key={course.id} >
                                {
                                    course.name.indexOf(this.state.search)!==-1
                                    ||(course.id === +this.state.search)?
                                    <div className="divListaCursos">
                                        <div className="infoCurso">
                                            <img src={course.url} alt={course.path}className="imgCurso"/>
                                            <div className="infoTexto">
                                                <h5 className="nomeCurso">{course.name}</h5>
                                                <p className="descricaoListaCurso"><b>Id:</b> {course.id}</p>
                                                <p className="descricaoListaCurso"><b>Descrição do Curso:</b> {course.description}</p>
                                                <p className="descricaoListaCurso"><b>Horas:</b> {course.hours}</p>
                                                <p className="descricaoListaCurso"><b>Assistência:</b> {course.assistance}</p>
                                                <p className="descricaoListaCurso"><b>Livro:</b> {course.book}</p>
                                                <p className="descricaoListaCurso"><b>Destaque:</b> {course.highlight?'Destaque':'Sem destaque'}</p>
                                            </div>
                                        </div>
                                        <h4 className="precoCurso">Valor: {course.price}</h4>
                                        <div className="botoesCurso">
                                            <NavLink to={`/course/${course.id}`}><button className="botaoAbrirCurso">Abrir</button></NavLink>
                                            <NavLink to={`/course/${course.id}/edit`}><button className="botaoEditarCurso">Editar</button></NavLink>
                                            <button className="botaoRemoverCurso" onClick={()=>this.setState({modalC:true,id:course.id})}>Remover</button>
                                        </div>
                                    </div>
                                    :<div></div>
                                }
                            </div>
                        )    
                    }
                    <div>
                        {this.state.page>1?<button onClick={()=>this.exibirCursos(this.state.page-1)}>Pagina Anterior</button>:<div></div>}
                        {!this.state.limite?<button onClick={()=>this.exibirCursos(this.state.page+1)}>Proxima Pagina</button>:<div></div>}
                    </div>
                    <NavLink to={`/modules`}><button className="botaoVoltar">Voltar</button></NavLink>
                </div>
                
            </div>
        </div>
        )
    }
}

export class CoursePending extends Component{
    constructor(){
        super()
        this.state={
            courses:[],
            search:'',
            loading:true,
            course:{},
            user:{}
        }
    }

    async componentDidMount(){
        const response = await api.get('/student_courses')
        this.setState({courses:response.data,loading:false})
    }

    async aprovar(id){
        await api.put('/student_courses',{id,paid:true})
        window.location.reload()
    }

    render(){
        return(
            <div className="principalCursos">
                <Navbar/>
                <div className="containerCURSO">
                <div className="headerCursos">
                        <h2 className="nomeCurso">Cursos Pendentes</h2>
                    {/* <input className="pesquisarCurso" placeholder='Pesquisar' type="text" value={this.state.search} onChange={e=>this.setState({search:e.target.value})}/> */}
                </div>

                <div className="tabelaCursos">
                    {this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                        :this.state.courses.map(course=>
                            <div key={course.id} >
                                {
                                    <div className="divListaCursos">
                                        <div className="infoCurso">
                                            <div className="infoTexto">
                                                <div>Id do usuário: {course.user_id}</div>
                                                <div>Id do curso: {course.course_id}</div>
                                            </div>
                                        </div>
                                        <div className="botoesCurso">
                                            <button onClick={()=>this.aprovar(course.id)} className="botaoAbrirCurso" >Aprovar</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        )    
                    }
                    <NavLink to={`/modules`}><button className="botaoVoltar">Voltar</button></NavLink>
                </div>
                
            </div>
            </div>
        )
    }

}