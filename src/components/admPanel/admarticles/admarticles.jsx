import React, { Component } from 'react'
import './admarticles.css'
import api from '../../../services/api'
import { NavLink } from 'react-router-dom'
import Confirm from '../confirm/confirm'

export default class PanelBlog extends Component {

    constructor() {
        super()
        this.state={
            posts:[],
            modalC:false,
            id:0,
            page:1,
            limite:false,
            search:''
        }

        this.close = this.close.bind(this)
        this.confirm = this.confirm.bind(this)
    }

    async exibirCursos(id){
        const params = {
            page:id,
        }
        await api.get(`/publications`,{params})
        .then(res=>{
            res.data.length<5?this.setState({posts:res.data,page:id,limite:true}):this.setState({posts:res.data,page:id,limite:false})
        })
        
    }

    componentDidMount(){
        this.exibirCursos(1)
    }

    close() {
        this.setState({ modalC: false })
    }

    async confirm() {
        this.setState({ modalC: false })
        await api.delete(`/publications/${this.state.id}`)
        window.location.reload();
    }

    render() {
 
        return (
            <div className="backimg">
                <div className="container1">
                    <div className="containerbuttons">
                        <NavLink to={`/post/create`}><button className="botaoCriarArtigo">Adicionar Artigo</button></NavLink>
                        <input className="search1" placeholder="Pesquisar" value={this.state.search} onChange={e=>this.setState({search:e.target.value})}>
                        </input>
                    </div>
                    <Confirm open={this.state.modalC} title={'Deseja realmente excluir este artigo?'} close={this.close} confirm={this.confirm} />
                    <div className="containerarticles">
                        {
                            this.state.posts.map(post =>
                                <div key={post.id}>
                                    {
                                        post.title.indexOf(this.state.search)!==-1?
                                        <div className="divPost">
                                            <h1 className="artname0">{post.title}</h1>
                                            <img className="art0" src={post.url} alt={post.title} />
                                            <div className="divTexto" dangerouslySetInnerHTML={{ __html: post.text }}></div>
                                            <div className="divBotoesBlog">
                                                <NavLink to={`/post/${post.id}/edit`}><button className="botaoEditarBlog">Editar</button></NavLink>
                                                <button className="botaoRemoverBlog" onClick={() => this.setState({ modalC: true, id: post.id })}>Remover</button>
                                            </div>
                                        </div>
                                    :<div></div>    
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div className="containerbuttons2">
                        {this.state.page>1?<button className='botaoVoltar' onClick={()=>this.exibirCursos(this.state.page-1)}>Página Anterior</button>:<div></div>}
                        {!this.state.limite?<button className='botaoVoltar' onClick={()=>this.exibirCursos(this.state.page+1)}>Próxima Página</button>:<div></div>}
                    </div>
                </div>
            </div>


        )
    }
}