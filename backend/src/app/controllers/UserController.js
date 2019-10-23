import User from '../models/User';

import * as Yup from 'yup';

class UserController {
  async index(req , res){
    const users = await User.findAll()

    res.json(users);
  }

  async show(req, res){
    const user = await User.findByPk(req.userId);

    res.json(user);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      name: Yup.string().required(),
      birth_date: Yup.date(),
      city: Yup.string(),
      state: Yup.string(),
      country: Yup.string(),
      phone_number: Yup.string(),
    })
    if(!(await schema.isValid(req.body)))
      return res.status(400).json({error: 'Invalid data'})
    const { email } = req.body;
    const userExists = await User.findOne({ where: { email } });
    if (userExists)
      return res.status(400).json({ error: 'User already exists' });

    const user = await User.create(req.body);
    return res.json(user);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      oldPassword: Yup.string().required().min(6),
      password: Yup.when('oldPassword',(oldPassword,field) => {
        oldPassword?field.required().string().min(6):field
      }),
      confirmPassword: Yup.when('password',(password,field)=>
        password?field.required().string().min(6).oneOf(Yup.ref(['password'])):field
      ),
      name: Yup.string().required(),
      birth_date: Yup.date(),
      city: Yup.string(),
      state: Yup.string(),
      country: Yup.string(),
      phone_number: Yup.string()
    })

    if(!(await schema.isValid(req.body)))
      return res.status(400).json({error: 'Invalid data'});

    const {email,oldPassword} = req.body;

    const user = await User.findByPk(req.userId);

    if( user.email !== email){
      const userExists = await User.findOne({where:{email}});
      if(userExists)
        return res.status(400).json({error:"This email is already in use!"});
    }

    if( oldPassword && !user.checkPassword(oldPassword))
      return res.status(401).json({error: "Password does not match!"});
    
    const {id,name,birth_date,city,state,country,phone_number} = await user.update(req.body);


    return res.json({id, email,name,birth_date,city,state,country,phone_number});
  }

  async delete(req, res) {
    await User.destroy({
      where: {id:req.userId }
    });

    return res.json({message: 'Usuário excluído com sucesso!'});
  }

}

export default new UserController();
