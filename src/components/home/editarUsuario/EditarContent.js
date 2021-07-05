import React from 'react'
//import {useState} from "react-router-dom";

export default function EditarContent() {
    // const {loginUser} = useAuthContext();
    // const [editing, setEditing] = useState(false)

    // const initialFormState = { id: null, name: '', lastname: '', email:'', password:'' }
    // const [currentUser, setCurrentUser] = useState(initialFormState)
  
    // const updateUser = user => {
    //   setEditing(true) 
    //   setCurrentUser({ id: user.id, name: user.name, username: user.username })
    // }

   
       

    return (
        <div className="flex-grow photo2 ">
            <div>
                <h2 className="title">EDITA TU CUENTA </h2>
                <div className="marginInput">
                    <label for="exampleInputName"></label>
                    <input type="text" className="" id="exampleInputName" placeholder="Nombre"></input>
                </div>

                <div className="marginInput">
                    <label for="exampleInputLastName"></label>
                    <input type="text" id="exampleInputLastName" placeholder="Apellidos"></input>
                </div>

                <div className="marginInput">
                    <label for="exampleInputEmail1"></label>
                    <input type="email" id="exampleInputEmail1" placeholder="Correo electrónico"></input>
                </div>

                <div className="marginInput">
                    <label for="examplePassword"></label>
                    <input type="password" id="examplePassword" placeholder="Contraseña"></input>
                </div>

                <button className="button3">Guardar cambios</button>
                <button className="button3">Eliminar cuenta</button>

            </div>

        </div>

    )
}
