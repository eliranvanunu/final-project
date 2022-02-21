
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword';
import AddGreenHouse from './components/AddGreenHouse';
import UpdateGreenHouse from './components/UpdateGreenHouse';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
       <div>
         {/* <Link to="/"> <span style={{color: 'red', width: 200, margin: 20}}>Home</span></Link>
         <Link to="sign-up" style={{margin:20}}>sign up</Link>
         <Link to="login" style={{margin:20}}>login</Link>
         <Link to="/forget-password" style={{margin:20}}>forget password</Link>
         <Link to="/add" style={{margin:20}}>add green house</Link>
         <Link to="/update" style={{margin:20}}>update green house</Link> */}

       </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forget-Password" element={<ForgetPassword/>}/>
        <Route path="/add" element={<AddGreenHouse/>}/>
        <Route path="/update" element={<UpdateGreenHouse/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
