import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPowerOff, faUserEdit} from "@fortawesome/free-solid-svg-icons";
import {useAuthContext} from "../../context/AuthContext";

export default function Nav() {

    const { isAuthenticated, signOut } = useAuthContext();
    const history = useHistory();

    const handleSignOut = ()=>{
        signOut();
        history.push("/");
    }
    const loginButton = <li><NavLink exact to="/login" className="btn btn-success">Login</NavLink></li>;
    const logoutButton = <button className="linkk btn" onClick={handleSignOut}  activeClassName= "text-dark"><FontAwesomeIcon icon={faPowerOff}/></button>;
    return (
        <div className="linksNav menuCSS3">
            <NavLink className="linkk" activeClassName= "text-dark" exact to="/inicio">Inicio </NavLink>
            <NavLink className="linkk" activeClassName= "text-dark" exact to="/cuidesusalud">Cuide su salud</NavLink>
            <NavLink className="linkk" activeClassName= "text-dark" exact to="/enlacesinteres">Enlaces de interés</NavLink>
            <NavLink className="linkk" activeClassName= "text-dark" exact to="/chat">Chat</NavLink>
            <a target="_blank" rel="noreferrer" className="linkk" activeClassName= "text-dark" href="https://www.aecc.es/es/colabora/dona">Colabora</a>
            <NavLink className="linkk" activeClassName= "text-dark" exact to="/editar"><FontAwesomeIcon icon={faUserEdit}/></NavLink>
           {isAuthenticated ? logoutButton : loginButton}
         
        </div>
    )
}
