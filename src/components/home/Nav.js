import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="linksNav">
            <NavLink className="linkk" activeClassName= "text-dark" exact to="/inicio">Inicio </NavLink>
            <NavLink className="linkk" activeClassName= "text-dark" exact to="/cuidesusalud">Cuide su salud</NavLink>
            <NavLink className="linkk" activeClassName= "text-dark" exact to="/enlacesinteres">Enlaces de interés</NavLink>
            <NavLink className="linkk" activeClassName= "text-dark" exact to="/chat">Chat</NavLink>
            <a target="_blank" className="linkk" activeClassName= "text-dark" href="https://www.aecc.es/es/colabora/dona">Colabora</a>
            
        </div>
    )
}
