import React, {Component} from 'react'
import './comments.css'
import api from '../../../services/api'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import Confirm from '../confirm/confirm'


export default class Comments extends Component{
    constructor(){
        super()
        this.state={
            comments:[],
            id:0,
            modalC:false
        }
        this.confirm = this.confirm.bind(this)
        this.close = this.close.bind(this)

    }
    async componentDidMount(){
        const response = await api.get('/comments')
        this.setState({comments:response.data})
    }

    async approve(id,approved){
        await api.post(`/approveComment/${id}`,{approved})
        window.location.reload()
    }

    async confirm(){
        const {id} = this.state
        this.setState({modalC:false})
        await api.delete(`/comments/${id}`)
        window.location.reload();
    }
    
    close(){
        this.setState({modalC:false});
    }

    remove(id){
        this.setState({modalC:true,id:id})

    }

    render(){
        return(
            <div className="containerComments">
                <h2 align="center">
                    COMENTÁRIOS
                </h2>
                <div>
                <Confirm open={this.state.modalC}  title={'Deseja realmente excluir este comentário?'} close={this.close} confirm={this.confirm}/> 
                {
                    this.state.comments.map(coment=>
                        <div className="comments infoComments"key={coment.id}>
                            <div>
                                <div><strong>Nome:</strong> {coment.status?coment.status===2?<div className="inline">{coment.user.name}</div>:<div  className="inline">Anonimo</div>:<div  className="inline">{coment.user.name}</div>}</div>
                                <div><strong>Comentário:</strong> {coment.content}</div>
                            </div>
                            <div className="btnComments">
                                {coment.status?(!coment.approved)?
                                <appr title="Publicar na pagina inicial"><button className="publicar" onClick={()=>this.approve(coment.id,true)}>
                                    <FontAwesomeIcon className="icon" icon={faEye} size="2x"/>
                                </button></appr>:
                                <appr title="Retirar da pagina inicial"><button className="remover" onClick={()=>this.approve(coment.id,false)}>
                                    <FontAwesomeIcon className="icon" icon={faEyeSlash} size="2x"/>
                                </button></appr>:<div></div>}
                                <appr title="Excluir comentario"><button onClick={()=>this.remove(coment.id)}className="excluir">
                                    <FontAwesomeIcon className="icon" icon={faTrashAlt} size="2x"/>
                                </button></appr>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }



}