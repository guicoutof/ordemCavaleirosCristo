import React from 'react'
import './donate.css'

export default () => {
    return(
        <div className="donatemain">
             
             <div className="donateinside">
             <h1 className="textdonate">Faça a sua doação !</h1>
             <div className="a">
             <label className="rs">R$</label><input id = "dinheiro" name= "dinheiro" type="number" step="0.01" min="0" placeholder="Digite um valor"></input>
             <button className="butao"><d className="ok">ok</d></button>
             </div>

             </div>
             <script>
             
             </script>
        </div>
    )
}