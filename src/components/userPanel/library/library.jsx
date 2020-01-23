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
            loading:true
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

    render(){
        return(
        <div className="courses">
            <div className='title'>
                <h1>MEUS CURSOS</h1>
            </div>
            <div className="cards">
                {this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                :this.state.courses.map((c)=>
                    <div key={c.id} className="cardLibrary">
                        <img src={c.course.url} alt={`Curso ${c.id}`} />
                        {<div className="module"><strong>Modulo {c.course.module_id}</strong></div>}
                        <div className="title" ><strong>{c.course.name}</strong></div>
                        <div className="desc">{c.course.description}</div>
                        <div>
                            <div>Duração: {c.course.hours} horas</div>
                            <div>Assistencia: {c.course.assistance}</div>
                        </div>
                        <div>Livro: <a href={c.course.book}>{c.course.book}</a></div>
                        <div className="bottom">
                            <NavLink to={`/curso/${c.course.id}`}><button className="btnLibrary">Abrir</button></NavLink>
                        </div>
                    </div>
                )}
                <div>
                    {this.state.page>1?<button onClick={()=>this.exibirCursos(this.state.page-1)}>Pagina Anterior</button>:<div></div>}
                    {!this.state.limite?<button onClick={()=>this.exibirCursos(this.state.page+1)}>Proxima Pagina</button>:<div></div>}
                </div>
            </div>
        </div>
        )
    }
}