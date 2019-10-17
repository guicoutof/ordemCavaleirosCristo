const express = require("express");


const server = express();
var baseId = 1;
server.use(express.json());

users = [
  {
    id: 0,
    type: "aluno",
    name: "Ana Luisa Chaves Figueira",
    email:"anachfigueira@gmail.com",
    password: "123"
  }
];

server.use((req,res,next)=>{
  console.time("Request");
  console.log(`Método ${req.method}; URL: ${req.url}; `)

  next();

  console.timeEnd("Request");
});

function checkIfUserExists(req,res,next){
  const {id} = req.params;
  
  const index = users.findIndex(user => user.id == id);
  if(index === -1)
    return res.status(404).json({error:"Usuário não encontrado"});
  else{
    req.user = users[index];
    req.index = index;
    return next();
  }
}

server.get('/users',(req,res) =>{
  return res.json(users);
});

server.get('/users/:id',checkIfUserExists,(req,res) =>{
  return res.json(req.user);
});

server.post('/users',(req,res)=>{
  const {type,name,email,password} = req.body;
  users.push({
    id: baseId,
    type,
    name,
    email,
    password
  });
  baseId++;
  return res.json({success:"Usuário adicionado com sucesso!"});
});

server.put('/users/:id',checkIfUserExists,(req,res)=>{
  const {type,name,email,password} = req.body;
  users[req.index] = {
      type,
      name,
      email,
      password,
  }
  return res.json(users[req.index]);
});

server.delete('/users/:id',checkIfUserExists,(req,res)=>{
  users.splice(req.index,1);

  return res.json({success:"Usuário removido com sucesso!"});
});

server.listen(3000);