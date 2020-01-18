import React from 'react'
import './articlespreview.css'


export default function ArticlesPreview(props){
    // const [alert,setAlert] = useState(false);
    return(
        
        <div className="mainToBackGND">
            <div className="articleTitle"> 
                <h1 className="Titlee">{props.publication.title}</h1> 
            </div>
            <div className="articleContent">
                {/* <p className="Text">{props.publication.text}</p> */}
                <div dangerouslySetInnerHTML={{__html: props.publication.text}}></div>
            </div>
            {/* <div className="Ref">
                <p className="refText">{props.references}</p>
            </div> */}
            {/* <button onClick={()=>alert('Faça login para ver mais')}>VER MAIS</button> */}
        </div>
    
    
    )
}