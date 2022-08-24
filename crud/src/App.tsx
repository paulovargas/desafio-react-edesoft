import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import React, { useEffect, useState} from 'react';
import { getUsers, postUser, deleteUser, getUser, updateUser } from './http/apiUsers';
import { connect } from 'react-redux';
import { User } from './interfaces/user';

function App({
  getUsers,
  stateUser,
  postUser,
  deleteUser,
  getUser,
  updateUser
}:any){

  const [ isCreate, setIsCreate ] = useState(true)
  const [ { 
    
    address: {
      city,
      geolocation:{
         lat,
         long 
      },
      number,
      street,
      zipcode,
  
      },
      email,
      id,
      name: {
          firstname,
          lastname
      },
      password,
      phone,
      username 
  
  }, setState ] = useState({

    address: {
      city: '',
      geolocation:{
         lat: '',
         long: '' 
      },
      number: '',
      street: '',
      zipcode: '',
  
      },
      email: '',
      id: '',
      name:{
          firstname: '',
          lastname: ''
      },
      password: '',
      phone: '',
      username: '' 
  })

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  function addUser(e:React.ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    if(isCreate){
      postUser({ 
      
      email,
      username,
      password,
      firstname,
      lastname,
      city,
      street,
      number,
      zipcode,
      lat,
      long,
      phone

    })
    }
    else {
      updateUser({ 
      
      id,
      email,
      username,
      password,
      firstname,
      lastname,
      city,
      street,
      number,
      zipcode,
      lat,
      long,
      phone

    })
    }
    setIsCreate(true)
    clearInputs()
  }

function handleInputChange(name: string, value: string){
  setState({
    
    address: {
      city,
      geolocation:{
         lat,
         long 
      },
      number,
      street,
      zipcode,
  
      },
      email,
      id,
      name:{
          firstname,
          lastname
      },
      password,
      phone,
      username, 
    [name]: value

  })
}

function removeUser(id: string){
  if(window.confirm("Deseja deletar esse usuário ?")){
    deleteUser(id)
  }
}

function clearInputs(){
  setState({

    address: {
      city: '',
      geolocation:{
         lat: '',
         long: '' 
      },
      number: '',
      street: '',
      zipcode: '',
  
      },
      email: '',
      id: '',
      name:{
          firstname: '',
          lastname: ''
      },
      password: '',
      phone: '',
      username: '' 

  })
  setIsCreate(true)
}

function getOneUser(id: string){
  getUser(id).then((user: User) => {
    setIsCreate(false)
    setState(user)
    window.scrollTo(0, 0)
  })
}

return (
  
  <div className='App'>
    <h1 className='mt-5'>Cadastro de usuários</h1>
    <div className="form m-5">
    <div className="row">
      <div className="col-12 col-md-6">
          <div className="form-group">
              <label>Nome</label>
              <input 
                  type="text" 
                  className="form-control"
                  placeholder="Digite o nome..."
                  name='firstname'
                  onChange={(e) => handleInputChange("firstname", e.target.value)}
                  value={firstname}
                  />
          </div>
      </div>
      <div className="col-12 col-md-6">
          <div className="form-group">
              <label>Sobrenome</label>
              <input 
                  type="text" 
                  className="form-control"
                  placeholder="Digite o sobrenome..."
                  name='lastname'
                  onChange={(e) => handleInputChange("firstname", e.target.value)}
                  value={lastname}
                  />
          </div>
      </div>
      <div className="col-12 col-md-6">
          <div className="form-group">
              <label>Login</label>
              <input 
                  type="text" 
                  className="form-control"
                  placeholder="Digite o login..."
                  name='username'
                  onChange={(e) => handleInputChange("firstname", e.target.value)}
                  value={username}
                  />
          </div>
      </div>
      <div className="col-12 col-md-6">
          <div className="form-group">
              <label>Email</label>
              <input 
                  type="text" 
                  className="form-control"
                  placeholder="Digite o email..."
                  name='email'
                  onChange={(e) => handleInputChange("firstname", e.target.value)}
                  value={email}
                  />
          </div>
      </div>
      <div className="col-12 col-md-6">
          <div className="form-group">
              <label>Senha</label>
              <input 
                  type="text" 
                  className="form-control"
                  placeholder="Digite a senha..."
                  name='password'
                  onChange={(e) => handleInputChange("firstname", e.target.value)}
                  value={password}
                  />
          </div>
      </div>
      <div className="col-12 col-md-6">
          <div className="form-group">
              <label>Cidade</label>
              <input 
                  type="text" 
                  className="form-control"
                  placeholder="Digite a cidade..."
                  name='city'
                  onChange={(e) => handleInputChange("firstname", e.target.value)}
                  value={city}
                  />
          </div>
      </div>
      <div className="col-12 col-md-6">
          <div className="form-group">
              <label>Rua</label>
              <input 
                  type="text" 
                  className="form-control"
                  placeholder="Digite a rua..."
                  name='street'
                  onChange={(e) => handleInputChange("firstname", e.target.value)}
                  value={street}
                  />
          </div>
      </div>
      <div className="col-12 col-md-6">
          <div className="form-group">
              <label>Número</label>
              <input 
                  type="text" 
                  className="form-control"
                  placeholder="Digite o número..."
                  name='number'
                  onChange={(e) => handleInputChange("firstname", e.target.value)}
                  value={number}
                  />
          </div>
      </div>
      <div className="col-12 col-md-6">
          <div className="form-group">
              <label>CEP</label>
              <input 
                  type="text" 
                  className="form-control"
                  placeholder="Digite o CEP..."
                  name='zipcode'
                  onChange={(e) => handleInputChange("zipcode", e.target.value)}
                  value={zipcode}
                  />
          </div>
      </div>
      <div className="col-12 col-md-6">
          <div className="form-group">
              <label>Telefone</label>
              <input 
                  type="text" 
                  className="form-control"
                  placeholder="Digite o telefone..."
                  name='phone'
                  onChange={(e) => handleInputChange("firstname", e.target.value)}
                  value={phone}
                  />
          </div>
      </div>
    </div>
<hr/>

  <div className="row">
    <div className="col-12 d-flex justify-content-center">
      <button className="btn btn-primary m-2">
      {isCreate ? "Salvar" : "Alterar"}
      </button>
      
      <button 
        
        className="btn btn-secondary m-2"
        onClick={() => clearInputs()}
        
        >
        Cancelar
      </button>
    </div>
  </div>
</div>

{/*     <form onSubmit={addUser}>
      <input
        style={{padding: 12}}
        placeholder="Nome"
        name='firstname'
        onChange={(e) => handleInputChange("firstname", e.target.value)}
        value={firstname}      
      />
      <button style={{padding:12, backgroundColor:"blue", color:"white"}}>
        {isCreate ? "Add" : "Edit"}
      </button>
    </form> */}

    <div className='gridUser'>
      <h1>Lista de usuários</h1>
      <hr />
      <table className='table'>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nome</th>
        <th scope="col">Sobrenome</th>
        <th scope="col">Login</th>
        <th scope="col">Email</th>
        <th scope="col">Ações</th>
      </tr>
    </thead>
    <tbody>
    {stateUser.listUser.map((item: User) => (
      <tr className='lineGrid' key={item.id}>
      <th>{item.id}</th>
      <td>{item.name.firstname}</td>
      <td>{item.name.lastname}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>
        <button className="btn btn-warning m-2"
          onClick={() => getOneUser(item.id)}>
            <i className="fa fa-pencil"></i>
        </button>
        <button className="btn btn-danger m-2"
          onClick={() => removeUser(item.id)}>
            <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
    ))}
           
    </tbody>
  </table>
    </div>
  </div>
);
}

const mapStateToPropos = (state: any) => {
  return {
    stateUser: state.userReducer
  };
};

const mapDispatchToProps = {
  getUsers,
  postUser,
  deleteUser,
  getUser,
  updateUser
};

export default connect(mapStateToPropos, mapDispatchToProps)(App);