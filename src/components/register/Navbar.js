import React from 'react'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faRibbon} from "@fortawesome/free-solid-svg-icons";



export default function Navbar() {


    return (
        <div className="topnav">
            <button className="buttonNav"><NavLink className="logoLeft" exact to="/">INICIAR SESIÓN<FontAwesomeIcon className="ribbon" icon={faRibbon} ></FontAwesomeIcon></NavLink> </button>
        </div>
          
    )
}
