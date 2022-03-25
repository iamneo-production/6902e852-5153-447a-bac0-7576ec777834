import React from 'react';
import LoginForm from './LoginForm';
import printerImg from '../assets/printerLogin.png';
import '../styles/Register.css';

function Login(){

    return(
        <div class='body'>
        <div  class="Formcontainer">
            <div className="row" style={{justifyContent:'space-around'}}>
            
                <div className="col-md-5 text-center">
                    <LoginForm/>
                </div>
                <div className="col-md-5" style={{position:'relative'}}>
                    <img src={printerImg} alt="" className="img-fluid mx-auto my-auto w-100" />
                    
                </div>
                

            </div>
        </div>
        
        </div>
    );
}
export default Login;