import React from 'react'
import './courses.css'

export default function courses(props){
    return(
        <div className="courses">
            <div className='title'>
                <h1>{props.title}</h1>
            </div>
            <div className="cards">
                {props.courses.map((c)=>
                    <div key={c.pk} className="card">
                        <img src={c.image} alt={`Curso ${c.pk}`} />
                        {c.module?<div className="module">Modulo {c.module}</div>:<div></div>}
                        <div className="title" >{c.title}</div>
                        <div className="desc">{c.desc}</div>
                        <div className="bottom">
                            <div className="price">R$ {c.price}</div>
                            <button className="btn">Comprar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
