import React,{Component} from 'react'
import './courses.css'
import api from '../../../services/api'
import {getInfo} from '../../../services/auth'
import mercadopago from 'mercadopago';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';

export default class Courses extends Component{
    constructor(){
        super()
        this.state={
            courses:[],
            loading:true
        }
    }

    componentDidMount = async ()=>{
        const modulo = getInfo().module;
        await api.get(`/courses/module/${modulo}`)
            .then(
                res=>{
                    this.setState({courses:res.data,loading:false})
                }
            )
    }

    async buyCourse(user_id,c){
        console.log(`${user_id} compra ${c.id}`)
        
        mercadopago.configure({
            access_token: 'TEST-4046680816998383-011813-502cf075c1647d97903c3bc2ca38354a-254719565'
          });
          let preference = {
            items: [
              {
                title: c.name,
                unit_price:c.price,
                quantity:1,
                description: c.description,
              }
            ]
          };
          mercadopago.preferences.create(preference)
            .then(function(response){
            console.log(response)// Este valor substituirá a string "$$init_point$$" no seu HTML
            global.init_point = response.body.init_point;
            }).catch(function(error){
            console.log(error);
            });

    //     try{
    //         await api.post(`student_courses`,{user_id,course_id})
    //         .then(res=>{
    //             console.log(res)
    //         })
    //     }catch(err){
    //         console.log(err)
    //         alert('Você já possui este curso')
    //     }
    }

    render(){
        return(
        <div className="courses">
            <div className='title'>
                <h1>CURSOS</h1>
            </div>
            <div className="cards">
                {this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                    :this.state.courses.map((c)=>
                    <div key={c.id} className="card">
                        <img className="imagemCurso" src={c.url} alt={`Curso ${c.id}`} />
                        {c.module?<div className="module">Modulo {c.module_id}</div>:<div></div>}
                        <div className="title" >{c.name}</div>
                        <div className="divInfoCurso">{cortar(c.description)}</div>
                        <div>
                            <div className="divInfoCurso">Duração: {c.hours} horas</div>
                            <div className="divInfoCurso">Assistencia: {c.assistance}</div>
                        </div>
                        {/* <div>Livro {c.book}</div> */}
                        <div className="bottom">
                            <div className="price">R$ {c.price}</div>
<div>

<a href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=237102186-12e0c26e-66dc-4d47-b812-268c84c2ea1a" target="_blank">Pagar</a>
</div>

                            {/* <button className="btn" onClick={()=>this.buyCourse(getInfo().id,c)}>Comprar</button> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
        )
    }
}

function cortar(minhaString){
    if (minhaString.length > 40) 
        return minhaString.slice(0, 40)+'...' 
    else return minhaString
}