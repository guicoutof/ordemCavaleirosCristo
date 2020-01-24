import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import './admServicos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import api from '../../../services/api'
import Confirm from '../confirm/confirm'
import Navbar from '../../home/navbar/navbar'
export default class Services extends Component{
    constructor(){
        super()
        this.state = {
            loading:true,
            services:[],
            search:'',
            id:0,
            modalC:false
        }
        this.confirm = this.confirm.bind(this)
        this.close = this.close.bind(this)
    }
    
    async componentDidMount(){
        const response = await api.get('/services')
        this.setState({services:response.data,loading:false})
    }
    
    removeService(id){
        this.setState({modalC:true,id:id})
    }

    async confirm(){
        const {id} = this.state
        this.setState({modalC:false,confirm:true})
        await api.delete(`/services/${id}`)
        window.location.reload();
    }
    
    close(){
        this.setState({modalC:false});
    }

    render(){
        return(
        <div className="divPrincipalServicos">
            <div className="containerServico">
                <div className="headerServicos">
                    <div className="botoesHeaderServicos">
                        <NavLink to={"/services/create"}><button className="botaoCriarServico">Criar Serviço</button></NavLink>
                        <NavLink to={"/servicePending"}><button className="botaoServicosPendentes">Serviços Pendentes</button></NavLink>
                    </div>
                    <h2 className="tituloServicosAdmin">Serviços</h2>
                    <input className="pesquisarServico" placeholder='Pesquisar' type="text" value={this.state.search} onChange={e=>this.setState({search:e.target.value})}/>
                </div>
                <Confirm open={this.state.modalC}  title={'Deseja realmente excluir este serviço ?'} close={this.close} confirm={this.confirm}/> 
            { this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                :this.state.services.map(service=>
                    <div key={service.id} className="tabelaServicos">
                        {service.name.indexOf(this.state.search)!==-1?
                            <div className="divServicos">
                                <div className="infoServico">
                                    <img src={service.url} alt={service.path} className='imgServico'/>
                                    <div className="infoTextoServicos">
                                        <h5 className="nomeServico">{service.name}</h5>
                                        <p className="idServico"><b>Id: </b>{service.id}</p>
                                        <p className="descricaoServico">{cortar(service.description)}</p>
                                        <a className="linkServico" href={service.link} target="_blank" rel="noopener noreferrer" >{service.link}</a>
                                    </div>
                                </div>
                                <div className="duracaoAula">
                                    <h3 className="valorServico">R$ {service.price}</h3>
                                </div>
                                <div className="botoesServico">
                                    <NavLink to={`services/${service.id}/edit`}><button className="botaoEditarServico">Editar</button></NavLink>
                                    <button className="botaoRemoverServico" onClick={()=>this.removeService(service.id)} >Remover</button>
                                </div>
                            </div>    
                        :<div></div>}
                    </div>  
                )
            }
              
            </div>
        </div>
        )
    }
}

function cortar(minhaString){
    if (minhaString.length > 80) 
        return minhaString.slice(0, 80)+'...' 
    else return minhaString
}

export class ServicePending extends Component{
    constructor(){
        super()
        this.state={
            services:[],
            search:'',
            loading:true,
        }
    }
    async componentDidMount(){
        const response = await api.get('/service_purchase')
        this.setState({services:response.data,loading:false})
    }

    async aprovar(id){
        await api.put('/service_purchase',{id,paid:true})
        window.location.reload()
    }

    render(){
        return(
            <div className="principalCursos">
                <Navbar/>
                <div className="containerCURSO">
                <div className="headerCursos">
                        <h1 className="nomeCurso">Cursos Pendentes</h1>
                    {/* <input className="pesquisarCurso" placeholder='Nome do Curso' type="text" value={this.state.search} onChange={e=>this.setState({search:e.target.value})}/> */}
                </div>

                <div className="tabelaCursos">
                    {this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                        :this.state.services.map(service=>
                            <div key={service.id} >
                                {   
                                // service.user_id === +this.state.search || service.service_id === +this.state.search?
                                    <div className="divListaCursos">
                                        <div className="infoCurso">
                                            <div className="infoTexto">
                                                <div>Id do usuário: {service.user_id}</div>
                                                <div>Id do serviço: {service.service_id}</div>
                                            </div>
                                        </div>
                                        <div className="botoesCurso">
                                            <button onClick={()=>this.aprovar(service.id)} className="botaoAbrirCurso" >Aprovar</button>
                                        </div>
                                    </div>
                                    // :<div></div>
                                }
                            </div>
                        )    
                    }
                    <NavLink to={`/services`}><button className="botaoVoltar">Voltar</button></NavLink>
                </div>
                
            </div>
            </div>
        )
    }
}