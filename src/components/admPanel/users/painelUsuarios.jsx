import React, { Component } from 'react';
import MDArrowBack from 'react-ionicons/lib/MdArrowBack'
import MDTrashCan from 'react-ionicons/lib/MdTrash'
import MDEdit from 'react-ionicons/lib/MdPaper'
import api from '../../../services/api'
import './painelUsuarios.css'
import './userCSS/createAndEditUser.css'
import Confirm from '../confirm/confirm'

export class panelUsuarios extends Component {

    constructor() {
        super();
        this.state = {
            users: [],
            userCount: 0,
            id: "",
            enableEditUser: false,
            enableCreateUser: false,
            enableUserList: true,
            modalC:false,
            msg:'',
                name:'',
                email:'',
                phone_number:'',
                birth_date:'',
                city:'',
                state:'',
                country:'',
                module:1,
                type:0,

        }

        this.close = this.close.bind(this)
        this.confirm = this.confirm.bind(this)
    }

    componentDidMount = async ()=>{
        await api.get("/getUsers")
            .then(
                res=>{
                    this.setState({users:res.data})
                }
            )
    }

    openUserList() {
        this.setState({enableUserList: true, enableCreateUser: false, enableEditUser: false});
    }

    openCreateUser() {
        this.setState({enableUserList: false, enableCreateUser: true, enableEditUser: false});
        
    }

    openEditUser(userID) {
        this.setState({
            enableUserList: false, enableCreateUser: false, enableEditUser: true,
            id: userID,
            name:this.state.users[userID].name,
            email:this.state.users[userID].email,
            phone_number:this.state.users[userID].phone_number,
            birth_date:this.state.users[userID].birth_date,
            city:this.state.users[userID].city,
            state:this.state.users[userID].state,
            country:this.state.users[userID].country,
            module:this.state.users[userID].module,
            type:this.state.users[userID].type
        })
    }

    async submitUser(){
        const {name,email,phone_number,birth_date,city,state,country,module,type} = this.state;
        try{
            await api.put("/users",{name,email,phone_number,birth_date,city,state,country,module,type})
            .then(res=>{
                this.setState({msg:'Usuario editado com sucesso'})
            }) 

        }catch(err){
            console.log(err)
            this.setState({msg:'Algum erro ocorreu'})
        }
    }

    handleCreateUser(event) {
        /*
        this.setState({users: [3].push({
                userID: this.state.userCount,
                userName: event.target.value,
                userEmail: event.target.value,
                userPhone: event.target.value,
                userCity: event.target.value,
                userEstate: event.target.value,
                userCountry: event.target.value,
                userAccountType: event.target.value,
            })
        }) */
    }



    handleInputChange(event) {
        /*
        const target = event.target;
        const value = target.value === 'checkbox' ? target.checked : target.value;
        const userAccountType = target.userAccountType; */
    }

    componentDidUpdate() {

    }

    removeUser(i){
        this.setState({modalC:true,id:i})
    }

    close(){
        this.setState({modalC:false});
    }

    async confirm(){
        const {id} = this.state
        this.setState({modalC:false})
        const response = await api.delete('/users/',{id})
        console.log(response)
    }

    // showCreateUser() {
    //     return(
    //         <div className="panelCreateAndEditUser-container">
    //             <div className="panelCreateAndEditUser-form-header-div">
    //                 <h2 className="panelCreateAndEditUser-form-header">
    //                     Usuário
    //                 </h2>
    //             </div>
    //             <form className="panelCreateAndEditUser-form">
    //                 <div className="panelCreateAndEditUser-user-input-group">
    //                     <input className="panelCreateAndEditUser-inputs" placeholder="Nome do usuário" onChange={this.handleCreateUser}/>
    //                     <input className="panelCreateAndEditUser-inputs" placeholder="Email" onChange={this.handleCreateUser}/>
    //                     <input className="panelCreateAndEditUser-inputs" placeholder="Telefone/Celular" onChange={this.handleCreateUser}/>
    //                 </div>
    //                 <div className="panelCreateAndEditUser-user-input-group">
    //                     <input className="panelCreateAndEditUser-inputs" placeholder="Cidade" onChange={this.handleCreateUser}/>
    //                     <input className="panelCreateAndEditUser-inputs" placeholder="Estado" onChange={this.handleCreateUser}/>
    //                     <input className="panelCreateAndEditUser-inputs" placeholder="País" onChange={this.handleCreateUser}/>
    //                 </div>
    //                 <div className="panelCreateAndEditUser-footer-group">
    //                     <h1>Tipo de Cadastro</h1>
    //                     <ul className="panelCreateAndEditUser-ul">
    //                         <li>
    //                             <span className="panelCreateAndEditUser-free">
    //                                 FREE - 0
    //                             </span>
    //                             <span className="panelCreateAndEditUser-premium">
    //                                 PENDENTE - 1
    //                             </span>
    //                             <span className="panelCreateAndEditUser-premium">
    //                                 AFILIADO - 2
    //                             </span>
    //                         </li>
    //                         <li>
    //                             <input className="panelCreateAndEditUser-checkboxe" type="radio" name="accountType" onChange={this.handleCreateUser}/>
    //                             <input className="panelCreateAndEditUser-checkboxe" type="radio" name="accountType" onChange={this.handleCreateUser}/>
    //                             <input className="panelCreateAndEditUser-checkboxe" type="radio" name="accountType" onChange={this.handleCreateUser}/>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </form>
    //             <button className="panelCreateAndEditUser-submit-btn" onClick={console.log("Não sei o q fazer aqui")}>SALVAR</button>
    //             <div className="panelCreateAndEditUser-back-btn-div">
    //                 <button className="panelCreateAndEditUser-back-btn" onClick={this.openUserList.bind(this)}><MDArrowBack /> VOLTAR</button>
    //             </div>
    //         </div>
    //     );
    // }

    showEditUser() {
        return(
            <div className="panelCreateAndEditUser-container">
                <div className="panelCreateAndEditUser-form-header-div">
                    <h2 className="panelCreateAndEditUser-form-header">
                        Edição de Usuário
                        {this.state.msg}
                    </h2>
                </div>
                <div className="panelCreateAndEditUser-form">
                    <div className="panelCreateAndEditUser-user-input-group">
                        <div>Nome
                        <input className="panelCreateAndEditUser-inputs" placeholder="Nome do usuário"  value={this.state.name||''} onChange={e=>this.setState({name:e.target.value})}/>
                        </div>
                        <div>Email
                        <input className="panelCreateAndEditUser-inputs" placeholder="Email" value={this.state.email||''} onChange={e=>this.setState({email:e.target.value})}/>
                        </div>
                        <div>Telefone
                        <input className="panelCreateAndEditUser-inputs" placeholder="Telefone/Celular" value={this.state.phone_number||''} onChange={e=>this.setState({phone_number:e.target.value})}/>
                        </div>
                        <div>Data de Aniversario
                        <input type="date" className="panelCreateAndEditUser-inputs" placeholder="Data de Nascimento" value={this.state.birth_date||''} onChange={e=>this.setState({birth_date:e.target.value})}/>
                        </div>
                    </div>
                    <div className="panelCreateAndEditUser-user-input-group">
                        <div>Cidade
                        <input className="panelCreateAndEditUser-inputs" placeholder="Cidade" value={this.state.city||''} onChange={e=>this.setState({city:e.target.value})}/>
                        </div>
                        <div>Estado
                        <input className="panelCreateAndEditUser-inputs" placeholder="Estado" value={this.state.state||''} onChange={e=>this.setState({state:e.target.value})}/>
                        </div>
                        <div>Pais
                        <input className="panelCreateAndEditUser-inputs" placeholder="País" value={this.state.country||''} onChange={e=>this.setState({country:e.target.value})}/>
                        </div>
                        <div>Modulo atual
                        <input type="number" className="panelCreateAndEditUser-inputs" placeholder="Modulo" value={this.state.module||1} onChange={e=>this.setState({module:e.target.value})}/>
                        </div>
                    </div>
                    <div className="panelCreateAndEditUser-footer-group">
                        <h1>Tipo de Cadastro</h1>
                        <ul className="panelCreateAndEditUser-ul">
                            <li>
                                <span className="panelCreateAndEditUser-free">
                                    FREE - 0
                                </span>
                                <span className="panelCreateAndEditUser-premium">
                                    PENDENTE - 1
                                </span>
                                <span className="panelCreateAndEditUser-premium">
                                    AFILIADO - 2
                                </span>
                            </li>
                            <li>
                                <input className="panelCreateAndEditUser-checkboxe" type="radio" name="accountType" value={this.state.type} checked={!this.state.type} onChange={e=>this.setState({type:0})}/>
                                <input className="panelCreateAndEditUser-checkboxe" type="radio" name="accountType" value={this.state.type} checked={this.state.type==1?true:false} onChange={e=>this.setState({type:1})}/>
                                <input className="panelCreateAndEditUser-checkboxe" type="radio" name="accountType" value={this.state.type} checked={this.state.type==2?true:false} onChange={e=>this.setState({type:2})}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className="panelCreateAndEditUser-submit-btn" onClick={()=>this.submitUser()}>SALVAR</button>
                <div className="panelCreateAndEditUser-back-btn-div">
                    <button className="panelCreateAndEditUser-back-btn" onClick={this.openUserList.bind(this)}><MDArrowBack /> VOLTAR</button>
                </div>
            </div>
        );
    }

    showUsersList() {
        return (
            <div className="panelUser-container">
                <div className="panelUser-header">
                    {/* <button className="panelUserCreate-user-btn" onClick={this.openCreateUser.bind(this)}>Criar Usuário</button> */}
                    <h2 className="panelUser-h2">Usuários</h2>
                    <input className="panelUser-input" placeholder="Id do usuário" type="text" />
                </div>
                {this.state.users.map((element,i) =>
                    <div key={element.id} className="panelUser-table">
                        <div className="panelUser-div-users">
                            <div className="panelUser-info-curso">
                                <div className="divInfo">
                                    <div className="panelUser-contents">
                                        <b>Nome:</b> {element.name}
                                    </div>
                                    <div className="panelUser-contents">
                                        <b>Email:</b> {element.email}
                                    </div>
                                    <div className="panelUser-contents">
                                        <b>Telefone:</b> {element.phone_number}
                                    </div>
                                    <div className="panelUser-contents">
                                        <b>Data de Nascimento:</b> {element.birth_date}
                                    </div>
                                </div>
                                
                                <div className="divInfo">
                                    <div className="panelUser-contents">
                                        <b>Cidade:</b> {element.city}
                                    </div>
                                    <div className="panelUser-contents">
                                        <b>Estado:</b> {element.state}
                                    </div>
                                    <div className="panelUser-contents">
                                        <b>País:</b> {element.country}
                                    </div>
                                </div>
                                
                                <div className="divInfo">
                                    <div className="panelUser-contents">
                                        <b>Modulo atual:</b> {element.module}
                                    </div>
                                    <div className="panelUser-contents">
                                        <b>Tipo de usuario:</b> {element.type?element.type==2?'Afiliado':'Pendente':'Gratuito'}
                                    </div>
                                </div>
                            </div>
                            <div className="panelUser-btn-group">
                                <button className="panelUser-edit-btn" onClick={this.openEditUser.bind(this,i)}><MDEdit fontSize="50px" color="#808080" /></button>
                                <button className="panelUser-remove-btn" onClick={()=>this.removeUser(i)}><MDTrashCan fontSize="50px" color="#808080" /></button>
                                <Confirm open={this.state.modalC}  title={'Deseja realmente excluir este usuario?'} close={this.close} confirm={this.confirm}/> 
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    render() {
        return (
            <div className="panelUser-principal">
                    {this.state.enableUserList && this.showUsersList() }
                    {/* {this.state.enableCreateUser && this.showCreateUser()  } */}
                    {this.state.enableEditUser && this.showEditUser(this.state.id)  }
            </div>
        );
    }
}

export default panelUsuarios;