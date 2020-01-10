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
                    <div key={c.id} className="card">
                        <img src={c.url} alt={`Curso ${c.id}`} />
                        {c.module?<div className="module">Modulo {c.module_id}</div>:<div></div>}
                        <div className="title" >{c.name}</div>
                        <div className="desc">{c.description}</div>
                        <div>
                            <div>Duração: {c.hours} horas</div>
                            <div>Assistencia: {c.assistance}</div>
                        </div>
                        {/* <div>Livro {c.book}</div> */}
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
