import React, { Component } from 'react';
import MdArrowBack from 'react-ionicons/lib/MdArrowBack';
import './curso.css';

export class Curso extends Component {
    constructor(props){
        super(props);

        this.state = {
            courseID: 0,
            moduleTitle: "Estudo Judaico",
            moduleID: 0,
            courseTitle: "Teste",
            classes: ["Aula ","Aula ","Aula ","Aula ","Aula ","Aula ",],
            iframeLink: "https://www.youtube.com/embed/w-IXajuNAP8",
        }
    }

    render() {
        return (
            <div className="curso-box">
                <div key={this.state.courseID} className="curso-container">
                    <div className="curso-button-content">
                        <div className="curso-module">
                            <div className="curso-image-header"></div>
                            <h2 className="curso-h2">{ this.state.courseTitle }</h2>
                            <p className="curso-module-name">{this.state.moduleTitle}</p>
                        </div>
                        <div className="curso-module-btn-group">
                            {this.state.classes.map((element, index)=>
                                <button key={index} className="curso-module-btn">{element + index}</button>
                            )}
                            <button className="curso-module-span">Módulos</button>
                        </div>
                    </div>
                    <div className="curso-content">
                        <header className="curso-header-name">
                            <h1 className="curso-title">
                                { this.state.courseTitle }
                            </h1>
                        </header>
                        <iframe title="cursoFrame" className="curso-video" src="https://www.youtube.com/embed/w-IXajuNAP8" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default Curso;