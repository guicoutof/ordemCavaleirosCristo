import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import './courses.css'

export default (props) => {

    const [countCard, setCount] = useState(0);
    let cards = [];
    
    function previousCarousel(){
        if (countCard - 3 >= 0) setCount(countCard-3)
    }

    function nextCarousel(){
        if((props.cards.length - (countCard + 3)) > 0) setCount(countCard+3);
    }
    
    return(
        <div className="courses">
            <div className="title">
                <h1>CURSOS</h1>
            </div>
            <div className="cards">

                <li className="pointer" onClick={()=>previousCarousel()}><FontAwesomeIcon icon={faCaretLeft} size="3x"/></li>
                    {
                        cards = props.cards.filter((c)=>{
                            if(c.pk===countCard || c.pk===(countCard+1) || c.pk===(countCard+2))return c;
                            else return null;
                        }),
                    
                        cards.map((c)=>
                            <div className="card" key={c.pk}>
                                <img className="image" src={c.image} alt="imagem"/>
                                <h3 className="title">{c.title}</h3>
                                <li className="btn">DETALHES</li>
                            </div>
                        )
                    } 
                <li className="pointer" onClick={()=>nextCarousel()}><FontAwesomeIcon icon={faCaretRight} size="3x"/></li>

            </div>
        </div>
    )
}