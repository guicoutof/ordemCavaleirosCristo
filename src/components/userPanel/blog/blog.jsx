import React, {Component} from 'react'
import './blog.css'
import api from '../../../services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';



export default class Blog extends Component{
    constructor(){
        super()
        this.state={
            posts:[],
            pages:1,
            limite:false,
            loading:true
        }
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

    render(){
        return(
        <div>
            {this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                :this.state.posts.map(post=>
                <div key={post.id}>
                    <img className="art0" src={post.url} alt={post.title} />
                    <h1 className="artname0">{post.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: post.text}}></div>
                </div>
                )
            }
            <div>
                {this.state.page>1?<button onClick={()=>this.exibirCursos(this.state.page-1)}>Pagina Anterior</button>:<div></div>}
                {!this.state.limite?<button onClick={()=>this.exibirCursos(this.state.page+1)}>Proxima Pagina</button>:<div></div>}
            </div>
        </div>
        )
    }
}
