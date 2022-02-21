import React, {useEffect, useState} from "react";
import AddGreenHouse from "./AddGreenHouse";
import GreenHouse from './GreenHouse';

export default function UpdateGreenHouse(props) {

  let greenHouseName = props.nameGreenHouse
  let greenHouseNumber = props.numberGreenHouse
  
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);  
  const [water, setWater] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [minTemperature, setMinTemperature] = useState(0);
  const [maxTemperature, setmaxTemperature] = useState(0);
  const [houseData, setGreenHouse] = useState()
  const btnAddGreenData =()=>{
      let greenHouses = JSON.parse(localStorage.greenHouses);
      let temp = greenHouses.filter(per => per.numberGreenHouse !== greenHouseNumber)
      let greenHouse = new GreenHouse(greenHouseName,greenHouseNumber,minTemperature, maxTemperature, hour, minute, water, humidity)
      let newGreenHouses = [...temp, greenHouse]
      localStorage.greenHouses = JSON.stringify(newGreenHouses);
  }



  return (
   
    <div  className='contain'>
      <div className='home'>
      <h2>עדכון נתונים</h2>
      <a href='/'><ion-icon className="iconHome" name="home-outline"></ion-icon></a>
      
      </div>
   
      <form>  
       
        <div className="container" ><br/>
        
          <div className="row">
            <div className="col" >טמפרטורה:</div>
            מינימום<div className="col"><input type="text" className = "form-control" id = "exampleInputEmail1"  aria-describedby="emailHelp" onChange={(e)=> setMinTemperature(e.target.value)} /></div>
            מקסימום<div className="col"><input type="text" className = "form-control" id = "exampleInputEmail1"  aria-describedby="emailHelp" onChange={(e)=> setmaxTemperature(e.target.value)}/></div>C
            <div className="w-100" className = "mb-3"></div>
            <div className="col">כמות אור יומית:</div>
            <div className="col"> 
            דקות<input type="number" className = "form-control" id = "exampleInputEmail1" min={0} max={59}  aria-describedby="emailHelp" onChange={(e)=> setMinute(e.target.value)} />
            </div>
            <div className="col"> שעות<input type="number" className = "form-control" id = "exampleInputEmail1" min={0} max={23}  aria-describedby="emailHelp" onChange={(e)=> setHour(e.target.value)} /></div>
            <div className="w-100" className = "mb-3"></div>
            <div className="col">כמות מים יומית:</div>
            <div className="col">ליטר<input type="number" className = "form-control" id = "exampleInputEmail1" min={0}  aria-describedby="emailHelp" onChange={(e)=> setWater(e.target.value)} /></div>
            <div className="w-100" className = "mb-3"></div>
            <div className="col">לחות:</div>
            <div className="col">%<input type="number" className = "form-control" id = "exampleInputEmail1" min={0} max={100}  aria-describedby="emailHelp" onChange={(e)=> setHumidity(e.target.value)} /></div>
          </div>
        </div>
        <button style={{margin:10}}  type="submit" className = "btn btn-success"  onClick={btnAddGreenData}>שלח נתונים</button>
      </form>
    </div>

  )
}
