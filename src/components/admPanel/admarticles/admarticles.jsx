import React from 'react'
import './admarticles.css'

export default function articles(props){
    return(
        <div>
            {props.publications.map((p)=>
                <div key={p.id}>
                    <img src={p.url} alt={p.title}/>
                    <div>{p.id}</div>
                    <div>{p.title}</div>
                    <div>{p.text}</div>
                    <br></br>
                </div>
            )}
        </div>
    )
}

// export default (props) => {
//     return(
        
//         <div className="backimg">
//             <div className="container1">
//                 <div className="containerbuttons">
//                     <button className="addart">
//                         <p>+  Adicionar Artigo</p>
//                     </button>
//                     <input className="search1" placeholder="Pesquisar"> 
//                     </input>
//                 </div>
//                 <div className="containerarticles">
//                     <div className="art0">
//                         <h1 className="artname0">ARTIGO III</h1>
//                         <div className="divforbutt0">
//                             <button className="editart0">Editar</button>
//                             <button className="removeart0">Remover</button>
//                         </div>
//                         </div>
//                     <div className="art1">
//                         <h1 className="artname1">ARTIGO II</h1>
//                         <div className="divforbutt1">
//                             <button className="editart1">Editar</button>
//                             <button className="removeart1">Remover</button>
//                         </div>
//                     </div>
//                     <div className="art2">
//                     <h1 className="artname2">ARTIGO I</h1>
//                         <div className="divforbutt2">
//                             <button className="editart2">Editar</button>
//                             <button className="removeart2">Remover</button>
//                         </div>
//                     </div>

//                 </div>
//                 <div className="containerbuttons2">
//                 <button className="getback">
//                         <p> VOLTAR </p>
//                     </button>
//                     <button className="saveart">
//                         <p> SALVAR </p>
//                     </button>

//                 </div>
                


//             </div>
//         </div>
    
    
//     )
// }