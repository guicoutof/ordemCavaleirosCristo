import React, { Component } from 'react';
import './casdastrarArtigoBlog.css';
import Navbar from '../../home/navbar/navbar'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import api from '../../../services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

export default class CadastrarArtigoBlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            text:"",
            file: null,
            msg: "",
        }
    }

    async submitPost(){
        var data = new FormData();

        data.append("file",this.state.file,this.state.file.name);
        data.append("title",this.state.title);
        data.append("text",this.state.text);

        try{

            await api.post("/publications",data,{headers:{'Content-Type': 'multipart/form-data'}})
            .then(res=>{
                this.setState({title:'',text:'',file:null,msg:'Artigo criado com sucesso'})
                document.getElementById("list").innerHTML = "";
            })
        }catch(err){
            // console.log(err)
            this.setState({msg:'Problema ao criar o artigo'})
        }

    }

    handleFileSelect(evt) {
        var files = evt.target.files; // FileList object
        
        for (var i = 0, f; f = files[i]; i++) {
          // Fazendo apenas imagens serem processadas
          if (!f.type.match('image.*')) {
            continue;
          }
    
          var reader = new FileReader();
    
          reader.onload = (function(theFile) {
            return function(e) {
                // renderizando imagem.
                var span = document.createElement('span');
                span.innerHTML = ['<img class="thumb" src="', e.target.result,
                                '" title="', escape(theFile.name), '"/>'].join('');
                document.getElementById("list").innerHTML = ""; //deletando imagem que possa estar no elemento
                document.getElementById('list').insertBefore(span, null);
                
            };
          })(f);
    
          // Lê a imagem como URL
          reader.readAsDataURL(f);
        }
        this.setState({file:files[0]})
    }

    render() {
        return (
            <div className="containerPrincipal">
                <Navbar/>
                <div className="cad-blog-box">

                    <div className="divCabecalhoArtigo">
                        <NavLink to={`/articles`} className="botaoVoltar">
                            <FontAwesomeIcon icon={faArrowLeft} className="seta"/>
                        </NavLink>
                        <h1 className="tituloCadastrarArtigo">Criar Artigo</h1>
                    </div>
                    
                    {this.state.msg}

                    <div className="divTituloArtigo">
                        <label htmlFor="titulo" className="labelTituloArtigo">Título: </label>
                        <input id="titulo" className="inputTituloArtigo" type="text" value={this.state.title} onChange={e=>this.setState({title:e.target.value})}/>
                    </div>

                    <div className="imagem">
                        <label htmlFor='files' id='labelCarregarImagem'>Inserir imagem de capa</label>
                        <input type="file" id="files" name="files[]" onChange={e=>this.handleFileSelect(e)} placeholder="eae filhao" />
                        <output id="list"></output>
                    </div>

                    <div className="divTextoArtigo">
                        <label className="cad-blog-label">Texto do artigo:</label>
                        <CKEditor
                            className="editorArtigo"
                            editor={ ClassicEditor }
                            data={this.state.text}
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                // console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                this.setState({text:data})
                                // console.log( { event, editor, data } );
                            } }
                            onBlur={ ( event, editor ) => {
                                // console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                // console.log( 'Focus.', editor );
                            } }
                        />
                        <button className="botaoSalvarArtigo" onClick={()=>this.submitPost()}>Publicar</button>
                    </div>
                </div>

            </div>
        );
    }
}
export class CadBlogEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            text:"",
            file: null,
            msg: "",
        }
    }

    componentDidMount = async ()=>{
        await api.get(`/publications/${this.props.match.params.id}`)
            .then(
                res=>{
                    this.setState({
                        title:res.data.title,
                        text:res.data.text,
                    })
                }
            )
    }

    async submitPost(){
        var data = new FormData();

        if(this.state.file)data.append("file",this.state.file,this.state.file.name);
        data.append("title",this.state.title);
        data.append("id",this.props.match.params.id);
        data.append("text",this.state.text);

        try{

            await api.put("/publications",data,{headers:{'Content-Type': 'multipart/form-data'}})
            .then(res=>{
                this.setState({title:'',text:'',file:null,msg:'Artigo criado com sucesso'})
                document.getElementById("list").innerHTML = "";
            })
        }catch(err){
            console.log(err)
            this.setState({msg:'Problema ao criar o artigo'})
        }

    }

    handleFileSelect(evt) {
        var files = evt.target.files; // FileList object
        
        for (var i = 0, f; f = files[i]; i++) {
          // Fazendo apenas imagens serem processadas
          if (!f.type.match('image.*')) {
            continue;
          }
    
          var reader = new FileReader();
    
          reader.onload = (function(theFile) {
            return function(e) {
                // renderizando imagem.
                var span = document.createElement('span');
                span.innerHTML = ['<img class="thumb" src="', e.target.result,
                                '" title="', escape(theFile.name), '"/>'].join('');
                document.getElementById("list").innerHTML = ""; //deletando imagem que possa estar no elemento
                document.getElementById('list').insertBefore(span, null);
                
            };
          })(f);
    
          // Lê a imagem como URL
          reader.readAsDataURL(f);
        }
        this.setState({file:files[0]})
    }

    render() {
        return (
            <div className="cad-blog-container">
                <Navbar/>
                <div className="cad-blog-box">
                    <NavLink to={`/articles`}><FontAwesomeIcon icon={faArrowLeft} className="seta"/></NavLink>
                    <h1>Editar Artigo</h1>
                    {this.state.msg}
                    <div className="cad-blog-title-input-container">
                        <label className="cad-blog-label-input">Título: </label>
                        <input id="titulo" className="cad-blog-title-input" type="text" value={this.state.title} onChange={e=>this.setState({title:e.target.value})}/>
                    </div>
                    <div className="imagem">
                        <label htmlFor='files' id='labelCarregarImagem'>Carregar imagem de capa</label>
                        <input type="file" id="files" name="files[]" onChange={e=>this.handleFileSelect(e)} placeholder="eae filhao" />
                        <output id="list"></output>
                    </div>
                    <div className="cad-blog-textarea-container">
                        <label htmlFor="story"  className="cad-blog-label">Escreve abaixo o artigo do blog:</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={this.state.text}
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                // console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                this.setState({text:data})
                                // console.log( { event, editor, data } );
                            } }
                            onBlur={ ( event, editor ) => {
                                // console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                // console.log( 'Focus.', editor );
                            } }
                        />
                        <button className="cad-blog-submit-btn" onClick={()=>this.submitPost()}>Atualizar</button>
                    </div>
                </div>

            </div>
        );
    }
}