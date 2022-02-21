import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [showErrLbl, setShowErrLbl] = useState(false);
  const navigate = useNavigate();

  const btnLogin = () => {

    if (localStorage.users !== undefined) {
      let users = JSON.parse(localStorage.users);
      let userFound = users.filter(user => user.userName === userName && user.password === password);
      if (userFound.length !== 0 || userFound !== null && (userName !== null && password !== null )){
        setShowErrLbl(false);
        navigate('/add');
      }
      else {
        alert('email or password is not valid')
        setShowErrLbl(true);
      }
    }
  }
  const btnSingUp = () =>{
    navigate('/sign-up');
  }

  return (
  <div className='contain'>
     <div className='home'>
      <h2>כניסת לקוחות</h2>
      <a href='/'><ion-icon className="iconHome" name="home-outline"></ion-icon></a>
      
      </div>
   <form>
     <div className = "mb-3">
       <label for="exampleInputEmail1" className = "form-label">שם משתמש</label>
       <input type="text" className = "form-control" id = "exampleInputEmail1" onChange={(e)=> setUserName(e.target.value)} aria-describedby="emailHelp" />
     </div>
    <div className = "mb-3">
       <label for="exampleInputPassword1" className = "form-label">סיסמה</label>
       <input type="password" className = "form-control"  onChange={(e)=> setPassword(e.target.value)} id="exampleInputPassword1"/>
    </div>
    <button style={{margin:10}} onClick={btnLogin}  type="submit" className = "btn btn-success">כניסה</button>
    <button style={{margin:10}} onClick={btnSingUp}  type="submit" className = "btn btn-success">הרשמה</button>
    <p className="forgot-password text-right">
            <a href="/forget-password">שכחתי סיסמה ?</a>
    </p>

  </form>
    </div>
  )
}
