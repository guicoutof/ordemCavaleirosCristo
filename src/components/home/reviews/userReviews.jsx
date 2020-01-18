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
        }
    }
    // const [carousel, setCarousel] = useState(0);
    // let cards = [];
    async componentDidMount(){
        const response = await api.get('/approvedComments')
        console.log(response.data)
        this.setState({comments:response.data})
    }

    render(){
let cards = []
        return (
            <div className="feedback">
            <div className="title">
                <h1>VEJA O QUE NOSSOS ESTUDANTES ACHARAM</h1>
            </div>
            <div className="carousel">
                <li className="pointer" onClick={()=> this.setState(state=>{
                    let carrosel=0;
                    if((state.carrosel-1)>=0){
                        carrosel=(state.carrosel-1);
                        return{carrosel}
                    }else return {carrosel}
                })}><FontAwesomeIcon icon={faCaretLeft} size="3x"/></li>
                {
                    cards = this.state.comments.filter((c,i)=>{
                        if(i===this.state.carrosel)return c;
                        else return null;
                    })
                    ,
                        cards.map((c)=>
                        <div className="cardCarousel" key={c.id}>
                                <h3 className="name">{c.name}</h3>
                                <h4 className="text">{c.text}</h4>
                            </div>
                        )
                    } 
                <li className="pointer" onClick={()=> this.setState(state=>{
                    let carrosel=state.carrosel
                    if((state.carrosel+1)<state.comments.length){
                        carrosel=carrosel+1;
                        return {carrosel}
                    }else return {carrosel}
                }) }><FontAwesomeIcon icon={faCaretRight} size="3x"/></li>
            </div>
            <div className="list">{
                this.state.comments.map((c,i)=>
                i=== this.state.carrosel?
                <li key={i} id="visitedCircle">{<FontAwesomeIcon className="iconCircle" icon={faCircle} onClick={()=> this.setState({carrosel:i})} />}</li>
                : 
                <li key={i}>{<FontAwesomeIcon className="iconCircle" icon={faCircle} onClick={()=> this.setState({carrosel:i})} />}</li>
                )
            }</div>
        </div>
    );
}
}