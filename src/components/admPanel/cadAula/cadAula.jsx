import React,{Component} from 'react'
import './cadAula.css'

import Footer from '../../home/footer/footer'
import Navbar from '../../home/navbar/navbar'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import api from '../../../services/api'

export default class CadAulas extends Component{
    state={
        course:'',

        name:'',
        link:'',
        description:'',
        course_id:this.props.match.params.id,
        msg:''

    }
    componentDidMount = async ()=>{
        await api.get(`/courses/${this.props.match.params.id}`)
            .then(
                res=>{
                    this.setState({course:res.data})
                }
            )
    }

    submitClass = async e=>{
        const {name,link,description,course_id} = this.state;
        try{
            await api.post("/classes",{name,link,description,course_id})
            .then(res=>{
                this.setState({name:'',link:'',description:'',msg:'Aula criada com sucesso'})
            }) 

        }catch(err){
            console.log(err)
            this.setState({msg:'Algum erro ocorreu'})
        }
    }

    render(){
        return(
            <div className="divPrincipal">
                <Navbar />
                <div className="divContainerTitulo">
                    <div className="divArrowLeft">
                    <NavLink to={`/course/${this.props.match.params.id}`}><FontAwesomeIcon icon={faArrowLeft} className="seta"/></NavLink>
                    </div>
                    <div className="divTitulo">
                        <h1 className="tituloPagina">Cadastro de Aulas</h1>
                        {this.state.msg}
                    </div>
                </div>
                <div className="divModulo">
                    <h3 className="tituloModulo">Curso: {this.state.course.name}</h3>
                </div>
                <div action="" className="formularioAula">
                    <div className="infoBasica">
                        <input type="text" name="nomeAula" placeholder="Nome da Aula" className="nomeAula" value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
                        <input type="text" name="moduloAula" placeholder="Link" className="moduloAula" value={this.state.link} onChange={e=>this.setState({link:e.target.value})}/>
                    </div>
                    <div className="divDescricao">
                        <textarea name="nomeAula" placeholder="Descrição da Aula" className="descricaoAula" value={this.state.description} onChange={e=>this.setState({description:e.target.value})}></textarea>
                    </div>
                    <div className="divSubmit">
                        <button className="submitAula" onClick={this.submitClass}>Salvar</button>
                    </div>
                </div>

            </div>
        )
    }
}
//Edit
export class CadClassEdit extends Component{
    state={
        course:[],
        class:[],
        id:this.props.match.params.id,
        name:'',
        link:'',
        description:'',
        course_id:this.props.match.params.idClass,
        msg:''
    }
    componentDidMount = async ()=>{
        await api.get(`/classes/${this.props.match.params.id}`)
            .then(
                res=>{
                    this.setState({class:res.data,name:res.data.name,link:res.data.link,description:res.data.description,course:res.data.course})
                }
            )
    }

    updateClass = async e=>{
        const {id,name,link,description,course_id} = this.state;
        try{
            await api.put("/classes",{id,name,link,description,course_id})
            .then(res=>{
                this.setState({msg:'Aula atualizada com sucesso'})
            }) 

        }catch(err){
            console.log(err)
            this.setState({msg:'Algum erro ocorreu'})
        }
    }

    render(){
        return(
            <div className="divPrincipal">
                <Navbar />
                <div className="divContainerTitulo">
                    <div className="divArrowLeft">
                    <NavLink to={`/course/${this.props.match.params.idClass}`}><FontAwesomeIcon icon={faArrowLeft} className="seta"/></NavLink>
                    </div>
                    <div className="divTitulo">
                        {this.state.msg}
                        <h1 className="tituloPagina">Cadastro de Aulas</h1>
                    </div>
                </div>
                <div className="divModulo">
                    <h3 className="tituloModulo">Curso: {this.state.course.name}</h3>
                </div>
                <div action="" className="formularioAula">
                    <div className="infoBasica">
                        <input type="text" name="nomeAula" placeholder="Nome da Aula" className="nomeAula" value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
                        <input type="text" name="moduloAula" placeholder="Link" className="moduloAula" value={this.state.link} onChange={e=>this.setState({link:e.target.value})}/>
                    </div>
                    <div className="divDescricao">
                        <textarea name="nomeAula" placeholder="Descrição da Aula" className="descricaoAula" value={this.state.description} onChange={e=>this.setState({description:e.target.value})}></textarea>
                    </div>
                    <div className="divSubmit">
                        <button className="submitAula" onClick={this.updateClass}>Salvar</button>
                    </div>
                </div>

            </div>
        )
    }
}