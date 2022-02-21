
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UpdateGreenHouse from './UpdateGreenHouse';
import User from './User';


export default function SignUp() {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const navigate = useNavigate();

  const btnAddUser = () =>{
    let user = new User(userName,email,password,confirmPass);
    if(localStorage.users !== undefined)
    {
      let users = JSON.parse(localStorage.users)
      let newUsers = [...users, user]
      localStorage.users = JSON.stringify(newUsers);
    }
    else{
      localStorage.users = JSON.stringify([user]);
    }
    navigate('/login')
    
  }
  return (
    <div className='contain'>
       <div className='home'>
      <h2>הרשמה</h2>
      <a href='/'><ion-icon className="iconHome" name="home-outline"></ion-icon></a>
      
      </div>
    <form>
        <div className = "mb-3">
    <label for="exampleInputEmail1" className = "form-label">שם משתמש</label>
    <input type="text" className = "form-control" id = "exampleInputEmail1" onChange={(e)=> setUserName(e.target.value)} aria-describedby="emailHelp" />
  </div>
  <div className = "mb-3">
    <label for="exampleInputEmail1" className = "form-label">דואר אלקטרוני</label>
    <input type="email" className = "form-control" id = "exampleInputEmail2"  onChange={(e)=> setEmail(e.target.value)} aria-describedby="emailHelp"/>
   
  </div>
  <div className = "mb-3">
    <label for="exampleInputPassword1" className = "form-label">סיסמה</label>
    <input type="password" className = "form-control"  onChange={(e)=> setPassword(e.target.value)} id="exampleInputPassword1"/>
  </div>
  <div className = "mb-3">
    <label for="exampleInputPassword1" className = "form-label">אימות סיסמה</label>
    <input type="password" className = "form-control"  onChange={(e)=> setConfirmPass(e.target.value)} id="exampleInputPassword2"/>
  </div>
  <button onClick={btnAddUser} type="submit" className = "btn btn-success">Submit</button>
</form>
</div>

  )
}
