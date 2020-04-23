import React, { Component } from 'react';
import './curso.css';
import api from '../../../services/api'
import {getInfo} from '../../../services/auth'
import { NavLink, withRouter } from 'react-router-dom'
export class Curso extends Component {
    constructor(){
        super()
        this.state = {
    
            classDescription:'',
            className:'',
            iframeLink: "",
    
            course:{},
            class:[],
    
            content:'',
            status:2
        }
    }
    
    
    componentDidMount = async ()=>{
            await api.get(`/classes/course/${this.props.match.params.id}`)
                .then(
                    res=>{
                        if(res.data.length>0)this.setState({
                            class:res.data,
                            course:res.data[0].course,
                            className:res.data[0].name,
                            classDescription:res.data[0].description,
                            iframeLink:res.data[0].link.replace("watch?v=","embed/")
                        })
                    }
                )

    }
    changeFrame(c){
        this.setState({className:c.name,iframeLink:c.link.replace("watch?v=","embed/"),classDescription:c.description})
    }

    async submitComment(){
        const {content,status} = this.state
        const course_id=this.state.course.id
        const user_id = getInfo().id
        await api.post('comments',{content,status,user_id,course_id})
        this.setState({content:''})
    }

    render() {
        return (
            <div className="curso-box">
                <div key={this.state.courseID} className="curso-container">
                    <div className="curso-button-content">
                        <div className="curso-module">
                            <img className="curso-img" src={this.state.course.url} alt={this.state.course.name}/>
                            <h2 className="curso-h2">{ this.state.course.name }</h2>
                            <p className="curso-module-name">{this.state.course.description}</p>
                        </div>
                        <div className="curso-module-btn-group">
                            {this.state.class.map((c, i)=>
                                <button key={i} className="curso-module-btn" onClick={()=>this.changeFrame(c)}>{c.name}</button>
                            )}
                            <NavLink to="/biblioteca" ><button className="curso-module-span" >Voltar</button></NavLink>
                        </div>
                        <div className="curso-comentario">
                            <div className="textAreaCurso">
                                <select className="selectTipoUsuario" value={this.state.status}onChange={e=>this.setState({status:e.target.value})}>
                                    <option value={2}>Exibir meu comentário na página inicial</option>
                                    <option value={1}>Exibir meu comentário como anônimo</option>
                                    <option value={0}>Não exibir na página inicial</option>
                                </select>
                                <textarea className="textAreaCurso" value={this.state.content} onChange={e=>this.setState({content:e.target.value})} />
                            </div>
                            <div>
                                <button className="botaoUpgradeInfoConta" onClick={()=>this.submitComment()}>Enviar</button>
                            </div>
                        </div>
                    </div>
                    <div className="curso-content">
                        <header className="curso-header-name">
                            <h1 className="curso-title">
                                { this.state.className }
                            </h1>
                        </header>
                        <iframe title="cursoFrame" className="curso-video" src={this.state.iframeLink} frameBorder="0" allowFullScreen />
                        <div className="descriptionCurso">
                            {this.state.classDescription}
                        </div>
                    </div>
                </div>  
                

            </div>
        );
    }
}
export default withRouter(Curso);