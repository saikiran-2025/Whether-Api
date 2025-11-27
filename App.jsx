import "./App.css"
import axios from "axios"
import { useState } from "react"
let App=()=>{
  let [place,setPlace]=useState("")
  let [data,setData]=useState("")
  let [err,setErr]=useState("")
  let getdata=()=>{
    axios.get(`http://api.weatherapi.com/v1/current.json?key=2789d5e58a9f4513ace154512252511&q=${place}&aqi=no`)
    .then((res)=>{
      setData(res.data)
      setErr("")
      setPlace("")
    })
    .catch(()=>{
      setErr("Check place name")
      setData("")
    })
  }
  return(
    <div>
      <h1>🌤 Weather App</h1>
      <input type='text' placeholder='Enter Your Place' onChange={(e)=>setPlace(e.target.value)} value={place}/>
      <button onClick={getdata}>Get Temp</button>
      {
        data!="" && <div className='tempcard'>
          <p>Name:{data.location.name}</p>
          <p>Region:{data.location.region}</p>
          <p>Country:{data.location.country}</p>
          <p>Humidity:{data.current.humidity}</p>
          <p>Cloud:{data.current.cloud}</p>
          <p>Condition:{data.current.condition.text}</p>
          <p>Temp:{data.current.temp_c}</p>
          <p>Feelslike:{data.current.feelslike_c}</p>
        </div>
      }
      {
        err!="" && <div>{err}</div>
      }
    </div>
  )
}
export default App