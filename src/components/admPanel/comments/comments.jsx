import React, {Component} from 'react'
import './comments.css'
import api from '../../../services/api'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash, faTrashAlt} from '@fortawesome/free-solid-svg-icons';


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
            <div className="containerComments">
                <h2 align="center">
                    COMENTÁRIOS
                </h2>
                <div>
                {
                    this.state.comments.map(coment=>
                        <div className="comments infoComments"key={coment.id}>
                            <div>
                                <div><strong>Nome:</strong> {coment.status?coment.status===2?<div className="inline">{coment.user.name}</div>:<div  className="inline">Anonimo</div>:<div  className="inline">{coment.user.name}</div>}</div>
                                <div><strong>Comentário:</strong> {coment.content}</div>
                            </div>
                            <div className="btnComments">
                                {coment.status?(!coment.approved)?
                                <button className="publicar" onClick={()=>this.approve(coment.id,true)}>
                                    <FontAwesomeIcon className="icon" icon={faEye} size="3x"/>
                                </button>:
                                <button className="remover" onClick={()=>this.approve(coment.id,false)}>
                                    <FontAwesomeIcon className="icon" icon={faEyeSlash} size="3x"/>
                                </button>:<div></div>}
                                <button className="excluir">
                                    <FontAwesomeIcon className="icon" icon={faTrashAlt} size="3x"/>
                                </button>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }



}