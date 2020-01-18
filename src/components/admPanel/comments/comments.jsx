import React, {Component} from 'react'
import './comments.css'
import api from '../../../services/api'
export default class Comments extends Component{
    constructor(){
        super()
        this.state={
            comments:[],
            id:0
        }
    }
    async componentDidMount(){
        const response = await api.get('/comments')
        this.setState({comments:response.data})
    }

    async approve(id,approved){
        await api.post(`/approveComment/${id}`,{approved})
        window.location.reload()
    }


    render(){
        return(
            <div>
                <div>
                    COMENTÁRIOS
                </div>
                {
                    this.state.comments.map(coment=>
                        <div key={coment.id}>
                            <div>Nome: {coment.status?coment.status===2?<div>{coment.user.name}</div>:<div>Anonimo</div>:<div>{coment.user.name}</div>}</div>
                            <div>Comentário: {coment.content}</div>
                            {coment.status?(!coment.approved)?<button onClick={()=>this.approve(coment.id,true)}>Publicar na pagina Inicial</button>:<button onClick={()=>this.approve(coment.id,false)}>Retirar da pagina Inicial</button>:<div></div>}
                        </div>
                    )
                }
            </div>
        )
    }



}