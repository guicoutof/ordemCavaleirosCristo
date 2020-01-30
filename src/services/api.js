import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://74.117.156.74:5124"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;


export const feedbacks = [
  {pk:0,name:'Kauan',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis.'},
  {pk:1,name:'Hugo',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis.'},
  {pk:2,name:'Evandro',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis.'},
  {pk:3,name:'Yago',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis.'},
];