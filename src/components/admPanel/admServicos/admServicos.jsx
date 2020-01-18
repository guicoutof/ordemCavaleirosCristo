import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import './admServicos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import api from '../../../services/api'
import Confirm from '../confirm/confirm'
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
                    <NavLink to={"/services/create"}><button className="botaoCriarServico">Criar Serviço</button></NavLink>
                    <h2 className="panelUser-h2">Serviços</h2>
                    <input className="pesquisarServico" placeholder='Pesquisar' type="text" value={this.state.search} onChange={e=>this.setState({search:e.target.value})}/>
                </div>
                <Confirm open={this.state.modalC}  title={'Deseja realmente excluir este serviço ?'} close={this.close} confirm={this.confirm}/> 
            { this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                :this.state.services.map(service=>
                    <div key={service.id} className="tabelaServicos">
                        {service.name.indexOf(this.state.search)!==-1?
                            <div className="divServicos">
                                <img src={service.url} alt={service.path} className='imgServico'/>
                                <div className="infoServico">
                                    <div className="infoTexto">
                                        <h5 className="nomeServico">{service.name}</h5>
                                        <p className="descricaoServico">{service.description}</p>
                                    </div>
                                        <a className="linkServico">{service.link}</a>
                                </div>
                                <div className="duracaoAula">
                                    <h3>{service.price}</h3>
                                </div>
                                <div className="botoesServico">
                                    <button className="botaoEditarServico">Editar</button>
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