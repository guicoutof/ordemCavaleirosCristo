import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import api from '../../../services/api'
import Narbar from '../../home/navbar/navbar'

import './admAulas.css'

export default class AdmClass extends Component{
    state={
        classes:[{course:{name:''}}]
    }

    componentDidMount = async ()=>{
        await api.get(`/classes/${this.props.match.params.id}`)
            .then(
                res=>{
                    typeof res.data === "object"?this.setState({classes:[res.data]}):this.setState({classes:res.data})
                }
            )
    }

    render(){

        return(
            <div className="principalAulas">
                <Narbar />
            <div className="containerCURSO">
                <div className="headerCursos">
                    <button className="botaoCriarCurso">Nova Aula</button>  {/*sera editavel*/}
                    <h2 className="nomeCurso">{this.state.classes[0].course.name}</h2>
                    <input className="pesquisarCurso" placeholder='Pesquisar' type="text"/>
                </div>
            {
                this.state.classes.map((c)=>
                    <div key={c.id} className="tabelaCursos">
                        <div className="divCursos">
                            <div className="infoCurso">
                                <div className="iconeYoutube">
                                    <a className="linkYoutube" target="_blanck" href={c.link}>
                                        <FontAwesomeIcon icon={faYoutube} size="2x"/>
                                    </a>
                                </div>
                                <div className="infoTexto">
                                    <h5 className="nomeCurso">{c.name}</h5>
                                    <p className="descricaoCurso">{c.description}</p>
                                </div>
                            </div>
                            <div className="botoesCurso">
                                <button className="botaoEditarCurso">Editar</button>
                                <button className="botaoRemoverCurso">Remover</button>
                            </div>
                        </div>    
                    </div>
                    )
            }
                  
            </div>
            </div>
        )
    }
}