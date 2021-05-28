import React from 'react'
import {NavLink} from "react-router-dom";



export default function Navbar() {


    return (
           
            <div className="topnav">
               <NavLink className="" exact to="/">MUJERES QUE LUCHAN</NavLink> 
               
                <div className="login-container">
                        
                        <input className="input2 " type="text" placeholder="Correo electrónico" />
                        <input className="input2" type="text" placeholder="Contraseña" />
                    
                    <button>Entrar</button>
                </div>
            </div>
          
    )
}
