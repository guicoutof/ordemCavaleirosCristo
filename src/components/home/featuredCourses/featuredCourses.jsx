import React, {Component} from 'react'

import './featuredCourses.css'

export default class FeaturedCourses extends Component{
    constructor(props){
        super(props)
        this.state={
            countCard:0,
            cards:[]
        }
    }
    componentDidMount(){
        this.setState(()=>{
            const cards = this.props.cards.filter((c,i)=>{
                if(i===this.state.countCard || i===(this.state.countCard+1) || i===(this.state.countCard+2))return c;
                else return null;
            })
            return {cards}
        })
    }
    render(){

        return(
        <div className="fCourses">
        <div className="title">
        <h1>CURSOS</h1>
        </div>
        <div className="cards"> 

        {
                this.state.cards.map((c)=>
                    <div key={c.id} className="card">
                            <img className="image" src={c.url} alt={c.name}/>
                            <h3 className="title">{c.name}</h3>
                            <li className="btn">DETALHES</li>
                        </div>
                    )
                } 
            </div>
            <div className="list">{
                this.props.cards.map((c,i)=>
                (i%3)===0 && i!== this.state.countCard?
                <li key={i} onClick={()=> this.setState({countCard:(i/3)*3})}>{(i/3)+1}</li>
                : (i%3)===0?
                <li id="visited" key={i} onClick={()=> this.setState({countCard:(i/3)*3})}>{(i/3)+1}</li>
                :<div key={i}></div>
                )
            }</div>
        </div>
        )
    }
}