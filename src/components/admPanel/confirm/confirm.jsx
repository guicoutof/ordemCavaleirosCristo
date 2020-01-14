import React from 'react'
import './confirm.css'
import Modal from 'react-modal';
export default function Confirm(props){
return(
    <Modal isOpen={props.open} onRequestClose={()=>props.close()} ariaHideApp={false} >
        <div>{props.title}</div>
        <div>
            <button onClick={()=>props.confirm()}>Confirmar</button>
            <button onClick={()=>props.close()}>Cancelar</button>
        </div>
    </Modal>
)
}