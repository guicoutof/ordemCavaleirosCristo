import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './userReviews.css';

import Um from '../../assets/img/1.jpg';

/* 
let sectionStyle = {
    //backgroundImage: "require(`urlEmelent`)",  
    bullets: false,
    fillParent: true,
}; */

export default () => {
    return (
        <Carousel showThumbs={false} lenght={3} showStatus={false} showArrows={true} autoPlay={true} stopOnHover={true} infiniteLoop={true}>
            <div id="review">
                <div className="legend">
                    <div style={{ backgroundImage: "url(" + Um + ")" }}></div>
                    <h2 className="user-review-name">John</h2>
                    <h1 className="review-title">Lorem Ipsum 1</h1>
                    <p id="review-coments">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis. Fusce fermentum augue lorem, vitae sollicitudin justo rutrum vel. Donec auctor arcu at nibh faucibus, at congue nulla auctor. Proin at est quis leo pulvinar dapibus. Pellentesque aliquet aliquam mi, sed accumsan velit fringilla placerat. Nullam a ipsum sodales, malesuada enim et, eleifend sapien. Integer sit amet risus mi. Sed a est nulla.</p>
                </div>
            </div>
            <div id="review">
                <div className="legend">
                    <div style={{ backgroundImage: "url(" + Um + ")" }}></div>
                    <h2 className="user-review-name">John</h2>
                    <h1 className="review-title">Lorem Ipsum 2</h1>
                    <p id="review-coments">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis. Fusce fermentum augue lorem, vitae sollicitudin justo rutrum vel. Donec auctor arcu at nibh faucibus, at congue nulla auctor. Proin at est quis leo pulvinar dapibus. Pellentesque aliquet aliquam mi, sed accumsan velit fringilla placerat. Nullam a ipsum sodales, malesuada enim et, eleifend sapien. Integer sit amet risus mi. Sed a est nulla.</p>
                </div>
            </div>
            <div id="review">
                <div className="legend">
                    <div style={{ backgroundImage: "url(" + Um + ")" }}></div>
                    <h2 className="user-review-name">John</h2>
                    <h1 className="review-title">Lorem Ipsum 3</h1>
                    <p id="review-coments">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis. Fusce fermentum augue lorem, vitae sollicitudin justo rutrum vel. Donec auctor arcu at nibh faucibus, at congue nulla auctor. Proin at est quis leo pulvinar dapibus. Pellentesque aliquet aliquam mi, sed accumsan velit fringilla placerat. Nullam a ipsum sodales, malesuada enim et, eleifend sapien. Integer sit amet risus mi. Sed a est nulla.</p>
                </div>
            </div>
        </Carousel>
    );
}

