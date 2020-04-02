import React, {Component} from 'react'
import './cadCurso.css'
import Navbar from '../../home/navbar/navbar'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import api from '../../../services/api'


export default class CreateCurso extends Component {

    state={
        name:'',
        module_id:this.props.match.params.id,
        description:'',
        hours:0,
        price:'',
        file:'',
        book:'',
        assistance:'',
        highlight:false,

        msg:''
    }

     submitCourse = async e =>{
        var data = new FormData();

        data.append("file",this.state.file,this.state.file.name);
        data.append("name",this.state.name);
        data.append("module_id",this.state.module_id);
        data.append("description",this.state.description);
        data.append("hours",this.state.hours);
        data.append("price",this.state.price);
        data.append("book",this.state.book);
        data.append("assistance",this.state.assistance);
        data.append("highlight",this.state.highlight);

        try{

            await api.post("/courses",data,{headers:{'Content-Type': 'multipart/form-data'}})
            .then(res=>{
                this.setState({name:'',description:'',hours:0,price:'',book:'',assistance:'',highlight:false,file:null,msg:'Curso criado com sucesso'})
                document.getElementById("list").innerHTML = "";
            })
            window.location.reload()
        }catch(err){
            // console.log(err)
            this.setState({msg:'Problema ao criar o curso'})
        }

    }
    
    handleFileSelect(evt) {
        var files = evt.target.files; // FileList object
        
        for (var i = 0, f;f = files[i];  i++) {
            
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
                    <NavLink to={`/module/${this.props.match.params.id}`}><FontAwesomeIcon icon={faArrowLeft} className="seta"/></NavLink>
                    </div>
                    <div className="divTitulo">
                        <h1 className="tituloPagina">Cadastro de Curso</h1>
                        {this.state.msg}
                    </div>
                </div>
                <div className="formularioCurso">
                    <div className="infoBasica">
                        <input type="text" name="nomeCurso" placeholder="Nome do Curso" className="nomeCurso" value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
                        Modulo: {this.state.module_id}
                    </div>
                    <div className="divDescricao">
                        <textarea name="nomeCurso" placeholder="Descrição do Curso" className="descricaoCurso" value={this.state.description} onChange={e=>this.setState({description:e.target.value})}></textarea>
                        <div className="imagem">
                            <label htmlFor='files' id='labelCarregarImagem'>Carregar imagem de capa</label>
                            <input type="file" id="files" name="files[]" onChange={e=>this.handleFileSelect(e)} placeholder="eae filhao" />
                            <output id="list"></output>
                        </div>
                    </div>
                    <div className="quantidadesAulaValor">
                        <input type="number" className="aulasCurso" name="horasCurso" placeholder="Horas" value={this.state.hours} onChange={e=>this.setState({hours:e.target.value})}/>
                        <input type="text" className="valorCurso" name="assistenciaCurso" placeholder="Assistencia" value={this.state.assistance} onChange={e=>this.setState({assistance:e.target.value})}/>
                        <input type="text" className="valorCurso" name="bookCurso" placeholder="Livro" value={this.state.book} onChange={e=>this.setState({book:e.target.value})}/>
                        <input type="text" className="valorCurso" name="valorCurso" placeholder="Valor" value={this.state.price} onChange={e=>this.setState({price:e.target.value})}/>
                    </div>
                    <div>
                        <div>Destaque (Aparece na tela inicial do site) <input type="checkbox" className="valorCurso" name="valorCurso" placeholder="Valor" checked={this.state.highlight} onChange={e=>this.setState({highlight:e.target.checked})}/></div>
                        <button className="submitCurso" onClick={this.submitCourse}>Salvar</button>

                    </div>
                </div>

            </div>
        )
    }
}
export class EditCurso extends Component {

    state={
        name:'',
        module_id:0,
        description:'',
        hours:0,
        price:'',
        file:null,
        book:'',
        assistance:'',
        highlight:false,
        id:0,

        msg:''
    }

    componentDidMount = async ()=>{
        await api.get(`/courses/${this.props.match.params.id}`)
            .then(
                res=>{
                    this.setState({
                        id:res.data.id,
                        name:res.data.name,
                        description:res.data.description,
                        hours:res.data.hours,
                        assistance:res.data.assistance,
                        book:res.data.book,
                        price:res.data.price,
                        module_id:res.data.module_id,
                        highlight:res.data.highlight})
                }
            )
    }

     updateCourse = async e =>{
        var data = new FormData();

        if(this.state.file){data.append("file",this.state.file,this.state.file.name);}
        data.append("id",this.state.id);
        data.append("name",this.state.name);
        data.append("module_id",this.state.module_id);
        data.append("description",this.state.description);
        data.append("hours",this.state.hours);
        data.append("price",this.state.price);
        data.append("book",this.state.book);
        data.append("assistance",this.state.assistance);
        data.append("highlight",this.state.highlight);

        try{

            await api.put("/courses",data,{headers:{'Content-Type': 'multipart/form-data'}})
            .then(res=>{
                // console.log(res)
                this.setState({name:'',description:'',hours:0,price:'',book:'',assistance:'',highlight:false,file:'',msg:'Curso atualizado com sucesso'})
                document.getElementById("list").innerHTML = "";
            })
        }catch(err){
            // console.log(err)
            this.setState({msg:'Problema ao atualizar o curso'})
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
                    <NavLink to={`/module/${this.state.module_id}`}><FontAwesomeIcon icon={faArrowLeft} className="seta"/></NavLink>
                    </div>
                    <div className="divTitulo">
                        <h1 className="tituloPagina">Editar Curso</h1>
                        {this.state.msg}
                    </div>
                </div>
                <div className="formularioCurso">
                    <div className="infoBasica">
                        <input type="text" name="nomeCurso" placeholder="Nome do Curso" className="nomeCurso" value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
                        Modulo: {this.state.module_id}
                    </div>
                    <div className="divDescricao">
                        <textarea name="nomeCurso" placeholder="Descrição do Curso" className="descricaoCurso" value={this.state.description} onChange={e=>this.setState({description:e.target.value})}></textarea>
                        <div className="imagem">
                            <label htmlFor='files' id='labelCarregarImagem'>Carregar imagem de capa</label>
                            <input type="file" id="files" name="files[]" onChange={e=>this.handleFileSelect(e)} placeholder="eae filhao" />
                            <output id="list"></output>
                        </div>
                    </div>
                    <div className="quantidadesAulaValor">
                        <input type="number" className="aulasCurso" name="horasCurso" placeholder="Horas" value={this.state.hours} onChange={e=>this.setState({hours:e.target.value})}/>
                        <input type="text" className="valorCurso" name="assistenciaCurso" placeholder="Assistencia" value={this.state.assistance} onChange={e=>this.setState({assistance:e.target.value})}/>
                        <input type="text" className="valorCurso" name="bookCurso" placeholder="Livro" value={this.state.book} onChange={e=>this.setState({book:e.target.value})}/>
                        <input type="text" className="valorCurso" name="valorCurso" placeholder="Valor" value={this.state.price} onChange={e=>this.setState({price:e.target.value})}/>
                    </div>
                    <div>
                        <div>Destaque (Aparece na tela inicial do site) <input type="checkbox" className="valorCurso" name="valorCurso" placeholder="Valor" checked={this.state.highlight} onChange={e=>this.setState({highlight:e.target.checked})}/></div>
                        <button className="submitCurso" onClick={this.updateCourse}>Salvar</button>

                    </div>
                </div>

            </div>
        )
    }
}
  
