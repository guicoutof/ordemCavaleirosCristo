import React, {Component} from 'react'

import './featuredCourses.css'
import api from '../../../services/api'

export default class FeaturedCourses extends Component{
    constructor(){
        super()
        this.state={
            countCard:0,
            cards:[],
            cardsExibition:[]
        }
    }
    async exibirCursos(countCard){
        this.setState(()=>{
            const cardsExibition = this.state.cards.filter((c,i)=>{
                if(i===countCard || i===(countCard+1) || i===(countCard+2))return c;
                else return null;
            })
            
            return {cardsExibition,countCard}
        })
    }
    async componentDidMount(){
        await api.get("/modules")
            .then(
                res=>{
                    res.data.map(m=>{
                    m.courses.map(course=>{
                            if(course.highlight)
                                this.setState(state=>{
                                    const cards = [...state.cards,course]

                                    return {cards}
                                })
                            else return null
                            return null
                        });return null
                    });
                    
                }
            )

        this.setState(()=>{
            const cardsExibition = this.state.cards.filter((c,i)=>{
                if(i===this.state.countCard || i===(this.state.countCard+1) || i===(this.state.countCard+2))return c;
                else return null;
            })
            
            return {cardsExibition}
        })
    }

    render(){
        return(
        <div className="fCourses">
            <div className="title">
                <h1>CURSOS</h1>
            </div>
            <div className="cards"> 
            {   this.state.cardsExibition.length>0?
                this.state.cardsExibition.map((c)=>
                    <div key={c.id} className="card">
                        <img className="image" src={c.url} alt={c.name}/>
                        <h3 className="title">{c.name}</h3>
                        <p className="btn"><strong>Assistencia de {c.assistance}</strong></p>
                    </div>
                )
                :<h2>Nenhum curso em destaque</h2>
            } 
            </div>
            <div className="list">
                {
                    this.state.cards.map((c,i)=>
                    (i%3)===0 && i!== this.state.countCard?
                    <li key={i} onClick={()=> this.exibirCursos((i/3)*3)}>{(i/3)+1}</li>
                    : (i%3)===0?
                    <li id="visited" key={i} onClick={()=> this.exibirCursos((i/3)*3)}>{(i/3)+1}</li>
                    :<div key={i}></div>
                    )
                }
            </div>
        </div>
        )
    }
}