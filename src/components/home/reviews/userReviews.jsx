import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import './userReviews.css';
import { render } from 'react-dom';
import api from '../../../services/api';


export default class Feedbacks extends Component{
    constructor(){
        super()
        this.state={
            carrosel:0,
            comments:[],
            comment:[]
        }
    }

    async componentDidMount(){
        const response = await api.get('/approvedComments')
        this.setState({comments:response.data})
        this.exibirComentario(0)
    }

    exibirComentario(n){
        this.setState({carrosel:n})
        this.setState(state=>{
            const comment = state.comments.filter((c,i)=>{
                if(i===n)return c;
                else return null;
            })
            return {comment}
        })
    }
    
    render(){
        return (
            <div className="feedback">
            <div className="title">
                <h1>VEJA O QUE NOSSOS ESTUDANTES ACHARAM</h1>
            </div>
            <div className="carousel">
                <li className="pointer" onClick={()=> ((this.state.carrosel-1)>=0)? this.exibirComentario(this.state.carrosel-1) : this.exibirComentario(0) }><FontAwesomeIcon icon={faCaretLeft} size="3x"/></li>
                {this.state.comment.map(c=>
                    <div className="cardCarousel" key={c.id}>
                            {c.status===2?<h3 className="name">{c.user.name}</h3>:<h3 className="name">Usuário Anônimo</h3>}
                            <h4 className="text">{c.content}</h4>
                        </div>
                    )
                }
                
                <li className="pointer" onClick={()=> ((this.state.carrosel+1)<this.state.comments.length)? this.exibirComentario(this.state.carrosel+1) : this.exibirComentario(this.state.carrosel) }><FontAwesomeIcon icon={faCaretRight} size="3x"/></li>
            </div>
            <div className="list">{
                this.state.comments.map((c,i)=>
                i=== this.state.carrosel?
                <li key={i} id="visitedCircle">{<FontAwesomeIcon className="iconCircle" icon={faCircle} onClick={()=> this.exibirComentario(i)} />}</li>
                : 
                <li key={i}>{<FontAwesomeIcon className="iconCircle" icon={faCircle} onClick={()=> this.exibirComentario(i)} />}</li>
                )
            }</div>
        </div>
    );
}
}