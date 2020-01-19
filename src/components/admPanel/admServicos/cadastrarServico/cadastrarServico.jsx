import React, {Component} from 'react'
import Navbar from '../../../home/navbar/navbar'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import api from '../../../../services/api'

import './cadastrarServico.css'

export default class CreateCurso extends Component {

    state={
        name:'',
        description:'',
        price:'',
        file:'',
        link:'',

        msg:''
    }

     submitCourse = async e =>{
        var data = new FormData();

        data.append("file",this.state.file,this.state.file.name);
        data.append("name",this.state.name);
        data.append("description",this.state.description);
        data.append("price",this.state.price);
        data.append("link",this.state.link);

        try{

            await api.post("/services",data,{headers:{'Content-Type': 'multipart/form-data'}})
            .then(res=>{
                this.setState({name:'',description:'',price:'',link:'',file:'',msg:'Serviço criado com sucesso'})
                document.getElementById("list").innerHTML = "";
            })
        }catch(err){
            // console.log(err)
            this.setState({msg:'Problema ao criar o serviço'})
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

    render(){
        return(
            <div className="divPrincipal">
                <Navbar />
                <div className="divContainerTitulo">
                    <div className="divArrowLeft">
                    <NavLink to={`/services`}><FontAwesomeIcon icon={faArrowLeft} className="seta"/></NavLink>
                    </div>
                    <div className="divTitulo">
                        <h1 className="tituloPagina">Cadastrar Serviço</h1>
                        {this.state.msg}
                    </div>
                </div>
                <div className="formularioCurso">
                    <div className="infoBasicaServico">
                        <input type="text" name="nomeCurso" placeholder="Nome do serviço" className="inputNomeServico" value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
                        <input type="text" name="linkCurso" placeholder="Link do formulário" className="inputFormsServico" value={this.state.link} onChange={e=>this.setState({link:e.target.value})} />
                        <input type="number" name="valorCurso" placeholder="Valor" className="inputValorServico" value={this.state.price} onChange={e=>this.setState({price:e.target.value})}/>
                    </div>
                    <div className="divDescricao">
                        <textarea name="nomeCurso" placeholder="Descrição" className="descricaoServico" value={this.state.description} onChange={e=>this.setState({description:e.target.value})}></textarea>
                        <div className="imagem">
                            <label htmlFor='files' id='labelCarregarImagem'>Carregar imagem de capa</label>
                            <input type="file" id="files" name="files[]" onChange={e=>this.handleFileSelect(e)} placeholder="eae filhao" />
                            <output id="list"></output>
                        </div>
                    </div>
                    <div>
                        <button className="submitCurso" onClick={this.submitCourse}>Salvar</button>
                    </div>
                </div>

            </div>
        )
    }
}
export class EditServico extends Component {

    state={
        name:'',
        description:'',
        price:'',
        file:'',
        link:'',
        msg:''
    }

    componentDidMount = async ()=>{
        await api.get(`/services/${this.props.match.params.id}`)
            .then(
                res=>{
                    this.setState({
                        name:res.data.name,
                        description:res.data.description,
                        link:res.data.link,
                        price:res.data.price,
                    })
                }
            )
    }

    updateService = async e =>{
        var data = new FormData();

        if(this.state.file)data.append("file",this.state.file,this.state.file.name)
        data.append("name",this.state.name);
        data.append("description",this.state.description);
        data.append("price",this.state.price);
        data.append("link",this.state.link);
        data.append("id",this.props.match.params.id);
        console.log(this.state)
        try{

            await api.put("/services",data,{headers:{'Content-Type': 'multipart/form-data'}})
            .then(res=>{
                this.setState({name:'',description:'',price:'',link:'',file:'',msg:'Serviço atualizado com sucesso'})
                document.getElementById("list").innerHTML = "";
            })
        }catch(err){
            this.setState({msg:'Problema ao atualizar o serviço'})
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

    render(){
        return(
            <div className="divPrincipal">
                <Navbar />
                <div className="divContainerTitulo">
                    <div className="divArrowLeft">
                    <NavLink to={`/services`}><FontAwesomeIcon icon={faArrowLeft} className="seta"/></NavLink>
                    </div>
                    <div className="divTitulo">
                        <h1 className="tituloPagina">Cadastrar Serviço</h1>
                        {this.state.msg}
                    </div>
                </div>
                <div className="formularioCurso">
                    <div className="infoBasicaServico">
                        <input type="text" name="nomeCurso" placeholder="Nome do serviço" className="inputNomeServico" value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
                        <input type="text" name="linkCurso" placeholder="Link do formulário" className="inputFormsServico" value={this.state.link} onChange={e=>this.setState({link:e.target.value})} />
                        <input type="number" name="valorCurso" placeholder="Valor" className="inputValorServico" value={this.state.price} onChange={e=>this.setState({price:e.target.value})}/>
                    </div>
                    <div className="divDescricao">
                        <textarea name="nomeCurso" placeholder="Descrição" className="descricaoServico" value={this.state.description} onChange={e=>this.setState({description:e.target.value})}></textarea>
                        <div className="imagem">
                            <label htmlFor='files' id='labelCarregarImagem'>Carregar imagem de capa</label>
                            <input type="file" id="files" name="files[]" onChange={e=>this.handleFileSelect(e)} placeholder="eae filhao" />
                            <output id="list"></output>
                        </div>
                    </div>
                    <div>
                        <button className="submitCurso" onClick={this.updateService}>Salvar</button>
                    </div>
                </div>

            </div>
        )
    }
}
  
