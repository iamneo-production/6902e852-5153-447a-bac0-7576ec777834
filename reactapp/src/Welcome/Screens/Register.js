import React from 'react';
import RegisterForm from './RegisterForm';
import printerImg from '../assets/printer.png';
import '../styles/Register.css';
function Register(){
    return(
        <div class='body'>
        <div  class="Formcontainer">
            <div className="row" style={{justifyContent:'space-around'}}>
            
                <div className="col-md-5 text-center">
                    <RegisterForm/>
                </div>
                <div className="col-md-5" style={{position:'relative'}}>
                    <img src={printerImg} alt="" className="img-fluid mx-auto my-auto w-100" />         
                </div>       

            </div>
        </div>
        
        </div>
    );
}
export default Register;