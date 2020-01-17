import React,{Component} from 'react'
import './courses.css'
import api from '../../../services/api'
import {getInfo} from '../../../services/auth'

export default class Courses extends Component{
    constructor(){
        super()
        this.state={
            courses:[]
        }
    }

    componentDidMount = async ()=>{
        const modulo = getInfo().module;
        await api.get(`/courses/module/${modulo}`)
            .then(
                res=>{
                    this.setState({courses:res.data})
                }
            )
    }

    async buyCourse(user_id,course_id){
        console.log(`${user_id} compra ${course_id}`)
        try{
            await api.post(`student_courses`,{user_id,course_id})
            .then(res=>{
                console.log(res)
            })
        }catch(err){
            console.log(err)
            alert('Você já possui este curso')
        }
    }

    render(){
        return(
        <div className="courses">
            <div className='title'>
                <h1>CURSOS</h1>
            </div>
            <div className="cards">
                {this.state.courses.map((c)=>
                    <div key={c.id} className="card">
                        <img className="imagemCurso" src={c.url} alt={`Curso ${c.id}`} />
                        {c.module?<div className="module">Modulo {c.module_id}</div>:<div></div>}
                        <div className="title" >{c.name}</div>
                        <div className="divInfoCurso">{cortar(c.description)}</div>
                        <div>
                            <div className="divInfoCurso">Duração: {c.hours} horas</div>
                            <div className="divInfoCurso">Assistencia: {c.assistance}</div>
                        </div>
                        {/* <div>Livro {c.book}</div> */}
                        <div className="bottom">
                            <div className="price">R$ {c.price}</div>
                            <button className="btn" onClick={()=>this.buyCourse(getInfo().id,c.id)}>Comprar</button>
                        </div>
                    </div>
                )}
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