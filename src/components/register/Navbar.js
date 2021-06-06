import React from 'react'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faRibbon} from "@fortawesome/free-solid-svg-icons";



export default function Navbar() {


    return (
            <div className="topnav">
               
               <button className="buttonNav"><NavLink className="logoLeft" exact to="/">MQL<FontAwesomeIcon className="ribbon" icon={faRibbon} ></FontAwesomeIcon></NavLink> </button>
               
                <div className="login-container">
                        
                        <input className="input2 " type="text" placeholder="Correo electrónico" />
                        <input className="input2" type="text" placeholder="Contraseña" />
                    
                    <button>Entrar</button>
                </div>
            </div>
          
    )
}
