import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import MdArrowBack from 'react-ionicons/lib/MdArrowBack';
import './curso.css';

export class Curso extends Component {
    constructor(props){
        super(props);

        this.state = {
            moduleTitle: "",
            moduleID: 0,
            iframeLink: "",
        }
    }


    render() {
        return (
            <div className="curso-box">
                <Navbar />
                <div className="curso-container">
                    <div className="curso-button-content">
                        <div className="curso-module">
                            <div className="curso-image-header"></div>
                            <h2 className="curso-h2">Estudo Judaico</h2>
                            <p className="curso-module-name">Módulo 1</p>
                        </div>
                        <div className="curso-module-btn-group">
                            <button className="curso-module-btn">Aula 1</button>
                            <button className="curso-module-btn">Aula 2</button>
                            <button className="curso-module-btn">Aula 3</button>
                            <button className="curso-module-btn">Aula 4</button>
                            <button className="curso-module-btn">Aula 5</button>
                            <button className="curso-module-btn">Aula 6</button>
                            <button className="curso-module-span"><MdArrowBack /> Módulos</button>
                        </div>
                    </div>
                    <div className="curso-content">
                        <header className="curso-header-name">
                            <h1 className="curso-title">
                                Estudo Judaico
                                </h1>
                        </header>
                        <iframe title="cursoFrame" className="curso-video" src="https://www.youtube.com/embed/w-IXajuNAP8" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Curso;