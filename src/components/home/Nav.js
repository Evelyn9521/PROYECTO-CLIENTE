import React from 'react'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPowerOff} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    return (
        <div className="linksNav menuCSS3">
            <NavLink className="linkk" activeClassName= "text-dark" exact to="/inicio">Inicio </NavLink>
            <NavLink className="linkk" activeClassName= "text-dark" exact to="/cuidesusalud">Cuide su salud</NavLink>
            <NavLink className="linkk" activeClassName= "text-dark" exact to="/enlacesinteres">Enlaces de interés</NavLink>
            <NavLink className="linkk" activeClassName= "text-dark" exact to="/chat">Chat</NavLink>
            <a target="_blank" className="linkk" activeClassName= "text-dark" href="https://www.aecc.es/es/colabora/dona">Colabora</a>
           <NavLink className="linkk" activeClassName= "text-dark" exact to="/"><FontAwesomeIcon icon={faPowerOff}/></NavLink>

        </div>
    )
}
