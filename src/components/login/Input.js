import React from 'react'
import m5 from "../../image/m5.png";
import {useHistory} from "react-router-dom";
import {NavLink} from "react-router-dom";

export default function Input() {

    const history = useHistory();

    function handleClick(){
        history.push(`/register`)
    }

    return (
        <div className="vh">
           
            <div>
                <img  className="logo" src={m5}></img>
            </div>
           
            <div>
                <label className="labell" for="exampleInputEmail1">Usuario</label>
            </div>

            <input type="email" className="input" id="exampleInputEmail1" placeholder="Correo electrónico"></input>
            
            <div>
                <label className="labell" for="exampleInputEmail1">Contraseña</label>
          
            </div>
            <input type="password" className="input" id="exampleInputEmail1" placeholder="*****************"></input>
            
            <div>
                <button className="button1">Iniciar Sesión</button>
            </div>
            
            <div className="link">
            <NavLink className="link" exact to="/forgetpassword">¿Has olvidado la contraseña?</NavLink>
            </div>
            <button onClick={()=>handleClick()} className="button2">Crear cuenta nueva</button>
          
        </div>
    )
}
