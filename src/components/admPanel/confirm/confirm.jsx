import React from 'react'
import './confirm.css'
import Modal from 'react-modal';
export default function Confirm(props){
return(
    <Modal className="modalTamanho" isOpen={props.open} onRequestClose={()=>props.close()} ariaHideApp={false} >
        <h1 className="tituloCriarModulo">{props.title}</h1 >
        <div className="confirmarExclusao">
            <button className="abrirModulo" onClick={()=>props.confirm()}>Confirmar</button>
            <button className="removerModulo" onClick={()=>props.close()}>Cancelar</button>
        </div>
    </Modal>
)
}