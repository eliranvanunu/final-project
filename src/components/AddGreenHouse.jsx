import React from 'react'
import {useState} from 'react'
import GreenHouse from './GreenHouse';
import { useNavigate } from 'react-router-dom';
import UpdateGreenHouse from './UpdateGreenHouse';

export default function AddGreenHouse() {

  const [nameHouse, setNameGreenHouse] = useState(null);
  const [numberHouse, setNumberGreenHouse] = useState(0);
  const [House, setGreenHouse] = useState();
  const navigate = useNavigate();
 
  let greenHousesX 
  if (localStorage.greenHouses !== undefined) {
    greenHousesX = JSON.parse(localStorage.greenHouses);
  }
  

  const btnAddGreen =()=>{
    let greenHouse = new GreenHouse(nameHouse,numberHouse)
    //בדיקה אם הערך הראשוני שרוצים להכניס למערך
    if(localStorage.greenHouses !== undefined)
    {
      let greenHouses = JSON.parse(localStorage.greenHouses);
      //במידה ומספר החממה קיים במערך החממות, המערך הזמני טמפ מקבל ערכים
      let temp = greenHouses.filter(per => per.numberGreenHouse === numberHouse)
  //רק אם המערך הזמני לא קיבל ערכים(זאת אומרת שלא הוכנס מספר חממה שקיים במערכת) אז יש עדכון של חממה חדשה במערך החממות
      if(temp.length === 0){
        let newGreenHouses = [...greenHouses, greenHouse]
        localStorage.greenHouses = JSON.stringify(newGreenHouses);
        greenHouses = newGreenHouses
      }
      else{
        alert("מספר החממה בשימוש")
      }
    
    }
    else{
      localStorage.greenHouses = JSON.stringify([greenHouse]);

    }
  }

  
  function handleClick(House) {
   
    navigate('/update');
  }
    


  return (
    <div  className='contain'>
      <div className='home'>
          <h2>הוספת / בחירת חמממה</h2>
      
          <a href='/'><ion-icon className="iconHome" name="home-outline"></ion-icon></a>
      </div>
      
    
      <form>
        <div className = "mb-3">
           <label for="exampleInputEmail1" className = "form-label">שם חממה</label>
            <input type="text" className = "form-control" id = "exampleInputEmail1" onChange={(e)=> setNameGreenHouse(e.target.value)} aria-describedby="emailHelp" />
       </div>
       <div className = "mb-3">
           <label for="exampleInputEmail1" className = "form-label">מספר חממה</label>
           <input type="number" min={1} max={10} className = "form-control" id = "exampleInputEmail2" onChange={(e)=> setNumberGreenHouse(e.target.value)} aria-describedby="emailHelp" />
       </div>
           <a onClick={btnAddGreen} href='#'><ion-icon className='btnAdd' name="add-circle-outline"></ion-icon></a>
  
    <p><u>________________________________________________________</u></p>

      <div>
    <div className = "mb-3">
      <label for="disabledSelect" className = "form-label">בחר חממה</label>
      <select onChange={(e)=> setGreenHouse(e.target.value)} id="disabledSelect" className = "form-select">
           {greenHousesX.map((option) => (<option number={option.numberGreenHouse}> שם: {option.nameGreenHouse} ,מספר: {option.numberGreenHouse}</option>))}
      </select>

    </div>
   
     </div>
          <button style={{margin:15}} onClick={handleClick}  type="submit" className = "btn btn-success">הוסף פרמטרים</button>
    </form>
    
    </div>
  )
}
