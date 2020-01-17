import React, {Component} from 'react'
import './library.css'
import { NavLink } from 'react-router-dom'
import api from '../../../services/api'
import {getInfo} from '../../../services/auth'

export default class Library extends Component{
    constructor(){
        super()
        this.state={
            courses:[],
            page:1,
            limite:false
        }
        this.exibirCursos(1)
    }

    // async componentDidMount(){
    //     const params = {
    //         page:this.state.page,
    //     }
    //     await api.get(`/student_courses/${getInfo().id}`,{params})
    //     .then(res=>{
    //         console.log(res.data)
    //         this.setState({courses:res.data})
    //     })
    // }

    async exibirCursos(id){
        const params = {
            page:id,
        }
        await api.get(`/student_courses/${getInfo().id}`,{params})
        .then(res=>{
            res.data.length<3?this.setState({courses:res.data,page:id,limite:true}):this.setState({courses:res.data,page:id,limite:false})
        })

    }

    render(){
        return(
        <div className="courses">
            <div className='title'>
                <h1>MEUS CURSOS</h1>
            </div>
            <div className="cards">
                {this.state.courses.map((c)=>
                    <div key={c.id} className="card">
                        <img src={c.course.url} alt={`Curso ${c.id}`} />
                        {<div className="module">Modulo {c.course.module_id}</div>}
                        <div className="title" >{c.course.name}</div>
                        <div className="desc">{c.course.description}</div>
                        <div>
                            <div>Duração: {c.course.hours} horas</div>
                            <div>Assistencia: {c.course.assistance}</div>
                        </div>
                        <div>Livro {c.book}</div>
                        <div className="bottom">
                            <NavLink to={`/curso/${c.course.id}`}><button className="btn">Abrir</button></NavLink>
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