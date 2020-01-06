import React, { Component } from 'react';
import MDArrowBack from 'react-ionicons/lib/MdArrowBack'
import MDTrashCan from 'react-ionicons/lib/MdTrash'
import MDEdit from 'react-ionicons/lib/MdPaper'
import './painelUsuarios.css'
import './userCSS/createAndEditUser.css'

export class panelUsuarios extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userOBJ: [{
                userID: "0",
                userName: "Default",
                userEmail: "default@email.com",
                userPhone: "-1",
                userCity: "-1",
                userEstate: "-1",
                userCountry: "-1",
                userAccountType: "free",
            },{
                userID: "1",
                userName: "John Carvalho Silva",
                userEmail: "johncarvalho@email.com",
                userPhone: "00000000",
                userCity: "São Paulo",
                userEstate: "São Paulo",
                userCountry: "Brasil",
                userAccountType: "free",
            },{
                userID: "2",
                userName: "Pedro Almeida Silva",
                userEmail: "pedroca@email.com",
                userPhone: "11111111",
                userCity: "Presidente Prudente",
                userEstate: "São Paulo",
                userCountry: "Brasil",
                userAccountType: "premium",
            },],
            userCount: 0,
            idController: "",
            enableEditUser: false,
            enableCreateUser: false,
            enableUserList: true,
        }
    }

    initializeOBJ() {
        let obj = {
            userID: "1",
            userName: "John Carvalho Silva",
            userEmail: "johncarvalho@email.com",
            userPhone: "00000000",
            userCity: "São Paulo",
            userEstate: "São Paulo",
            userCountry: "Brasil",
        }

        this.state.userOBJ.push(obj);
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
        this.setState({userOBJ: [3].push({
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
            return {userOBJ[userID].userName = "teste"};
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
                                    FREE
                                </span>
                                <span className="panelCreateAndEditUser-premium">
                                    AFILHADO
                                </span>
                            </li>
                            <li>
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
                        <input className="panelCreateAndEditUser-inputs" placeholder="Nome do usuário"  value={this.state.userOBJ[userID].userName} onChange={this.handleSaveUserChanges}/>
                        <input className="panelCreateAndEditUser-inputs" placeholder="Email" value={this.state.userOBJ[userID].userEmail} onChange={this.handleSaveUserChanges}/>
                        <input className="panelCreateAndEditUser-inputs" placeholder="Telefone/Celular" value={this.state.userOBJ[userID].userPhone} onChange={this.handleSaveUserChanges}/>
                    </div>
                    <div className="panelCreateAndEditUser-user-input-group">
                        <input className="panelCreateAndEditUser-inputs" placeholder="Cidade" value={this.state.userOBJ[userID].userCity} onChange={this.handleSaveUserChanges}/>
                        <input className="panelCreateAndEditUser-inputs" placeholder="Estado" value={this.state.userOBJ[userID].userEstate} onChange={this.handleSaveUserChanges}/>
                        <input className="panelCreateAndEditUser-inputs" placeholder="País" value={this.state.userOBJ[userID].userCountry} onChange={this.handleSaveUserChanges}/>
                    </div>
                    <div className="panelCreateAndEditUser-footer-group">
                        <h1>Tipo de Cadastro</h1>
                        <ul className="panelCreateAndEditUser-ul">
                            <li>
                                <span className="panelCreateAndEditUser-free">
                                    FREE
                                </span>
                                <span className="panelCreateAndEditUser-premium">
                                    AFILHADO
                                </span>
                            </li>
                            <li>
                                <input className="panelCreateAndEditUser-checkboxe" type="radio" name="accountType" />
                                <input className="panelCreateAndEditUser-checkboxe" type="radio" name="accountType" />
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
                    <button className="panelUserCreate-user-btn" onClick={this.openCreateUser.bind(this)}>Criar Usuário +</button>
                    <h2 className="panelUser-h2">Usuários</h2>
                    <input className="panelUser-input" placeholder="Id do usuário" type="text" />
                </div>
                {this.state.userOBJ.map((element) =>
                    <div key={element.userID} className="panelUser-table">
                        <div className="panelUser-div-users">
                            <div className="panelUser-info-curso">
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">ID: {element.userID}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">Nome: {element.userName}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">Email: {element.userEmail}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">Telefone: {element.userPhone}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">Cidade: {element.userCity}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p"> Estado: {element.userEstate}</p>
                                </div>
                                <div className="panelUser-contents">
                                    <p className="panelUser-p">País: {element.userCountry}</p>
                                </div>
                            </div>
                            <div className="panelUser-btn-group">
                                <button className="panelUser-edit-btn" onClick={this.openEditUser.bind(this, element.userID)}><MDEdit fontSize="50px" color="#808080" /></button>
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