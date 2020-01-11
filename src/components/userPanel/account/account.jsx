import React from 'react'
import './account.css'

export default function account(props){

    return(
        <div>
            <div>{props.user.name}</div>
            <div>{props.user.email}</div>
            <div>{props.user.phone_number}</div>
            <div>{props.user.birth_date}</div>
            <div>{props.user.city}</div>
            <div>{props.user.state}</div>
            <div>{props.user.country}</div>
        </div>
    )
}