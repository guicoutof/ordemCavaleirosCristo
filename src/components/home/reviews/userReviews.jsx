import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import './userReviews.css';


export default (props) => {
    
    const [carousel, setCarousel] = useState(0);
    let cards = [];

    return (
        <div className="feedback">
            <div className="title">
                <h1>VEJA O QUE NOSSOS ESTUDANTES ACHARAM</h1>
            </div>
            <div className="carousel">
                <li className="pointer" onClick={()=> ((carousel-1)>=0)? setCarousel(carousel-1) : setCarousel(0) }><FontAwesomeIcon icon={faCaretLeft} size="3x"/></li>
                {
                        cards = props.feedbacks.filter((c)=>{
                            if(c.pk===carousel)return c;
                            else return null;
                        })
                    ,
                        cards.map((c)=>
                            <div className="cardCarousel" key={c.pk}>
                                <h3 className="name">{c.name}</h3>
                                <h4 className="text">{c.text}</h4>
                            </div>
                        )
                    } 
                <li className="pointer" onClick={()=> ((carousel+1)<props.feedbacks.length)? setCarousel(carousel+1) : setCarousel(carousel) }><FontAwesomeIcon icon={faCaretRight} size="3x"/></li>
            </div>
            <div className="list">{
                props.feedbacks.map((c)=>
                    c.pk=== carousel?
                        <li key={c.pk} id="visitedCircle">{<FontAwesomeIcon className="iconCircle" icon={faCircle} onClick={()=> setCarousel(c.pk)} />}</li>
                    : 
                        <li key={c.pk}>{<FontAwesomeIcon className="iconCircle" icon={faCircle} onClick={()=> setCarousel(c.pk)} />}</li>
                )
            }</div>
        </div>
    );
    
    
    // return (
    //     <div className="carrosselContainer">
    //         <h3 className="user-review-title">Veja o que nossos usuários acharam!</h3>
    //         <Carousel stopOnHover={true} showThumbs={false} showStatus={false} showArrows={true} autoPlay={true} stopOnHover={true} infiniteLoop={true}>
    //             <div id="review">
    //                 <div className="legend">
    //                     <h2 id="user-review-name">João</h2>
    //                     <h1 id="review-title">Lorem Ipsum 1</h1>
    //                     <p id="review-coments">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis. Fusce fermentum augue lorem, vitae sollicitudin justo rutrum vel. Donec auctor arcu at nibh faucibus, at congue nulla auctor. Proin at est quis leo pulvinar dapibus. Pellentesque aliquet aliquam mi, sed accumsan velit fringilla placerat. Nullam a ipsum sodales, malesuada enim et, eleifend sapien. Integer sit amet risus mi. Sed a est nulla.</p>
    //                 </div>
    //             </div>
    //             <div id="review">
    //                 <div className="legend">
    //                     <h2 id="user-review-name">Willian</h2>
    //                     <h1 id="review-title">Lorem Ipsum 2</h1>
    //                     <p id="review-coments">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis. Fusce fermentum augue lorem, vitae sollicitudin justo rutrum vel. Donec auctor arcu at nibh faucibus, at congue nulla auctor. Proin at est quis leo pulvinar dapibus. Pellentesque aliquet aliquam mi, sed accumsan velit fringilla placerat. Nullam a ipsum sodales, malesuada enim et, eleifend sapien. Integer sit amet risus mi. Sed a est nulla.</p>
    //                 </div>
    //             </div>
    //             <div id="review">
    //                 <div className="legend">
    //                     <h2 id="user-review-name">Fernando</h2>
    //                     <h1 id="review-title">Lorem Ipsum 3</h1>
    //                     <p id="review-coments">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis. Fusce fermentum augue lorem, vitae sollicitudin justo rutrum vel. Donec auctor arcu at nibh faucibus, at congue nulla auctor. Proin at est quis leo pulvinar dapibus. Pellentesque aliquet aliquam mi, sed accumsan velit fringilla placerat. Nullam a ipsum sodales, malesuada enim et, eleifend sapien. Integer sit amet risus mi. Sed a est nulla.</p>
    //                 </div>
    //             </div>
    //         </Carousel>
    //     </div>
    // );
}