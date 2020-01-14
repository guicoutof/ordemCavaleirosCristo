import React, { Component } from 'react';
import MDArrowBack from 'react-ionicons/lib/MdArrowBack'
import MDTrashCan from 'react-ionicons/lib/MdTrash'
import MDEdit from 'react-ionicons/lib/MdPaper'
import api from '../../../services/api'
import './painelUsuarios.css'
import './userCSS/createAndEditUser.css'

export class panelUsuarios extends Component {

    constructor() {
        super();
        this.state = {
            users: [],
            userCount: 0,
            idController: "",
            enableEditUser: false,
            enableCreateUser: false,
            enableUserList: true,
        }
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
        this.setState({enableUserList: false, enableCreateUser: false, enableEditUser: true});
        this.setState({idController: userID});
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

    handleSaveUserChanges(userID,event) {
        /* this.setState((state) => {
            return {users[userID].userName = "teste"};
        }); */
    }

    handleInputChange(event) {
        /*
        const target = event.target;
        const value = target.value === 'checkbox' ? target.checked : target.value;
        const userAccountType = target.userAccountType; */
    }

    componentDidUpdate() {

    }

    showCreateUser() {
        return(
            <div className="panelCreateAndEditUser-container">
                <div className="panelCreateAndEditUser-form-header-div">
                    <h2 className="panelCreateAndEditUser-form-header">
                        Usuário
                    </h2>
                </div>
                <form className="panelCreateAndEditUser-form">
                    <div className="panelCreateAndEditUser-user-input-group">
                        <input className="panelCreateAndEditUser-inputs" placeholder="Nome do usuário" onChange={this.handleCreateUser}/>
                        <input className="panelCreateAndEditUser-inputs" placeholder="Email" onChange={this.handleCreateUser}/>
                        <input className="panelCreateAndEditUser-inputs" placeholder="Telefone/Celular" onChange={this.handleCreateUser}/>
                    </div>
                    <div className="panelCreateAndEditUser-user-input-group">
                        <input className="panelCreateAndEditUser-inputs" placeholder="Cidade" onChange={this.handleCreateUser}/>
                        <input className="panelCreateAndEditUser-inputs" placeholder="Estado" onChange={this.handleCreateUser}/>
                        <input className="panelCreateAndEditUser-inputs" placeholder="País" onChange={this.handleCreateUser}/>
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
                                <input className="panelCreateAndEditUser-checkboxe" type="radio" name="accountType" onChange={this.handleCreateUser}/>
                                <input className="panelCreateAndEditUser-checkboxe" type="radio" name="accountType" onChange={this.handleCreateUser}/>
                                <input className="panelCreateAndEditUser-checkboxe" type="radio" name="accountType" onChange={this.handleCreateUser}/>
                            </li>
                        </ul>
                    </div>
                </form>
                <button className="panelCreateAndEditUser-submit-btn" onClick={console.log("Não sei o q fazer aqui")}>SALVAR</button>
                <div className="panelCreateAndEditUser-back-btn-div">
                    <button className="panelCreateAndEditUser-back-btn" onClick={this.openUserList.bind(this)}><MDArrowBack /> VOLTAR</button>
                </div>
            </div>
        );
    }

    showEditUser(userID) {
        return(
            <div className="panelCreateAndEditUser-container">
                <div className="panelCreateAndEditUser-form-header-div">
                    <h2 className="panelCreateAndEditUser-form-header">
                        Edição de Usuário
                    </h2>
                </div>
                <form className="panelCreateAndEditUser-form">
                    <div className="panelCreateAndEditUser-user-input-group">
                        <div>Nome
                        <input className="panelCreateAndEditUser-inputs" placeholder="Nome do usuário"  value={this.state.users[userID].name||''} onChange={this.handleSaveUserChanges}/>
                        </div>
                        <div>Email
                        <input className="panelCreateAndEditUser-inputs" placeholder="Email" value={this.state.users[userID].email||''} onChange={this.handleSaveUserChanges}/>
                        </div>
                        <div>Nome
                        <input className="panelCreateAndEditUser-inputs" placeholder="Telefone/Celular" value={this.state.users[userID].phone_number||''} onChange={this.handleSaveUserChanges}/>
                        </div>
                        <div>Nome
                        <input className="panelCreateAndEditUser-inputs" placeholder="Data de Nascimento" value={this.state.users[userID].birth_date||''} onChange={this.handleSaveUserChanges}/>
                        </div>
                    </div>
                    <div className="panelCreateAndEditUser-user-input-group">
                        <div>Nome
                        <input className="panelCreateAndEditUser-inputs" placeholder="Cidade" value={this.state.users[userID].city||''} onChange={this.handleSaveUserChanges}/>
                        </div>
                        <div>Nome
                        <input className="panelCreateAndEditUser-inputs" placeholder="Estado" value={this.state.users[userID].state||''} onChange={this.handleSaveUserChanges}/>
                        </div>
                        <div>Nome
                        <input className="panelCreateAndEditUser-inputs" placeholder="País" value={this.state.users[userID].country||''} onChange={this.handleSaveUserChanges}/>
                        </div>
                        <div>Nome
                        <input className="panelCreateAndEditUser-inputs" placeholder="Modulo" value={this.state.users[userID].module||''} onChange={this.handleSaveUserChanges}/>
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
                                <input className="panelCreateAndEditUser-checkboxe" type="radio" name="accountType" value={this.state.users[userID].type} checked={!this.state.users[userID].type} onChange={this.handleSaveUserChanges}/>
                                <input className="panelCreateAndEditUser-checkboxe" type="radio" name="accountType" value={this.state.users[userID].type} checked={this.state.users[userID].type==1?true:false} onChange={this.handleSaveUserChanges}/>
                                <input className="panelCreateAndEditUser-checkboxe" type="radio" name="accountType" value={this.state.users[userID].type} checked={this.state.users[userID].type==2?true:false} onChange={this.handleSaveUserChanges}/>
                            </li>
                        </ul>
                    </div>
                </form>
                <button className="panelCreateAndEditUser-submit-btn" onChange={this.handleSaveUserChanges(userID)}>SALVAR</button>
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
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">ID: {element.id}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">Nome: {element.name}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">Email: {element.email}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">Telefone: {element.phone_number}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">Data de Nascimento: {element.birth_date}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">Cidade: {element.city}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p"> Estado: {element.state}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">País: {element.country}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">Modulo Pertencente: {element.module}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">Tipo de usuario: {element.type}</p>
                                </div>
                            </div>
                            <div className="panelUser-btn-group">
                                <button className="panelUser-edit-btn" onClick={this.openEditUser.bind(this,i)}><MDEdit fontSize="50px" color="#808080" /></button>
                                <button className="panelUser-remove-btn"><MDTrashCan fontSize="50px" color="#808080" /></button>
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
                    {this.state.enableCreateUser && this.showCreateUser()  }
                    {this.state.enableEditUser && this.showEditUser(this.state.idController)  }
            </div>
        );
    }
}

export default panelUsuarios;