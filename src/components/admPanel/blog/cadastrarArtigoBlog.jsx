import React, { Component } from 'react';
import './casdastrarArtigoBlog.css';

export class CadastrarArtigoBlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            image: null,
            artigo: "",
            time: "",
            errorMsg: "",
        }
    }

    // Da handle no forms e atualiza o state
    handleFieldChange = event => {
        //const { title, image, artigo, time } = event.target;
    };

    // Handler do submit do forms
    onSubmit(e) {
        // previne de submeter o 'default'
        e.preventDefault();

        if (!this.isFormValid()) {
            this.setState({ errorMsg: "É necessário prencher todos os campos!!!" });
            return;
        }

        // arruma o loading status e seta o error pra vazio depois
        this.setState({ errorMsg: ""});

        let { artigoPost } = this.state;
        fetch("http://localhost:3000/", {
            method: "post",
            body: JSON.stringify(artigoPost)
        })
            .then(res => res.json())
            .then(res => {
                if (res.errorMsg) { // caso tenha mensagem de erro
                    this.setState({ loading: false, error: res.error });
                } else {
                    // add time return from api and push artigoPost to parent state
                    artigoPost.time = res.time;
                    this.props.addartigo(artigoPost);

                    // clear the message box
                    this.setState({
                        artigoPost: { ...artigoPost, artigo: "" }
                    });
                }
            })
            .catch(err => {
                this.setState({
                    error: "Algo deu errado ao tentar enviar o formulario.",
                    loading: false
                });
            });
    }

    // Validando form.
    isFormValid() {
        return this.state.artigoPost.title !== "" && this.state.artigoPost.artigo !== "";
    }

    render() {
        return (
            <div className="cad-blog-container">
                {/* <Navbar/> */}
                <form className="cad-blog-box">
                    <div className="cad-blog-title-input-container">
                        <label className="cad-blog-label-input">Título: </label>
                        <input id="titulo" className="cad-blog-title-input" type="text" />
                    </div>
                    <div className="cad-blog-bgd-container">
                        <label className="cad-blog-label-bgd">Imagem de Capa</label>
                        <div className="cad-blog-image-header">
                            <button className="cad-blog-load-image-btn">Upload</button>
                        </div>
                    </div>
                    <div className="cad-blog-textarea-container">
                        <label htmlFor="story"  className="cad-blog-label">Escreve abaixo o artigo do blog:</label>
                        <textarea id="story" className="cad-blog-textarea" name="story"
                            rows="5" cols="33">
                        </textarea>
                        <button className="cad-blog-submit-btn">Publicar</button>
                    </div>
                </form>
                {/* <Footer/> */}
            </div>
        );
    }
}

export default CadastrarArtigoBlog;