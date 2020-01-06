import axios from "axios";
import { getToken } from "./auth";

import Image from '../assets/img/test.png'

const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://74.117.156.74:3001"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

export const courses = [
  {pk:0,module:1,title:'Misticismo Católico A Fé em Ação',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
  {pk:1,module:1,title:'Kabbalah',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
  {pk:2,module:1,title:'Alquimia',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
  {pk:3,module:1,title:'Alquimi',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
  {pk:4,module:2,title:'Alquim',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
  {pk:5,module:2,title:'Alqui',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
  {pk:6,module:2,title:'Alqu',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
  {pk:7,module:2,title:'Alq',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
  {pk:8,module:1,title:'Al',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
  {pk:9,module:1,title:'A',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
  {pk:10,module:1,title:'Alquimia',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
];

export const services = [
  {pk:0,title:'Mapa Astral Judaico',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
  {pk:1,title:'Mapa Astral Chines',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
  {pk:2,title:'Mapa Astral Chines',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
  {pk:3,title:'Mapa Astral Chines',image:Image,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi, exercitationem autem animi eos eveniet nobis ipsum officiis consequatur accusantium necessitatibus',price:50.00},
];

export const feedbacks = [
  {pk:0,name:'Kauan',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis.'},
  {pk:1,name:'Hugo',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis.'},
  {pk:2,name:'Evandro',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis.'},
  {pk:3,name:'Yago',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis.'},
];