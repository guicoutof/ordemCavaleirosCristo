import React, { Component } from 'react';
import api from '../../../services/api'
import './painelUsuarios.css'
import './userCSS/createAndEditUser.css'
import Confirm from '../confirm/confirm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faUserPlus, faUser, faCircleNotch} from '@fortawesome/free-solid-svg-icons';

export default class panelUsuarios extends Component {

    constructor() {
        super();
        this.state = {
            users: [],
            search:'',
            filter:'',
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
            loading:true
        }

        this.close = this.close.bind(this)
        this.confirm = this.confirm.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount = async ()=>{
        await api.get("/getUsers")
            .then(
                res=>{
                    this.setState({users:res.data,loading:false})
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

    removeUser(i){
        console.log(i)
        this.setState({modalC:true,id:i})
    }

    close(){
        this.setState({modalC:false});
    }

    async confirm(){
        const {id} = this.state
        this.setState({modalC:false})
        await api.delete(`/deleteStudent/${id}`)
        window.location.reload();
    }

    async approveUser(id,type){
        await api.post(`/approveStudent/${id}`,{type})
        .then(res=>{
            window.location.reload()
        })
    }

    handleChange(event){
        this.setState({filter:event.target.value})
    }

    showUsersList() {
        return (
            <div className="panelUser-container">
                <div className="panelUser-header">
                    {/* <button className="panelUserCreate-user-btn" onClick={this.openCreateUser.bind(this)}>Criar Usuário</button> */}
                    <select className="selectTipoUsuarioOK" value={this.state.filter}onChange={this.handleChange}>
                        <option value={''}>Tipo de Usuário</option>
                        <option value={0}>Gratuito</option>
                        <option value={1}>Pendente</option>
                        <option value={2}>Afiliado</option>
                    </select>
                    <h1 className="panelUser-h2">Usuários</h1>
                    <input className="panelUser-input" placeholder="Pesquisar" type="text" value={this.state.search} onChange={e=>this.setState({search:e.target.value})}/>
                </div>
                {this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                    :this.state.users.map((element,i) =>
                    <div key={element.id} className="panelUser-table">
                    {( ((element.name.indexOf(this.state.search)!==-1)
                    ||(element.email.indexOf(this.state.search)!== -1)
                    ||(element.id === +this.state.search)
                    // ||(element.city.indexOf(this.state.search)!== -1)
                    // ||(element.state.indexOf(this.state.search)!== -1)
                    // ||(element.country.indexOf(this.state.country)!== -1)
                    )
                     && (this.state.filter==='' || element.type=== +this.state.filter) )?
                        <div className="panelUser-div-users">
                            <div className="panelUser-info-curso">
                                <div className="divInfo">
                                    <div className="panelUser-contents">
                                        <b>Id:</b> {element.id}
                                    </div>
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
                                        <b>Tipo de usuario:</b> {element.type?element.type===2?'Afiliado':'Pendente':'Gratuito'}
                                    </div>
                                </div>
                            </div>
                            <div className="panelUser-btn-group">
                                {element.type===2?<button className="panelUser-btn btn-editar" onClick={()=>this.approveUser(element.id,0)}>
                                    <abbr title="Retornar para gratuito">
                                        <FontAwesomeIcon className="icon" icon={faUser} size="3x"/>
                                    </abbr>
                                </button>:<div></div>}
                                {element.type===1?<button className="panelUser-btn btn-editar" onClick={()=>this.approveUser(element.id,2)}>
                                    <abbr title="Aprovar Afiliação">
                                        <FontAwesomeIcon className="icon" icon={faUserPlus} size="3x"/>
                                    </abbr>
                                </button>:<div></div>}
                                {/* <NavLink to={`/user/${element.id}/course`}><button>Cursos</button></NavLink> */}
                                <button className="panelUser-btn btn-excluir" onClick={()=>this.removeUser(element.id)}>
                                    <FontAwesomeIcon className="icon" icon={faTrash} size="3x"/>
                                </button>
                                <Confirm open={this.state.modalC}  title={'Deseja realmente excluir este usuario?'} close={this.close} confirm={this.confirm}/> 
                            </div>
                        </div>
                    :<div></div>}

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
                    {/* {this.state.enableEditUser && this.showEditUser(this.state.id)  } */}
            </div>
        );
    }
}

export class UserCourse extends Component{
    constructor(){
        super()
        this.state={
            courses:[]
        }
    }
    componentDidMount = async ()=>{
        await api.get(`/student_courses/${this.props.match.params.id}`)
            .then(
                res=>{
                    console.log(res)
                    this.setState({users:res.data,loading:false})
                }
            )
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}