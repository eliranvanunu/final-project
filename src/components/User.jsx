import React from 'react'

export default class User {
constructor(userName,email,password, confirmPass){
   this.userName = userName;
   this. email = email;
   this.password = password;
   this.confirmPass = confirmPass;
}


// tos(){
//     return `user name = ${this.userName} ,email= ${this.email}, pass = {this.password}, confirm pass = ${this.confirmPass}`;
// }

}
