import React, {Component} from 'react'
import './library.css'
import { NavLink } from 'react-router-dom'
import api from '../../../services/api'
import {getInfo} from '../../../services/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';

export default class Library extends Component{
    constructor(){
        super()
        this.state={
            courses:[],
            page:1,
            limite:false,
            loading:true,
            msg:'',

            content:'',
            status:2
        }

    }
    
    async componentDidMount(){
        this.exibirCursos(1)
    }

    async exibirCursos(id){
        this.setState({loading:true})
        const params = {
            page:id,
        }
        await api.get(`/student_courses/${getInfo().id}`,{params})
        .then(res=>{
            res.data.length<3?this.setState({courses:res.data,page:id,limite:true,loading:false}):this.setState({courses:res.data,page:id,limite:false,loading:false})
        })

    }

    async submitComment(){
        const {content,status} = this.state
        // const course_id = this.state.course.id
        const user_id = getInfo().id
        const response = await api.post('comments',{content,status,user_id})
        this.setState({content:''})
    }

    async upgradeModule(){
        let id = getInfo().module
        const response = await api.get('/modules');
        id  = response.data[id-1].module.id;

        response = await api.get(`/modules/${id}`)
        const qtd_course_modulo = response.data.module.courses_quantity
        const courses_user = this.state.courses.filter(courses=>{
            if(courses.course.module_id === id)return courses
            else return null
        })
        if(qtd_course_modulo===courses_user.length){
            const email = getInfo().email
            const name = getInfo().name
            const type = getInfo().type
            await api.put('/users',{email,name,type,module:(id+1)})
            this.setState({msg:`Parabens, agora você esta no modulo ${id+1}, por favor, relogue para atualizar suas informações`})
        }
        else this.setState({msg:'É necessário o conhecimento de todos os cursos do modulo atual para prosseguir ao próximo'})

    }
    render(){
        return(
        <div className="courses">
            <div className='title'>
                <h1>MEUS CURSOS</h1>
            </div>
            <button className="botaoVoltarCursos alignModule" onClick={()=>this.upgradeModule()}>Subir de Modulo</button>
            {this.state.msg}
            <div className="cards">
                {
                    // getInfo().type===2?
                    <div className="curso-comentario">
                        <h3>Caro aluno e amigo, deixe aqui uma mensagem para nós !</h3>
                        <div className="textAreaCurso">
                            <select className="selectTipoUsuario" value={this.state.status}onChange={e=>this.setState({status:e.target.value})}>
                                <option value={2}>Exibir meu comentário na página inicial</option>
                                <option value={1}>Exibir meu comentário como anônimo</option>
                                <option value={0}>Não exibir na página inicial</option>
                            </select>
                            <textarea rows="5" className="textAreaCurso" value={this.state.content} onChange={e=>this.setState({content:e.target.value})} />
                        </div>
                        <div>
                            <button className="botaoUpgradeInfoConta" onClick={()=>this.submitComment()}>Enviar</button>
                        </div>
                    </div>
                    // :<div></div>
                }
                {this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                :this.state.courses.map((c)=>
                    <div key={c.id} className="cardLibrary">
                        <img className="imagemCurso" src={c.course.url} alt={`Curso ${c.id}`} />
                        {<div className="module"><strong>Modulo {c.course.module_id}</strong></div>}
                        <div className="title" ><strong>{c.course.name}</strong></div>
                        <appr title={c.course.description}><div className="divInfoCurso">{cortar(c.course.description)}</div></appr>
                        <div>
                            <div className="divInfoCurso">Duração: {c.course.hours} horas</div>
                            <div className="divInfoCurso">Assistencia: {c.course.assistance}</div>
                        </div>
                        <div className="divInfoCurso">Livro: <a href={c.course.book}>{c.course.book}</a></div>
                        <div className="bottom">
                            <NavLink to={`/curso/${c.course.id}`}><button className="btnLibrary">Abrir</button></NavLink>
                        </div>
                    </div>
                )}
                <div>
                    {this.state.page>1?<button className="botaoVoltarCursos" onClick={()=>this.exibirCursos(this.state.page-1)}>Pagina Anterior</button>:<div></div>}
                    {!this.state.limite?<button className="botaoVoltarCursos" onClick={()=>this.exibirCursos(this.state.page+1)}>Proxima Pagina</button>:<div></div>}
                </div>
            </div>
        </div>
        )
    }
}

function cortar(minhaString){
    if (minhaString.length > 40) 
        return minhaString.slice(0, 40)+'...' 
    else return minhaString
}