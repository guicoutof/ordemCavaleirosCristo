import React, {Component} from 'react'
import './blog.css'
import api from '../../../services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import Artigo from '../artigo/artigo'




export default class Blog extends Component{
    constructor(){
        super()
        this.state={
            posts:[],
            pages:1,
            limite:false,
            loading:true,
            modal:false,
            article:{
                title:'',
                url:'',
                text:''
            }
        }

        this.handleClose.bind(this);
    }

    async exibirCursos(id){
        this.setState({loading:true})
        const params = {
            page:id,
        }
        await api.get(`/publications`,{params})
        .then(res=>{
            res.data.length<5?this.setState({posts:res.data,page:id,limite:true,loading:false}):this.setState({posts:res.data,page:id,limite:false,loading:false})
        })
        
    }

    componentDidMount(){
        this.exibirCursos(1)
    }

    handleOpen(article){
        this.setState({modal:true,article:article})
    }

    handleClose(){
        this.setState({modal:false})
    }

    render(){
        return(
        <div className="backimg">
            <div className='contato'>
                <h1 className='contatoTitulo'>BLOG</h1>
            </div>
            <div className="containerbloguser">
                <Artigo open={this.state.modal} handleClose={()=>this.handleClose()}
                    title={this.state.article.title} url={this.state.article.url} text={this.state.article.text}
                    />
                {this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                    :this.state.posts.length>0?
                    this.state.posts.map(post=>
                        <div className="divPostUser" key={post.id} onClick={()=>this.handleOpen(post)}>
                        {/* <h1 className="artname0">{post.title}</h1>        */}
                        <img className="imgPost" src={post.url} alt={post.title} />
                        {/* <div className="divTexto" dangerouslySetInnerHTML={{__html: post.text}}></div> */}
                    </div>
                    ):<h3 className="divPost nback">Ainda não há nenhum artigo</h3>
                }
                <div>
                    {this.state.page>1?<button className="botaoVoltar" onClick={()=>this.exibirCursos(this.state.page-1)}>Pagina Anterior</button>:<div></div>}
                    {!this.state.limite?<button className="botaoVoltar" onClick={()=>this.exibirCursos(this.state.page+1)}>Proxima Pagina</button>:<div></div>}
                </div>
            </div>
        </div>
        )
    }
}
