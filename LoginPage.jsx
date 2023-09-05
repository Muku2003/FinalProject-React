import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import'./LoginPage.css'
import { useNavigate } from 'react-router-dom'
export default function Login() {
 const[mail,setmail]=useState('')
const[password,setpassword]=useState('')
const[check,setcheck]=useState('')
const nav=useNavigate()
const handle=(e)=>{
  e.preventDefault();
}
const handleSubmit =  (e) => {
    e.preventDefault();
    axios.get(`http://127.0.0.1:8081/getlogin/${mail}/${password}`)
    .then(res => setcheck(res.data))
  if(check===true){
    console.log("valid");
     nav("/booking")
    alert("Valid credential")
}
  else if(check===false){
    console.log("invalid");
    alert('Invalid credential')
  }
  
}
  return (
    <div id="border">
      <h1 id='h'>Login</h1>
    <form>
        <label><b>EMAIL ID     :</b></label>
        <input type='email' name="Email" id="mail" placeholder="email" size={40} onChange={(e)=>setmail(e.target.value)}></input><br></br><br></br><br></br>
        <label><b>PASSWORD      :</b></label>
        <input type='password' name="Password" id="password" placeholder="Password" size={40} onChange={(e)=>setpassword(e.target.value)}></input><br></br><br></br>
        <button onClick={handleSubmit}>LOGIN</button>   
    </form>
    <br></br><br></br>
    </div>
  )
  }