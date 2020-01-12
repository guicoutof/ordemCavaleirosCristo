import React, { Component } from 'react';
import MdArrowBack from 'react-ionicons/lib/MdArrowBack';
import './curso.css';
import api from '../../../services/api'
import { NavLink, withRouter } from 'react-router-dom'
export class  Curso extends Component {

    state = {
        courseID: 0,
        moduleTitle: "Estudo Judaico",
        moduleID: 0,
        courseTitle: "Teste",
        classes: ["Aula ","Aula ","Aula ","Aula ","Aula ","Aula ",],

        classDescription:'',
        className:'',
        iframeLink: "https://www.youtube.com/embed/w-IXajuNAP8",

        course:{},
        class:[],
    }
    
    
    componentDidMount = async ()=>{
        await api.get(`/classes/course/${this.props.match.params.id}`)
            .then(
                res=>{
                    console.log(res.data)
                    this.setState({class:res.data,course:res.data[0].course,className:res.data[0].name,classDescription:res.data[0].description})
                }
            )
    }

    changeFrame(c){
        this.setState({className:c.name,iframeLink:c.link,classDescription:c.description})
    }

    render() {
        return (
            <div className="curso-box">
                <div key={this.state.courseID} className="curso-container">
                    <div className="curso-button-content">
                        <div className="curso-module">
                            {/* <div className="curso-image-header"></div> */}
                            <img src={this.state.course.url} alt={this.state.course.name}/>
                            <h2 className="curso-h2">{ this.state.course.name }</h2>
                            <p className="curso-module-name">{this.state.course.description}</p>
                        </div>
                        <div className="curso-module-btn-group">
                            {this.state.class.map((c, i)=>
                                <button key={i} className="curso-module-btn" onClick={()=>this.changeFrame(c)}>{c.name}</button>
                            )}
                            <NavLink to="/biblioteca" ><button className="curso-module-span" >Voltar</button></NavLink>
                        </div>
                    </div>
                    <div className="curso-content">
                        <header className="curso-header-name">
                            <h1 className="curso-title">
                                { this.state.className }
                            </h1>
                        </header>
                        <iframe title="cursoFrame" className="curso-video" src={this.state.iframeLink} frameBorder="0" allowFullScreen />
                        {this.state.classDescription}
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Curso);