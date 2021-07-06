import React from 'react'
import {useAuthContext} from "../../../context/AuthContext";
import {EDIT_USER} from "../../../config/config";
import {DELETE_USER} from "../../../config/config";
import { useForm } from "../../../hooks/UseForm";

export default function EditarContent() {
   
    const {loginUser} = useAuthContext();
    const [form, handleChange] = useForm({name: loginUser.name, lastname: loginUser.lastname, email:loginUser.email, password:loginUser.password});
    
     const handleSubmit = async e => {
        e.preventDefault();

        const options = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }

        const response = await fetch(EDIT_USER + loginUser.id, options);
        const data = await response.json();
        console.log(data);
        }

    const Delete = async e => {
        e.preventDefault();

        const options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }

        const response = await fetch(DELETE_USER + loginUser.id, options);
        const data = await response.json();
        console.log(data);
    }
  

    return (
        <form onSubmit={handleSubmit}  className="flex-grow photo2 ">
            <div>
                <h2 className="title">EDITA TU CUENTA </h2>
                <div className="marginInput">
                    <label for="exampleInputName"></label>
                    <input onChange={handleChange} type="text" className="" id="exampleInputName" placeholder="Nombre" name="name" value={form.name}></input>
                </div>

                <div className="marginInput">
                    <label for="exampleInputLastName"></label>
                    <input onChange={handleChange} type="text" id="exampleInputLastName" placeholder="Apellidos" name="lastname" value={form.lastname}></input>
                </div>

                <div className="marginInput">
                    <label for="exampleInputEmail1"></label>
                    <input onChange={handleChange} type="email" id="exampleInputEmail1" placeholder="Correo electrónico" name="email" value={form.email}></input>
                </div>

                <div className="marginInput">
                    <label for="examplePassword"></label>
                    <input onChange={handleChange} type="password" id="examplePassword" placeholder="Contraseña" name="password" value={form.password}></input>
                </div>
                
                <button onClick={handleSubmit} type="submit" className="button3">Guardar cambios</button>
                
                 <button onClick={Delete} type="submit" className="button3">Eliminar cuenta</button> 

            </div>

        </form>

    )
}
