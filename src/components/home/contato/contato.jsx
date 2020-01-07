import React, {Component} from 'react';
import api from "../../../services/api";
import './contato.css'

export default class Contato extends Component {
    state = {
        email:"",
        name:"",
        subject:"",
        message:"",
        error:""
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log(this.state);
        const{email,name,subject,message} = this.state;
        if(!email || !name ||  !subject || !message ){
          this.setState({error: "Preencha todos os campos para continuar!"})
        }else{
            try{
                console.log(this.state);
                const response = await api.post("/contact",{email,name,subject,message});
                console.log(response);

                this.setState({error:"Email enviado com sucesso",name:"",email:"",subject:"",message:""});
            }catch(err){
                console.log(err)
            }
            
        }
        
      }

    render(){

        return(
            <div className="backimg">
            <div className='contato'>
                <h1 className='contatoTitulo'>CONTATO</h1>
            </div>
            <form action="" className='formulario'>
                {this.state.error}
                <input type="text" placeholder='Nome' className='inputSimples' value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
                <input type="email" placeholder='Email' className='inputSimples' value={this.state.email} onChange={e=>this.setState({name:e.target.email})}/>
                <input type="text" placeholder='Assunto' className='inputSimples' value={this.state.assunto} onChange={e=>this.setState({name:e.target.subject})}/>
                <textarea placeholder='Mensagem' className='inputTexto' value={this.state.message} onChange={e=>this.setState({name:e.target.message})}></textarea>

                <input type="submit" className='submit' onClick={this.handleSubmit}/>
            </form>            
        </div>
    ) 
    }
}