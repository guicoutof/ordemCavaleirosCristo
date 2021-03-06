import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import api from '../../../services/api'
import Navbar from '../../home/navbar/navbar'
import { NavLink } from 'react-router-dom'
import Confirm from '../confirm/confirm'
import './admAulas.css'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';

export default class AdmClass extends Component{
    constructor(){
        super()
        this.state={
            classes:[],
            modal:false,
            classId:0,
            loading:true
        }

        this.close = this.close.bind(this);
        this.confirm = this.confirm.bind(this);
    }

    componentDidMount = async ()=>{
        await api.get(`/classes/course/${this.props.match.params.id}`)
            .then(
                res=>{
                    this.setState({classes:res.data,loading:false})
                }
            )
    }

    close(){
        this.setState({modal:false});
    }

    async confirm(){
        this.setState({modal:false})
        await api.delete(`/classes/${this.state.classId}`);
        window.location.reload();
    }

    render(){
        return(
            <div className="principalAulas">
                <Navbar />
            <div className="containerCURSO">
                <div className="headerCursos">
                    <NavLink to={`/course/${this.props.match.params.id}/create`}><button className="botaoCriarCurso">Nova Aula</button> </NavLink> 
                    <h2 className="nomeCurso">{this.state.classes.length>0?this.state.classes[0].course.name:'Nenhuma Aula'}</h2>
                    {/* <input className="pesquisarCurso" placeholder='Pesquisar' type="text"/> */}
                </div>
            {this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                :this.state.classes.map((c)=>
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
                                <NavLink to={`/course/${this.props.match.params.id}/class/${c.id}/edit`}><button className="botaoEditarCurso">Editar</button></NavLink> 
                                <button className="botaoRemoverCurso" onClick={()=>this.setState({modal:true,classId:c.id})}>Remover</button>
                                <Confirm open={this.state.modal}  title={'Deseja realmente excluir esta aula ? '} close={this.close} confirm={this.confirm}/> 
                            </div>
                        </div>    
                    </div>
                    )
            }
            <NavLink to={this.state.classes.length>0?`/module/${this.state.classes[0].course.module_id}`:'/modules'}><button className="botaoVoltar">Voltar</button></NavLink> 
            </div>
            </div>
        )
    }
}