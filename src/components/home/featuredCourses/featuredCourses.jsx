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
                    cards = props.cards.filter((c)=>{
                        if(c.pk===countCard || c.pk===(countCard+1) || c.pk===(countCard+2))return c;
                        else return null;
                    })
                ,
                    cards.map((c)=>
                        <div key={c.pk} className="card">
                            <img className="image" src={c.image} alt="imagem"/>
                            <h3 className="title">{c.title}</h3>
                            <li className="btn">DETALHES</li>
                        </div>
                    )
                } 
            </div>
            <div className="list">{
                props.cards.map((c)=>
                    (c.pk%3)===0 && c.pk!== countCard?
                        <li key={c.pk} onClick={()=> setCount( (c.pk/3)*3 )}>{(c.pk/3)+1}</li>
                    : (c.pk%3)===0?
                        <li id="visited" key={c.pk} onClick={()=> setCount( (c.pk/3)*3 )}>{(c.pk/3)+1}</li>
                        :<div key={c.pk}></div>
                )
            }</div>
        </div>
    )
}