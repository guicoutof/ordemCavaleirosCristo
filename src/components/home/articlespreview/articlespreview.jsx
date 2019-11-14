import React from 'react'
import './articlespreview.css'


export default (props) => {
    return(
        
        <div className="mainToBackGND">
            <div className="articleTitle"> 
                <h1 className="Titlee">{props.title}</h1> 
            </div>
            <div className="articleContent">
                <p className="Text">{props.text}</p>
            </div>
            <div className="Ref">
                <p className="refText">{props.references}</p>
            </div>
            <button>VER MAIS</button>
        </div>
    
    
    )
}