import React from 'react'
import './users.css'

export default function users(props){
    return(
        <div>
            {props.users.map((user)=>
                <div key={user.id}>
                    <div >Id: {user.id}</div>
                    <div>Nome: {user.name}</div>
                    <div>Email: {user.email}</div>
                    <div>Data de Nascimento: {user.birth_date}</div>
                    <div>Cidade: {user.city}</div>
                    <div>Estado: {user.state}</div>
                    <div>Pais: {user.country}</div>
                    <div>Numero: {user.phone_number}</div>
                    <div>Modulo pertencente: {user.module}</div>
                    <div>Tipo de usuario: {user.type?(user.type==1?('Pendente'):(user.type==2?'Afiliado':'Não identificado')):'Free'}</div>
                    <br></br>
                </div>
            )}
        </div>
    )
}