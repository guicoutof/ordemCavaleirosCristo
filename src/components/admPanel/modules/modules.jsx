import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import Modal from 'react-modal';
import api from '../../../services/api'
import Confirm from '../confirm/confirm'
import './modules.css'

export default class AdmModules extends Component{
    constructor(){
        super()
        this.state={
            modal:false,
            modalC:false,
            name:'',
            confirm:false,
            id:'',
            modalE:false
        }
        this.confirm = this.confirm.bind(this);
        this.close = this.close.bind(this);
    }

    async confirm(){
        const {id} = this.state
        this.setState({modalC:false,confirm:true})
        await api.delete(`/modules/${id}`)
        window.location.reload();
    }
    
    close(){
        this.setState({modalC:false,modalE:false});
    }
    
    async submitModule(){
        const {name} = this.state
        await api.post("/modules",{name})
        this.setState({modal:false})
        window.location.reload();
    }
    
    removeModule(id){
        this.setState({modalC:true,id:id})
        
    }

    async updateModule(){
        const {id,name} = this.state
        this.setState({modalE:false})
        await api.put('/modules',{id,name})
        window.location.reload()
    }



render(){

    return(
        <div className='principalModulo'>
            <button className='criarModulo' onClick={()=>this.setState({modal:true})}>Criar Modulo</button>
        
            <div className='containerADM'>
                <Modal className="modalTamanho" isOpen={this.state.modal} onRequestClose={()=>this.setState({modal:false})} ariaHideApp={false} >
                    <h1 className="tituloCriarModulo">Criar Módulo</h1>
                    <div className="modalModulo">
                        <input className='inputNomeModulo' value={this.state.name} placeholder={'Nome do Módulo'} onChange={e=>this.setState({name:e.target.value})} />
                        <button className={'abrirModulo'} onClick={()=>this.submitModule()}>Criar</button>
                    </div>
                </Modal>
                <Confirm open={this.state.modalC}  title={'Deseja realmente excluir este modulo?'} close={this.close} confirm={this.confirm}/> 
            {
                this.props.modulos.map((modulo) =>
                <div key={modulo.module.id}className='cardModulo'>
                        <h3 className='nomeCurso'>{modulo.module.name}</h3>
                        <p className='qtdCurso'>Cursos: {modulo.module.courses_quantity}</p>
                        <div className="botoes">
                            <NavLink to={`/module/${modulo.module.id}`}><button className="abrirModulo">Abrir</button></NavLink>
                            <button className="editarModulo" onClick={()=>this.setState({modalE:true,id:modulo.module.id})}>Editar</button>

                            <Modal className="modalTamanho" isOpen={this.state.modalE} onRequestClose={()=>this.setState({modalE:false})} ariaHideApp={false} >
                                <h1 className="tituloCriarModulo">Editar Módulo</h1>
                                <div className="modalModulo">
                                    <input className='inputNomeModulo' value={this.state.name} placeholder={'Nome do Módulo'} onChange={e=>this.setState({name:e.target.value})} />
                                    <button className={'abrirModulo'} onClick={()=>this.updateModule()}>Salvar</button>
                                </div>
                            </Modal>

                            <button className="removerModulo" onClick={()=>this.removeModule(modulo.module.id)} >Remover</button>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
        )
    }
        
}