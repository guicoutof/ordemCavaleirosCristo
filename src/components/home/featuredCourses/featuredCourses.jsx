import React, {useState} from 'react'

import './featuredCourses.css'

export default (props) => {

    const [countCard, setCount] = useState(0);
    let cards = [];
    
    return(
        <div className="fCourses">
            <div className="title">
                <h1>CURSOS</h1>
            </div>
            <div className="cards">
                {
                    cards = props.cards.filter((c,i)=>{
                        if(i===countCard || i===(countCard+1) || i===(countCard+2))return c;
                        else return null;
                    })
                ,
                    cards.map((c)=>
                        <div key={c.id} className="card">
                            <img className="image" src={c.url} alt={c.name}/>
                            <h3 className="title">{c.name}</h3>
                            <li className="btn">DETALHES</li>
                        </div>
                    )
                } 
            </div>
            <div className="list">{
                props.cards.map((c,i)=>
                    (i%3)===0 && i!== countCard?
                        <li key={i} onClick={()=> setCount( (i/3)*3 )}>{(i/3)+1}</li>
                    : (i%3)===0?
                        <li id="visited" key={i} onClick={()=> setCount( (i/3)*3 )}>{(i/3)+1}</li>
                        :<div key={i}></div>
                )
            }</div>
        </div>
    )
}