import React,{Component} from 'react'
import './articlespreview.css'
import api from '../../../services/api'


export default class ArticlesPreview extends Component{
    constructor(){
        super()
        this.state={
            publication:{}
        }
    }
    componentDidMount = async ()=>{
        await api.get("/publications")
            .then(
                res=>{
                    this.setState({publication:res.data[0]})
                }
            )
        
    }
    render(){
        return(
        <div>
            {
                this.state.publication?
                <div className="mainToBackGND">
                        <div className="articleTitle">
                            <h1 className="Titlee">{this.state.publication.title}</h1> 
                        </div>
                        <div className="articleContent">
                            {/* <p className="Text">{this.state.publication.text}</p> */}
                            <div dangerouslySetInnerHTML={{__html: this.state.publication.text}}></div>
                        </div>
                        {/* <div className="Ref">
                            <p className="refText">{this.state.references}</p>
                        </div> */}
                        {/* <button onClick={()=>alert('Faça login para ver mais')}>VER MAIS</button> */}
                    </div>
                :<div></div>
            }
        </div>
        )
    }
}