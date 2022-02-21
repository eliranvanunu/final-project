import React from 'react'
import { useState } from 'react';
import User from './User';



export default function () {
  const [u, setUserName] = useState(null);
  const [mail, setEmail] = useState(null);


    const btnSendPass = () =>{
    let users = JSON.parse(localStorage.users);
    const resultUserName = users.find( ({ userName }) => userName === u );
    const resultEmail = users.find( ({ email }) => email === mail );
   

    debugger
    if(resultUserName != undefined && resultEmail != undefined){
      
      alert('המייל נשלח בהצלחה')
    }
    else{
      alert('דואר האלקטרוני לא קיים במערכת')
    }

    
  }
  return (
    <div  className='contain'>
    <div className='home'>
      <h2>שכחתי סיסמה</h2>
      <a href='/'><ion-icon className="iconHome" name="home-outline"></ion-icon></a>
      
      </div>
    <form>
    <div className = "mb-3">
       <label for="exampleInputEmail1" className = "form-label">שם משתמש</label>
       <input type="text" className = "form-control" id = "exampleInputEmail1" onChange={(e)=> setUserName(e.target.value)} aria-describedby="emailHelp" />
     </div>
     <div className = "mb-3">
       <label for="exampleInputEmail1" className = "form-label">דואר אלקטרוני</label>
       <input type="email" className = "form-control" id = "exampleInputEmail1" onChange={(e)=> setEmail(e.target.value)} aria-describedby="emailHelp" />
     </div>  
     <button style={{margin:15}} onClick={btnSendPass}  type="submit" className = "btn btn-success">שלח לי סיסמה חדשה</button>
     </form>  
    </div>
  )
}
