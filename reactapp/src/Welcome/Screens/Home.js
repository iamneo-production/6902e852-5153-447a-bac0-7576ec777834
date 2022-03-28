import React from 'react'
import '../styles/welcss.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../assets/img.png'
//import {Link} from 'react-router-dom'
//import {Button} from 'react-bootstrap'
//import { useNavigate } from "react-router-dom";
function Home() {
  
   // let navigate = useNavigate(); 
  return (
    <div className='main'>
        <div className='homeBody'>
            <h1>Welcome to Printer Service</h1>
            <p className='pHome'>Trusted by over Million Users!</p>
            <div className="wrapper">
            <div>
                
            </div>
            <a href="/Register" className='ButtonClass b1'>Register</a>
                
            <div>
                <a href="/Login" className='ButtonClass b2'>Login</a>
            </div>
          </div>
          <div> 
            <img src={img} alt="printer" />
          </div>
          
         
          </div>
      </div>
  )
}

export default Home
/** <button onClick={()=>{navigate("/Register")}} className="ButtonClass b1">Register</button> */